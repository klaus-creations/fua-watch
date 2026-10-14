/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowDown,
  ArrowUp,
  CornerDownLeft,
  Flame,
  Search,
  SearchX,
  Star,
  Users,
  X,
} from "lucide-react";
import { getSearchvalues } from "../../services/apiRequests";
import { mediaType, releaseYear, tmdbImagePath } from "../../utils/imagePath";
import { detailRedirect } from "../../utils/detailRedirect";
import {
  changeSearchType,
  changeSearchWord,
  closeSearch,
} from "../../features/slices/searchSlice";
import SmartImage from "../ui/SmartImage";

const searchTypes = [
  { value: "movie", label: "Movies" },
  { value: "tv", label: "TV Shows" },
  { value: "person", label: "People" },
];

const quickLinks = [
  { to: "/trending", label: "Trending today", icon: Flame },
  { to: "/top-rated", label: "Top rated movies", icon: Star },
  { to: "/popular-artists", label: "Popular artists", icon: Users },
];

export default function SearchComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchValue = useSelector((state) => state.search.word);
  const searchType = useSelector((state) => state.search.type);
  const [query, setQuery] = useState(searchValue);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef(null);

  const removeSearch = function () {
    dispatch(closeSearch());
  };

  // NOTE: DEBOUNCE TYPING SO WE DON'T HIT THE API ON EVERY KEYSTROKE
  useEffect(() => {
    const timer = setTimeout(() => setQuery(searchValue.trim()), 300);
    return () => clearTimeout(timer);
  }, [searchValue]);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }
    let ignore = false;
    async function getSearch() {
      setLoading(true);
      try {
        const value = await getSearchvalues(query, searchType);
        if (ignore) return;
        setResults(
          value.results?.filter((el) => el.poster_path || el.profile_path) ??
            [],
        );
        setActiveIndex(0);
      } catch (e) {
        console.log("error happend in searching data");
        console.log(e.message || e);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    getSearch();
    return () => {
      ignore = true;
    };
  }, [query, searchType]);

  // NOTE: LOCK PAGE SCROLL WHILE THE DIALOG IS OPEN
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const openResult = function (data) {
    const type = searchType === "tv" ? "tv" : mediaType(data);
    detailRedirect(navigate, type, data.id, removeSearch);
  };

  const handleKeyDown = function (e) {
    if (e.key === "Escape") {
      e.preventDefault();
      removeSearch();
    } else if (e.key === "ArrowDown" && results.length) {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp" && results.length) {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault();
      openResult(results[activeIndex]);
    }
  };

  const isTyping = searchValue.trim() !== query;
  const showSkeleton = query.length >= 2 && (loading || isTyping);
  const placeholder = searchTypes
    .find((el) => el.value === searchType)
    ?.label.toLowerCase();

  return (
    <div
      className="fixed inset-0 z-[500] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      onKeyDown={handleKeyDown}
    >
      <div
        className="absolute inset-0 animate-fade-in bg-black/40 backdrop-blur-sm"
        onClick={removeSearch}
      />

      <div className="relative flex max-h-[70vh] w-full max-w-2xl animate-pop-in flex-col overflow-hidden rounded-2xl border border-line bg-surface/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* INPUT */}
        <div className="flex items-center gap-3 px-5">
          <Search className="size-5 shrink-0 text-accent" strokeWidth={1.75} />
          <input
            autoFocus
            type="text"
            value={searchValue}
            onChange={(e) => dispatch(changeSearchWord(e.target.value))}
            placeholder={`Search ${placeholder}...`}
            className="h-16 min-w-0 flex-1 bg-transparent text-lg font-light text-fg outline-none placeholder:text-subtle"
          />
          {searchValue && (
            <button
              onClick={() => dispatch(changeSearchWord(""))}
              className="grid size-7 cursor-pointer place-items-center rounded-lg text-subtle hover:bg-elevated hover:text-fg"
              aria-label="Clear search"
            >
              <X className="size-4" />
            </button>
          )}
          <kbd className="rounded-md border border-line bg-elevated px-1.5 py-0.5 text-[11px] font-medium text-subtle">
            ESC
          </kbd>
        </div>

        {/* TYPE TABS */}
        <div className="flex gap-1 border-y border-line px-3 py-2">
          {searchTypes.map((el) => (
            <button
              key={el.value}
              onClick={() => dispatch(changeSearchType(el.value))}
              className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                searchType === el.value
                  ? "bg-accent/10 text-accent"
                  : "text-muted hover:bg-elevated hover:text-fg"
              }`}
            >
              {el.label}
            </button>
          ))}
        </div>

        {/* BODY */}
        <div ref={listRef} className="min-h-0 flex-1 overflow-y-auto p-2">
          {query.length < 2 && !isTyping ? (
            <div className="flex flex-col gap-1">
              <span className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-subtle">
                Jump to
              </span>
              {quickLinks.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={removeSearch}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted transition-colors hover:bg-elevated hover:text-fg"
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                  {label}
                </Link>
              ))}
            </div>
          ) : showSkeleton ? (
            <SearchSkeleton />
          ) : results.length > 0 ? (
            <div className="flex flex-col gap-0.5">
              {results.map((el, i) => (
                <SearchResult
                  key={el.id}
                  data={el}
                  index={i}
                  active={i === activeIndex}
                  onHover={() => setActiveIndex(i)}
                  onSelect={() => openResult(el)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 py-14 text-center">
              <span className="grid size-12 place-items-center rounded-2xl bg-elevated text-subtle">
                <SearchX className="size-5" strokeWidth={1.75} />
              </span>
              <p className="font-medium text-fg">No results for “{query}”</p>
              <p className="text-sm text-muted">
                Try a different title or switch the category.
              </p>
            </div>
          )}
        </div>

        {/* FOOTER HINTS */}
        <div className="hidden items-center gap-4 border-t border-line px-5 py-2.5 text-[11px] text-subtle sm:flex">
          <span className="flex items-center gap-1.5">
            <Key>
              <ArrowUp className="size-3" />
            </Key>
            <Key>
              <ArrowDown className="size-3" />
            </Key>
            navigate
          </span>
          <span className="flex items-center gap-1.5">
            <Key>
              <CornerDownLeft className="size-3" />
            </Key>
            open
          </span>
          <span className="ml-auto">Powered by TMDB</span>
        </div>
      </div>
    </div>
  );
}

const Key = function ({ children }) {
  return (
    <kbd className="grid h-5 min-w-5 place-items-center rounded border border-line bg-elevated px-1">
      {children}
    </kbd>
  );
};

const SearchSkeleton = function () {
  return (
    <div className="flex flex-col gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="flex items-center gap-4 p-2">
          <div className="skeleton h-16 w-11 shrink-0 rounded-lg" />
          <div className="flex flex-1 flex-col gap-2">
            <div
              className="skeleton h-3.5 rounded-full"
              style={{ width: `${60 - i * 7}%` }}
            />
            <div className="skeleton h-2.5 w-24 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

const SearchResult = function ({ data, index, active, onHover, onSelect }) {
  const year = releaseYear(data);
  const title = data?.title || data?.name || data?.original_title;

  return (
    <button
      data-index={index}
      onClick={onSelect}
      onMouseMove={onHover}
      className={`flex w-full shrink-0 cursor-pointer items-center gap-4 rounded-xl p-2 text-left transition-colors ${
        active ? "bg-elevated" : ""
      }`}
    >
      <SmartImage
        src={tmdbImagePath(data.poster_path || data.profile_path, "w185")}
        alt={title}
        label=""
        variant={data.profile_path ? "person" : "poster"}
        className="h-16 w-11 shrink-0 rounded-lg ring-1 ring-line"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3
          className={`truncate font-medium transition-colors ${
            active ? "text-accent" : "text-fg"
          }`}
        >
          {title}
        </h3>
        <div className="flex items-center gap-3 text-xs text-muted">
          {year && <span>{year}</span>}
          {data.known_for_department && (
            <span>{data.known_for_department}</span>
          )}
          {data.vote_average > 0 && (
            <span className="flex items-center gap-1">
              <Star className="size-3 fill-amber-400 text-amber-400" />
              {data.vote_average.toFixed(1)}
            </span>
          )}
        </div>
      </div>
      <CornerDownLeft
        className={`mr-2 size-4 shrink-0 text-subtle transition-opacity ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
};
