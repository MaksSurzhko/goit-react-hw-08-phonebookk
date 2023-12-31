import { StyledLink, WrapperAuthNav} from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <WrapperAuthNav>
      <li>
        <StyledLink to="/register">Sign Up</StyledLink>
      </li>
      <li>
        <StyledLink to="/login">Log In</StyledLink>
      </li>
    </WrapperAuthNav>
  );
};