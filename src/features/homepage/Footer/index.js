import {
  Wrapper,
  LetsTalk,
  Address,
  Email,
  Paragraph,
  SocialList,
  SocialLink,
} from "./styled";
import { socials } from "./socialsData";
import { email } from "../../../common/email";

const Footer = () => (
  <Wrapper>
    <LetsTalk>Let's talk!</LetsTalk>
    <Address>
      <Email href={`mailto:${email}`}>{email}</Email>
      <Paragraph>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me🤞🏻
      </Paragraph>
      <SocialList>
        {socials.map(({ name, url, Icon }) => (
          <SocialLink
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            title={name}
          >
            <Icon />
          </SocialLink>
        ))}
      </SocialList>
    </Address>
  </Wrapper>
);

export default Footer;
