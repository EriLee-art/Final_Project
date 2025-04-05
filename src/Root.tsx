import { Outlet } from "react-router-dom";
import Footer from "./pages/components/Footer";
import Navigation from "./pages/components/Navigation";

export default function Root() {
    /** 
     * Navigation and the Footer are segmented out to make the Root
     *  Component a lot cleaner, with easier access to specific parts
     *  of both components
     * 
     * Outlet is where the Home, About, and Reviews pages load in.
    */
    return (
        <>
            <Navigation />
            
            <Outlet />
            
            <Footer />
        </>
    )
}