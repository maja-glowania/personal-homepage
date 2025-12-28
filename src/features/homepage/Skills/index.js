import { Section, Title, List, ListItem } from "./styled";

const Skills = ({ title, content }) => (
  <Section>
    <Title>{title}</Title>
    <List>
      {content.map((skill) => (
        <ListItem key={skill}>{skill}</ListItem>
      ))}
    </List>
  </Section>
);

export default Skills;
