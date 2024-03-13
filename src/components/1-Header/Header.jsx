import { useState } from 'react';
import './Header.css';
import logo from '/assets/logo.png';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
  <OutsideClickHandler
  onOutsideClick={() => {
    setMenuOpened(false);
  }}
>
    <section className="h-wrapper">
      <div className="container header">
        <img src={logo} alt="" width={100} className=''/>

        <div className="h-menu flexCenter">
          <a href="#resi">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#get">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        <div style={{cursor:"pointer"}} className="menu-icon" onClick={() => {
          setMenuOpened((prev)=>!prev);
        }
        }>
          <BiMenuAltRight size={30} />
        </div>
      </div>
      {menuOpened && (
        
        <div className="hidden-menu flexCenter">
          <a href="#resi">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact">Contact Us</a>
          <a href="#get">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        
        
        )}
      
    </section>
        </OutsideClickHandler>
  );
};

export default Header;
