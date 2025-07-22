import {memo} from 'react';
import {NavLink} from 'react-router-dom';

import './MenuItem.scss';

interface MenuItem {
  /**
   * It indicate sidemenu label string
   */
  text: string | undefined;
  /**
   * It indicate link to navigate
   */
  href: string;
  /**
   * It indicate image icon
   */
  icon: string;
}

interface Props extends MenuItem {
  /**
   * It indicate submenu option
   */
  submenu?: MenuItem[];
}

function MenuItem({text, submenu, icon, href}: Props) {
  return (
    <div className='muenuItem_sidebar'>
      <ul>
        <li>
          <NavLink to={href} className='sidebar_menu' data-testid='side_menu'>
            {icon && <img className='menu-img' src={icon} alt='icon' />}
            {text}
          </NavLink>
          <ul>
            {submenu &&
              submenu.length > 0 &&
              submenu?.map((item) => {
                return (
                  <li className='submenu-item' key={item.text}>
                    <NavLink to={item.href} key={item.text}>
                      {item.icon && (
                        <img
                          className='submenu-img'
                          src={item.icon}
                          alt='icon'
                        />
                      )}
                      {item.text}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default memo(MenuItem);

MenuItem.defaultProps = {
  submenu: [],
};
