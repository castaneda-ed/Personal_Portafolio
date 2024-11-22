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
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      image: "../../public/coming-soon.png",
      projectLink: "pokedex.com",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3",
      image: "../../public/coming-soon.png",
      projectLink: "pokedex.com",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of Project 4",
      image: "../../public/coming-soon.png",
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
