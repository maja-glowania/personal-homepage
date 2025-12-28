import Container from "../common/Container";
import Header from "../features/homepage/Header";
import Skills from "../features/homepage/Skills";
import { skills, toLearn } from "../features/homepage/Skills/skillsData";
import Portfolio from "../features/homepage/Portfolio";
import Footer from "../features/homepage/Footer";
import { ThemeSwitcher } from "../features/homepage/ThemeSwitcher";

function App() {
  return (
    <Container>
      <ThemeSwitcher />
      <Header />
      <Skills title="My skillset includes 🛠️" content={skills} />
      <Skills title="What I want to learn next 🚀" content={toLearn} />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default App;
