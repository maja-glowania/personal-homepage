import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkMode, toggleDarkMode } from "../../../common/themeSlice";
import {
  Wrapper,
  Text,
  Button,
  Box,
  IconWrapper,
  StyledSunIcon,
} from "./styled";

export const ThemeSwitcher = () => {
  const isDarkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>DARK MODE {isDarkMode ? "ON" : "OFF"}</Text>
      <Button onClick={() => dispatch(toggleDarkMode())}>
        <Box>
          <IconWrapper $moveToRight={isDarkMode}>
            <StyledSunIcon />
          </IconWrapper>
        </Box>
      </Button>
    </Wrapper>
  );
};
