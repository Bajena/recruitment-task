import { NavLink } from 'react-router-dom';

export default function NavBar({ menuItems }) {
  return menuItems.length ? (
    <nav className="nav-menu">
      {menuItems.map((element, i) => (
        <NavLink
          key={i}
          to={element.path}
          end
          className={({ isActive }) =>
            isActive ? 'nav-element active' : 'nav-element'
          }
        >
          {element.name}
        </NavLink>
      ))}
    </nav>
  ) : null;
}
