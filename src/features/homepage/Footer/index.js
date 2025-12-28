import {
  Wrapper,
  LetsTalk,
  Address,
  Email,
  Paragraph,
  SocialList,
  SocialLink,
} from "./styled";
import { GithubIcon } from "../../../common/icons/GithubIcon";
import { LinkedInIcon } from "../../../common/icons/LinkedInIcon";
import { FacebookIcon } from "../../../common/icons/FacebookIcon";
import { InstagramIcon } from "../../../common/icons/InstagramIcon";

const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <Email href="mailto:glowania.maja02@gmail.com">
        glowania.maja02@gmail.com
      </Email>
      <Paragraph>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me🤞🏻
      </Paragraph>
      <SocialList>
        <SocialLink
          href="https://github.com/maja-glowania"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </SocialLink>
        <SocialLink
          href="https://www.facebook.com/profile.php?id=100005432553897"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </SocialLink>
        <SocialLink
          href="https://pl.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/maiaglowania/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </SocialLink>
      </SocialList>
    </Address>
  </Wrapper>
);

export default Footer;
