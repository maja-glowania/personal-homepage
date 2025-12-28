import { DangerIcon } from "../../../../common/icons/DangerIcon";
import { Wrapper, Title, Subtitle, StyledLink } from "./styled";

const ErrorPage = () => (
  <Wrapper>
    <DangerIcon />
    <Title>Ooops! Something went wrong...</Title>
    <Subtitle>
      Sorry, there was a problem with fetching
      <br />
      your GitHub repositories.
      <br />
      You can check them directly on GitHub.
    </Subtitle>
    <StyledLink
      href="https://github.com/maja-glowania"
      target="_blank"
      rel="noreferrer"
    >
      Go to GitHub
    </StyledLink>
  </Wrapper>
);

export default ErrorPage;
