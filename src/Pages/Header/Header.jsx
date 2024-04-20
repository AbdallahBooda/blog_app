import Logo from "../../Component/Logo/Logo";
import Search from "../../Component/Search/Search";
import Title from "../../Component/Title/Title";

function Header() {
  return (
    <>
      <header className="m-3">
        {/* <div className="container"> */}
          <div className="row">
            <div className="col-6">
              <Logo />
            </div>

            <div className="col-4">
              <Title />
            </div>

            <div className="col-2">
              <Search />
            </div>
          </div>
        {/* </div> */}
      </header>
    </>
  );
}

export default Header;
