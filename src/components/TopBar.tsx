import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <header className="topbar">
      <div className="container topbar__inner">
        <Link to="/" className="brand" aria-label="요즘.zip 홈으로">
          요즘<span className="dot">.</span>
          <span className="zip">zip</span>
        </Link>
      </div>
    </header>
  );
}
