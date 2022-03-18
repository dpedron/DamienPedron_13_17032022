import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
`;
const StyledText = styled.p`
  margin: 0;
  padding: 0;
`;

/**
 * @description Footer
 * @returns {JSX}
 */

export function Footer() {
  return (
    <StyledFooter>
      <StyledText>Copyright 2020 Argent Bank</StyledText>
    </StyledFooter>
  );
}
