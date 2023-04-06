import { NavLink, Outlet } from "react-router-dom";

const HeaderLayout = () => {
    return (
        <div>
            {/*Header will appear on all pages */}
            <header className="main-header">
                <h1>Rehab<span>Docs</span></h1>
                <nav className="nav-links">
                    {/*Links to home and new patient page*/}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/newPatient">New Patient</NavLink>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}

export default HeaderLayout;