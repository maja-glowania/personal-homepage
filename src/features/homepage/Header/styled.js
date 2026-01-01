import styled from "styled-components";

export const Wrapper = styled.header`
  margin-top: 0px;
  display: flex;
  align-items: center;
  gap: 66px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 32px;
    gap: 12px;
  }
`;

export const Image = styled.img`
  width: 398px;
  height: 398px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    width: 132px;
    height: 132px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Caption = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.textSecondary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const Name = styled.h1`
  font-size: 38px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.textPrimary};
  margin: 12px 0 35px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 22px;
    margin: 8px 0 16px 0;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.textSecondary};
  margin: 0 0 32px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 17px;
  }
`;
