import { NavLink, Outlet, useParams } from "react-router-dom";

const NewNoteLayout = () => {
    const { id } = useParams()

    return (
        <>
            <nav className="new-note-nav">
                <NavLink end to={`/newNote/${id}/billing`}>Billing</NavLink>
                <NavLink end to={`/newNote/${id}`}>Assessment and Plan</NavLink>
            </nav>
            <Outlet/>
        </>
    );
}

export default NewNoteLayout;