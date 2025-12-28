import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 4px;
  padding: 32px;
  margin-top: 63px;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 48px;
    padding: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 0;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.color.iron};
  color: ${({ theme }) => theme.color.textPrimary};
  transition: color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 32px;
  list-style: none;
  padding: 0;
  margin-top: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.color.textSecondary};
  font-size: 18px;
  transition: color 0.3s ease;

  &::before {
    content: "";
    width: 9px;
    height: 9px;
    background-color: ${({ theme }) => theme.color.accent};
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 14px;
  }
`;
