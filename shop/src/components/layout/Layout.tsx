import { FC } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout: FC =() => {
    return(
        <div className='wrapper'>
            <div className = 'content'>
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}