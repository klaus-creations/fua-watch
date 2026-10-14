import { Clapperboard, Flame, House, Info, Star, Users } from "lucide-react";

export const sidebarLinks = [
  {
    id: 1,
    name: "Home",
    to: "/",
    icon: House,
  },
  {
    id: 2,
    name: "Trending",
    to: "/trending",
    icon: Flame,
  },
  {
    id: 3,
    name: "Top Rated",
    to: "/top-rated",
    icon: Star,
  },
  {
    id: 4,
    name: "Popular Artists",
    to: "/popular-artists",
    icon: Users,
  },
  {
    id: 5,
    name: "About Us",
    to: "/about",
    icon: Info,
  },
];

export const LogoIcon = Clapperboard;
