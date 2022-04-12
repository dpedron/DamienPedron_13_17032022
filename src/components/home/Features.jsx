import styled from 'styled-components';
import FeatureItem from './FeatureItem';
import chatIcon from '../../assets/img/icon-chat.png';
import moneyIcon from '../../assets/img/icon-money.png';
import securityIcon from '../../assets/img/icon-security.png';

const StyledFeatures = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

/**
 * @description Features section
 * @returns {JSX}
 */

export default function Features() {
  return (
    <StyledFeatures>
      <h2 className="sr-only">Features</h2>
      <FeatureItem
        iconSrc={chatIcon}
        iconAlt="Chat Icon"
        featureTitle="You are our #1 priority"
        featureText="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        iconSrc={moneyIcon}
        iconAlt="Money Icon"
        featureTitle="More savings means higher rates"
        featureText="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        iconSrc={securityIcon}
        iconAlt="Security Icon"
        featureTitle="Security you can trust"
        featureText="We use top of the line encryption to make sure your data and money is always safe."
      />
    </StyledFeatures>
  );
}
