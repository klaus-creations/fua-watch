import { sidebarLinks } from "../../constants";
import ButtonLink1 from "../ui/ButtonLink1";
import Logo from "../ui/Logo";

export default function SidebarComponent() {
  return (
    <aside className="w-full h-full flex flex-col">
      <Logo />

      <div className="w-full flex flex-col items-center gap-3">
        {sidebarLinks.map((el) => {
          return (
            <ButtonLink1
              key={el.id}
              linkName={el.name}
              linkPath={el.to}
              linkLogo={el.icon}
            />
          );
        })}
      </div>
    </aside>
  );
}
