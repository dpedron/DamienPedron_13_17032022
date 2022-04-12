import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMain = styled.main`
  flex: 1;
  background-color: #12002b;
  color: white;
`;

const StyledTitle = styled.h1`
  margin: 50px 0;
  font-size: 100px;
  @media (min-width: 920px) {
    font-size: 150px;
  }
`;
const StyledSubTitle = styled.h2`
  margin: 50px 0;
  font-size: 20px;
  @media (min-width: 920px) {
    font-size: 50px;
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  justify-self: center;
  justify-content: space-around;
  width: 50%;
  margin: auto;
`;
const StyledLink = styled(Link)`
  color: #00bc77;
  font-weight: bold;
  font-size: 16px;
  @media (min-width: 920px) {
    font-size: 25px;
  }
`;

/**
 * @description Error page
 * @returns {JSX}
 */

export default function Error() {
  return (
    <StyledMain>
      <StyledTitle>404</StyledTitle>
      <StyledSubTitle>Page Not Found</StyledSubTitle>
      <StyledLinkWrapper>
        <StyledLink to="/">Homepage</StyledLink>
        <StyledLink to="/sign-in">Sign in</StyledLink>
      </StyledLinkWrapper>
    </StyledMain>
  );
}
