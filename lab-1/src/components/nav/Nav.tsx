import "./Nav.css";

function Nav( ) {
  return (
    <nav>
      <div className="page-links">
        <span>
          <img
            src="logo.png"
            alt="Pixell River Logo"
            width="250"
            height="150"
          />
        </span>

        <span><a href="#">Employees</a></span>
        <span><a href="#">Organization</a></span>
      </div>
    </nav>);
}

export default Nav;
