import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import {LogoImage, MenuWrapper} from './style.js'
import Button from '../Button';
//import './Menu.css';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <MenuWrapper className="Menu">
      <Link to="/">
        <LogoImage src={Logo} alt="BakaFlix logo" />
      </Link>

      <Button as={Link} className= "ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </MenuWrapper>
  );
}

export default Menu;