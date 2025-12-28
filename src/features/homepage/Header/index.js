import { Wrapper, Image, Content, Caption, Name, Description } from "./styled";
import profileImage from "../../../assets/profile.jpg";
import Button from "../../../common/Button";

const Header = () => (
  <Wrapper>
    <Image src={profileImage} alt="Maja Głowania" />
    <Content>
      <Caption>This is</Caption>
      <Name>Maja Głowania</Name>
      <Description>
        👩🏻‍💻 I’m a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </Description>
      <Button />
    </Content>
  </Wrapper>
);

export default Header;
