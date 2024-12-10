import "../../styles/Projects.css";
import ProjectCard from "./ProjectsCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Convene",
      description: "An app to register and chat with other users",
      image: "../../Convene.png",
      projectLink: "https://convene-app.netlify.app",
      githubFrontend: "https://github.com/wangbertha/convene-app-frontend",
      githubBackend: "https://github.com/wangbertha/convene-app-backend",
    },
    {
      id: 2,
      title: "Simple Calculator",
      description:
        "This is just a simple calculator with a preview of the result",
      image: "../../Calculator1.png",
      projectLink: "https://simplecalculatorbyedwin.netlify.app/",
      githubFrontend: "https://github.com/castaneda-ed/Calculator",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3",
      image:
        "https://www.dropbox.com/scl/fi/o7pkf25fzgptg8cgxm41r/coming-soon.png?rlkey=yy65x3dr0a0cpfmfgyffcbye1&st=kz4ou5wd&dl=1",
      projectLink: "pokedex.com",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of Project 4",
      image:
        "https://www.dropbox.com/scl/fi/o7pkf25fzgptg8cgxm41r/coming-soon.png?rlkey=yy65x3dr0a0cpfmfgyffcbye1&st=kz4ou5wd&dl=1",
      projectLink: "pokedex.com",
    },
  ];

  return (
    <div id="portfolio" className="projects-container">
      <h2>These are some of my projects</h2>
      <section className="projects-wrapper">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </section>
    </div>
  );
}
