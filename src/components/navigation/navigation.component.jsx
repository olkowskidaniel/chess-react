import { NavLink } from "react-router-dom";
import "./navigation.styles.scss";

const menuItems = [
    {
        id: 0,
        path: "/",
        name: "home",
    },
    {
        id: 1,
        path: "/players",
        name: "players",
    },
];

const Navigation = () => {
    return (
        <nav className="nav-container">
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <NavLink to={item.path}>{item.name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
