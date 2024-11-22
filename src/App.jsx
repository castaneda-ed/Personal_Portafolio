import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Presentaion from "./Components/Presentation";
import Projects from "./Components/Projects/Projects";

export default function App() {
  return (
    <main className="main-container">
      <NavBar />
      <Presentaion />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </main>
  );
}
