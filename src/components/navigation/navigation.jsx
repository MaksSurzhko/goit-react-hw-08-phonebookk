import { StyledLink, Nav } from './Navigation.styled';
import { useAuth } from '../hooks/useAuth';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

    return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
};