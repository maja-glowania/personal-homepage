import { StyledButton } from "./styled";
import { MailIcon } from "../icons/MailIcon";

const Button = () => (
  <StyledButton
    as="a"
    href="mailto:glowania.maja02@email.com"
    title="Send an email to me"
  >
    <MailIcon />
    Hire Me
  </StyledButton>
);

export default Button;
