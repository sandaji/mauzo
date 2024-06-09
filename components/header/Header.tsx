import Link from "next/link";
import Menu from "./Menu";
import { SearchBox } from "./SearchBox";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <div>
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
              <MdMenu 
                className="inline-block w-5 h-5 stroke-current"/>     
            </label>
            <Link href="/" className="btn btn-ghost text-lg">
              Mauzo
            </Link>
          </div>

          <Menu />
        </div>
        <div className="bg-base-300 block md:hidden text-center pb-3">
          <SearchBox />
        </div>
      </nav>
    </header>
  );
};

export default Header;
