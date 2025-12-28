import styled, { css } from "styled-components";
import { SunIcon } from "../../../common/icons/SunIcon";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  margin-top: 50px;
  margin-bottom: -40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    margin-top: 10px;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: bold;
  font-size: 12px;
  line-height: 1.3;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    display: none;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  outline-offset: 8px;
`;

export const Box = styled.div`
  width: 48px;
  height: 26px;
  background: ${({ theme }) => theme.switcher.background};
  border: 1px solid ${({ theme }) => theme.color.textSecondary};
  border-radius: 13px;
  display: flex;
  align-items: center;
  padding: 3px;
  position: relative;
  transition: background 0.3s ease;
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.switcher.circle};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background 0.3s ease;

  ${({ $moveToRight }) =>
    $moveToRight &&
    css`
      transform: translateX(20px);
    `}
`;

export const StyledSunIcon = styled(SunIcon)`
  width: 14px;
  height: 14px;
  color: ${({ theme }) => theme.switcher.icon};
  transition: color 0.3s ease;
`;
