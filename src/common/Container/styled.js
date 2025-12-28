import styled from "styled-components";

export const StyledContainer = styled.main`
  max-width: 1216px;
  margin: 0 auto;
  padding: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 16px;
  }
`;
