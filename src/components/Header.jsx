import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import { useSelector } from 'react-redux';
import {
  selectFirstName,
  selectGetAuthorization,
} from '../utils/redux/selectors';
import logOut from '../features/logOut';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;
const StyledLogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;
const StyledLogo = styled.img`
  max-width: 100%;
  width: 200px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
  &:hover {
    text-decoration: underline;
  }
`;

/**
 * @description Header, navigation
 * @returns {JSX}
 */

export default function Header() {
  const getAuthorization = useSelector(selectGetAuthorization);
  const firstName = useSelector(selectFirstName);
  return (
    <StyledNav>
      <StyledLogoLink to="/">
        <StyledLogo src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </StyledLogoLink>
      {getAuthorization ? (
        <div>
          <StyledLink to="/user">
            <i className="fa fa-user-circle"></i> {firstName}
          </StyledLink>
          <StyledLink to="/" onClick={() => logOut()}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </StyledLink>
        </div>
      ) : (
        <StyledLink to="/sign-in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </StyledLink>
      )}
    </StyledNav>
  );
}
