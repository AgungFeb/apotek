import Link from "next/link";
import { withRouter } from "next/router";
import navs from "../data/menu.json";

function Navbar({ router }) {
  return (
    <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <a href="" className="d-flex align-items-center text-dark text-decoration-none">
                <span className="fs-4">PORTAL KESEHATAN</span>
            </a>
            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                {navs.map((nav) => (
                    
                    <Link key = {nav.title} href={nav.href}>
                        {/* <a
                        className={`nav-item ${
                            router.pathname == nav.href ? "active" : ""
                        }`}
                        >
                        {nav.text}
                        </a> */}
                        <a className="me-3 py-2 text-blue text-decoration-none">{nav.text}</a>
                    </Link>
                    
                ))}
            </nav>
        </div>
    </header>        
  );
}

export default withRouter(Navbar);