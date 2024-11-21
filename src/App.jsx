import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Presentaion from "./Components/Presentation";

export default function App() {
  return (
    <main className="main-container">
      <NavBar />
      <Presentaion />
      <AboutMe />
      <Footer />
    </main>
  );
}
