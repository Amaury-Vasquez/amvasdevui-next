import ThemeChanger from "./ThemeChanger";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <header className="w-full flex gap-1 items-start md:items-center md:gap-4 justify-between px-4 py-3 flex-wrap">
      <div className="order-3 sm:order-2 w-full sm:max-w-80 sm:ml-12 xl:ml-0">
        <Searchbar />
      </div>
      <div className="order-2 sm:order-2 flex max-sm:w-full justify-end">
        <ThemeChanger />
      </div>
    </header>
  );
};

export default Navbar;
