import { useDispatch, useSelector } from "react-redux";
import { changeSearchWord } from "../../features/slices/searchSlice";

// eslint-disable-next-line react/prop-types
export default function Input({ placeholder }) {
  const searchValue = useSelector((state) => state.search.word);
  const dispatch = useDispatch();

  return (
    <form className="w-56">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => dispatch(changeSearchWord(e.target.value))}
        placeholder={`Search ${placeholder}`}
        className="w-full px-2 py-1 md:py-2 text-xs md:text-sm rounded-xl bg-transparent border-[1px] border-gray-100/[.1]  text-gray-200 outline-none tracking-[1px] shadow-sm shadow-sky-700/[.3]"
      />
    </form>
  );
}
