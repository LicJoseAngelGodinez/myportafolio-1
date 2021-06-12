import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose, MdMenu } from 'react-icons/md';
import * as Constanst from '../constants';

const NavMenuStyles = Constanst.NavMenuStyles;

export default function NavMenu() {
    const [showNav, setShowNav] = useState(false);
  return  (
      <NavMenuStyles>
          <div className="mobile-menu-icon"
                onClick={()=> setShowNav(!showNav)}
                role="button"
                onKeyDown={()=> setShowNav(!showNav)}
                tabIndex={0}
            >
              <MdMenu />
          </div>
          <ul className={!showNav ? "navItems hide-item" : "navItems"}>
              <div className="closeNavIcon"
                    onClick={()=> setShowNav(!showNav)}
                    role="button"
                    onKeyDown={()=> setShowNav(!showNav)}
                    tabIndex={0}
                >
                  <MdClose />
              </div>
              <li>
                  <NavLink to="/" exact
                        onClick={()=> setShowNav(!showNav)}
                        role="button"
                        onKeyDown={()=> setShowNav(!showNav)}
                        tabIndex={0}
                    >Inicio</NavLink>
              </li>
              <li>
                  <NavLink to="/acerca-de"
                        onClick={()=> setShowNav(!showNav)}
                        role="button"
                        onKeyDown={()=> setShowNav(!showNav)}
                        tabIndex={0}
                  >Acerca de</NavLink>
              </li>
              <li>
                  <NavLink to="/proyectos"
                        onClick={()=> setShowNav(!showNav)}
                        role="button"
                        onKeyDown={()=> setShowNav(!showNav)}
                        tabIndex={0}
                  >Proyectos</NavLink>
              </li>
              <li>
                  <NavLink to="/contacto"
                        onClick={()=> setShowNav(!showNav)}
                        role="button"
                        onKeyDown={()=> setShowNav(!showNav)}
                        tabIndex={0}
                  >Contacto</NavLink>
              </li>
          </ul>
      </NavMenuStyles>
  );
}
