import { NavLink, Outlet } from "react-router-dom";

const HeaderLayout = () => {
    return (
        <div>
            <header>
                <h1>Rehab<span>Docs</span></h1>
                <nav className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/newpatient">New Patient</NavLink>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}

export default HeaderLayout;