import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAccount = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 2rem;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  flex: 1;
`;

const StyledWrapperCTA = styled.div`
  width: 100%;
  flex: 1;
  @media (min-width: 720px) {
    flex: 0;
  }
`;

const StyledTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`;

const StyledAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`;

const StyledDescription = styled.p`
  margin: 0;
`;

const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  @media (min-width: 720px) {
    width: 200px;
  }
`;

/**
 * @description Account card info
 * @param {string} title
 * @param {string} amount
 * @param {string} description
 * @returns {JSX}
 */

export default function AccountItem({ title, amount, description }) {
  return (
    <StyledAccount>
      <StyledWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledAmount>{amount}</StyledAmount>
        <StyledDescription>{description}</StyledDescription>
      </StyledWrapper>
      <StyledWrapperCTA>
        <StyledButton>View transactions</StyledButton>
      </StyledWrapperCTA>
    </StyledAccount>
  );
}

AccountItem.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
};
