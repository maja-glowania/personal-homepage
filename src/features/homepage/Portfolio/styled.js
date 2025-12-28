import styled from "styled-components";

export const Section = styled.section`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin: 12px 0 8px;
  color: ${({ theme }) => theme.color.textPrimary};
  transition: color 0.3s ease;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  margin: 0;
  color: ${({ theme }) => theme.color.textPrimary};
  transition: color 0.3s ease;
`;

export const StyledGithubIcon = styled.div`
  color: ${({ theme }) => theme.color.accent};
  transition: color 0.3s ease;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const Tile = styled.article`
  background: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 6px solid ${({ theme }) => theme.color.iron};
  border-radius: 4px;
  padding: 56px;
  transition: background 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.color.accent}33;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    padding: 24px;
  }
`;

export const TileTitle = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.color.tileTitle};
  margin: 0;
  transition: color 0.3s ease;
`;

export const TileDescription = styled.p`
  font-size: 18px;
  line-height: 1.4;
  margin: 24px 0;
  color: ${({ theme }) => theme.color.textSecondary};
  transition: color 0.3s ease;
`;

export const LinkWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  font-size: 18px;
  margin-top: 8px;
  color: ${({ theme }) => theme.color.textSecondary};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.accent};
  text-decoration: none;
  border-bottom: 1px solid rgba(3, 102, 214, 0.2);
  transition: 0.3s;

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.accent};
  }
`;
