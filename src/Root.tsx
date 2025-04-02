
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav className="navbar navbar-expand bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-2" to="/">Orange Reviews</Link>
                    <div className="collapse navbar-collapse navbar-nav" id="navbarNavAltMarkup">
                            <NavLink className="nav-link fs-4" to="/">Home</NavLink>
                            <NavLink className="nav-link fs-4" to="/reviews">Reviews</NavLink>
                            <NavLink className="nav-link fs-4" to="/about">About</NavLink>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}