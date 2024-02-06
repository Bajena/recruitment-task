import { NavLink } from 'react-router-dom';

export default function NavBar({ description, menuItems }) {
  return menuItems.length ? (
    <nav className="nav-menu">
      {description ? (
        <p className="nav-menu__description">{description}</p>
      ) : null}
      {menuItems.map((element, i) => (
        <NavLink
          key={i}
          to={element.path}
          end
          className={({ isActive }) =>
            isActive
              ? 'nav-menu__element nav-menu__element__active'
              : 'nav-menu__element'
          }
        >
          {element.name}
        </NavLink>
      ))}
    </nav>
  ) : null;
}
