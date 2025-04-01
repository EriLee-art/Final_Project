import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/page2">Click Me</Link>
            <Outlet/>
        </div>
        </>
    )
}