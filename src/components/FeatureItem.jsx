import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

const StyledIcon = styled.img`
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const StyledTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

/**
 * @description Feature
 * @param {string} iconSrc
 * @param {string} iconAlt
 * @param {string} featureTitle
 * @param {string} featureText
 * @returns {JSX}
 */

export function FeatureItem({ iconSrc, iconAlt, featureTitle, featureText }) {
  return (
    <StyledFeatureItem>
      <StyledIcon src={iconSrc} alt={iconAlt} />
      <StyledTitle>{featureTitle}</StyledTitle>
      <p>{featureText}</p>
    </StyledFeatureItem>
  );
}

FeatureItem.propTypes = {
  iconSrc: PropTypes.string,
  iconAlt: PropTypes.string,
  featureTitle: PropTypes.string,
  featureText: PropTypes.string,
};
