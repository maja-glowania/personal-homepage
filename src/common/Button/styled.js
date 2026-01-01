import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  width: max-content;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  background: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.buttonText};
  border: 1px solid ${({ theme }) => theme.color.iron};
  border-radius: 4px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-decoration: none;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: box-shadow 0.3s, background-color 0.3s;

  &:hover {
    box-shadow: 0px -2px 0px #8cc2ff, 0px 2px 0px #8cc2ff, 2px 0px 0px #8cc2ff,
      -2px 0px 0px #8cc2ff;
  }

  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    padding: 8px 12px;
    gap: 12px;
  }
`;
