import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  margin: auto;
  max-width: 500px;
  color: white;
`;

const StyledTitle = styled.h1`
  margin: 50px 0;
  font-size: 40px;
  @media (min-width: 920px) {
    font-size: 60px;
  }
`;
const StyledSubTitle = styled.h2`
  margin: 50px 0;
  font-size: 20px;
  @media (min-width: 920px) {
    font-size: 30px;
  }
`;
const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
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
 * @description Display the current status of the user page
 * @param {string} title
 * @param {string} subtitle
 * @returns {JSX}
 */

export default function Status({ title, subtitle }) {
  return (
    <StyledWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subtitle}</StyledSubTitle>
      <StyledLinkWrapper>
        <StyledLink to="/">Homepage</StyledLink>
        <StyledLink to="/sign-in">Sign in</StyledLink>
      </StyledLinkWrapper>
    </StyledWrapper>
  );
}

Status.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
