import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "./portfolioSlice";
import { GithubIcon } from "../../../common/icons/GithubIcon";
import {
  Section,
  Header,
  Title,
  Subtitle,
  StyledGithubIcon,
  Grid,
  Tile,
  TileTitle,
  TileDescription,
  LinkWrapper,
  Link,
} from "./styled";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";

const Portfolio = () => {
  const dispatch = useDispatch();
  const repositories = useSelector(selectRepositories);
  const status = useSelector(selectRepositoriesStatus);

  useEffect(() => {
    dispatch(fetchRepositories());
  }, [dispatch]);

  return (
    <Section>
      <Header>
        <StyledGithubIcon>
          <GithubIcon />
        </StyledGithubIcon>
        <Title>Portfolio</Title>
        <Subtitle>My recent projects</Subtitle>
      </Header>
      {status === "loading" && <Loader />}
      {status === "error" && <ErrorPage />}
      {status === "success" && (
        <Grid>
          {repositories.map(({ id, name, description, html_url, homepage }) => (
            <Tile key={id}>
              <TileTitle>{name}</TileTitle>
              <TileDescription>
                {description ||
                  "No description available for this project yet. I will add it soon!"}
              </TileDescription>

              {homepage && (
                <LinkWrapper>
                  <span>Demo:</span>
                  <Link href={homepage} target="_blank" rel="noreferrer">
                    {homepage ? homepage : "No demo available"}
                  </Link>
                </LinkWrapper>
              )}

              <LinkWrapper>
                <span>Code:</span>
                <Link href={html_url} target="_blank" rel="noreferrer">
                  {html_url}
                </Link>
              </LinkWrapper>
            </Tile>
          ))}
        </Grid>
      )}
    </Section>
  );
};

export default Portfolio;
