import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/img/argentBankLogo.png';
import PropTypes from 'prop-types';

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

/**
 * @description Header, navigation
 * @param {object} children - Links
 * @returns {JSX}
 */

export function Header({ children }) {
  return (
    <StyledNav>
      <StyledLogoLink to="/">
        <StyledLogo src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </StyledLogoLink>
      <div>{children}</div>
    </StyledNav>
  );
}

Header.propTypes = {
  children: PropTypes.object,
};
