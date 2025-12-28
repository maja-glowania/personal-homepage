import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 88px;
  color: ${({ theme }) => theme.color.textPrimary};
  text-align: center;
  font-size: 20px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 17px;
    margin-top: 48px;
  }
`;

export const StyledSpinnerIcon = styled.div`
  margin-top: 48px;
  color: ${({ theme }) => theme.color.accent};
  animation: ${rotate} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
      width: 40px;
      height: 40px;
    }
  }
`;
