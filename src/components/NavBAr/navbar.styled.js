import styled from 'styled-components';

const NavBarWrapper = styled.div`
  background-color: #1c5476;
  width: 100%;
  position: fixed;
  color: #ffffff;
  top: 0;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const HamburgerButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 12px;
  margin-right: 16px;
`;

const RightElements = styled.div`
  display: flex;
  width: 100%;
  margin-right: 20px;
  @media (max-width: 960px) {
    display: none;
  }
`;

export { NavBarWrapper, HamburgerButton, RightElements };
