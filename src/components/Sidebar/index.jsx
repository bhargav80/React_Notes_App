import { NavLink } from "react-router-dom"

export const Sidebar = () => {
    const getStyles = ({ isActive }) => {
        return isActive 
            ? 'text-slate-50 bg-indigo-800 flex items-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full' 
            : 'text-gray-700 hover:text-slate-50 hover:bg-indigo-800 flex items-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full';
    }

    return (
        <>
            <aside className="flex flex-col gap-3 border-r-2 border-gray-100 w-[150px] h-screen p-3">
                <NavLink to="/" className={getStyles}>
                    <span className="material-symbols-outlined">
                        home
                    </span>
                    <span>Home</span>
                </NavLink>
                <NavLink to="/archive" className={getStyles}>
                    <span className="material-symbols-outlined">
                        archive
                    </span>
                    <span>Archive</span>
                </NavLink>
                
                <NavLink to="/bin" className={getStyles}>
                    <span className="material-symbols-outlined">
                        recycling
                    </span>
                    <span>Bin</span>
                </NavLink>
            </aside>
        </>
    );
}
