import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavBarWrapper, HamburgerButton, RightElements } from './navbar.styled';
import SearchBar from '../Searcher';
import Profile from '../Profile';

function NavBar() {
  return (
    <NavBarWrapper>
      <HamburgerButton type="submit">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </HamburgerButton>
      <SearchBar />
      <RightElements>
        <Profile />
      </RightElements>
    </NavBarWrapper>
  );
}

export default NavBar;
