
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav className="d-flex navbar navbar-expand bg-body-tertiary">
                <div className="flex-column container-fluid">
                    <Link className="navbar-brand text-center fs-1" to="/">Orange Reviews</Link>
                    <div className="text-center collapse navbar-collapse navbar-nav" id="navbarNavAltMarkup">
                            <NavLink className="nav-link fs-2" to="/">Home</NavLink>
                            <NavLink className="nav-link fs-2" to="/reviews">Reviews</NavLink>
                            <NavLink className="nav-link fs-2" to="/about">About</NavLink>
                    </div>
                </div>
            </nav>

            <hr className="m-0"/>
            
            <Outlet />

            <hr/>
            
            <footer className="d-flex flex-column align-items-center">
                <h1 className="text-center m-5">CONTACT US</h1>

                <div>
                    <p className="d-flex flex-wrap column-gap-3 fs-1 ms-5 mb-5">You can visit us at:
                        <a href="https://bsky.app/" className="text-reset">Bluesky</a>
                        <a href="https://mastodon.social" className="text-reset">Mastodon</a>
                        <a href="https://www.instagram.com/" className="text-reset">Instagram</a>
                        <a href="https://www.x.com/" className="text-reset">Twitter</a>
                    </p>
                </div>
            </footer>
        </>
    )
}