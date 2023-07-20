import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
 text-decoration: none;
  color: #2E2F42;
  font-size: 20px;
  font-weight: 600;
  &.active {
    color: #4D5AE5;
  }
  &:hover{
    transition: 300ms;
    color: #434455;
  }
  transition: 300ms;
`;

export const WrapperAuthNav = styled.ul`
  background-color: #FFFFFF;

  display: flex;
  font-size: 0;
  gap: 16px;
`;