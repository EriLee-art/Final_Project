import { Outlet } from "react-router-dom";
import Footer from "./pages/components/Footer";
import Navigation from "./pages/components/Navigation";

export default function Root() {
    return (
        <>
            <Navigation />
            
            <Outlet />
            
            <Footer />
        </>
    )
}