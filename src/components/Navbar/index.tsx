import { Link } from "@/components";
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  return (
    <header className="w-full flex items-center gap-4 justify-between px-4 py-3">
      <Link href="/" variant="link">
        Amvasdev UI
      </Link>
      <ThemeChanger />
    </header>
  );
};

export default Navbar;
