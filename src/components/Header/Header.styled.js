import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    310deg,
    rgba(101, 0, 94, 0.7) 5%,
    rgba(60, 132, 206, 0.7) 28%,
    rgba(48, 238, 226, 0.7) 65%,
    rgba(255, 25, 25, 0.7) 96%
  );
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  z-index: 999;

`;

export const ListMenu = styled.ul`
  display: flex;
`;

export const ListMenuItem = styled.li`
list-style: none;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  font-size: 36px;
  font-weight: 600;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 126, 1);
  }
`;
export const ListMenuItemLink = styled(NavLink)`
   text-decoration: none;
`;