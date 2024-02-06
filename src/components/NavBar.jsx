import { useContext } from 'react';
import { AppContext } from '../App';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const { appName, navigationArray } = useContext(AppContext);
  return navigationArray.length ? (
    <nav className="nav-menu">
      {appName ? <p className="nav-menu__description">{appName}</p> : null}
      {navigationArray.map((element, i) => (
        <NavLink
          key={i}
          to={element.path}
          end
          className={({ isActive }) =>
            isActive
              ? 'nav-menu__element nav-menu__element--active'
              : 'nav-menu__element'
          }
        >
          {element.name}
        </NavLink>
      ))}
    </nav>
  ) : null;
}
