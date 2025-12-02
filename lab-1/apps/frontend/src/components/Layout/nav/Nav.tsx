import { Link } from "react-router-dom";
import "./Nav.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export function Nav() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="/">
          <img src="logo.png" alt="Pixell River Logo" width={150} />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/employees">Employees</Link>
        <span> / </span>
        <Link to="/organization">Organization</Link>
      </div>
       <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}
