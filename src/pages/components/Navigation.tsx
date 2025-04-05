import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
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
        </>
    )
}