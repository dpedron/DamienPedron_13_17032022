import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
 * @description Link (icon + text)
 * @param {object} icon - Icon of the link
 * @param {string} text - Text of the link
 * @param {string} linkTo - Path of the link
 * @returns {JSX}
 */

export function LinkTo({ icon, text, linkTo }) {
  return (
    <StyledLink to={linkTo}>
      {icon}
      {text}
    </StyledLink>
  );
}

LinkTo.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
  linkTo: PropTypes.string,
};
