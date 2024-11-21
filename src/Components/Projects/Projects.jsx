import "../../styles/Projects.css";
import ProjectCard from "./ProjectsCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Pokemon Pokedex",
      description:
        "An app to view  a list of pokemon and search pokemon including their descriptions and types",
      image: "../../public/coming-soon.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      image: "../../public/coming-soon.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3",
      image: "../../public/coming-soon.jpg",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of Project 4",
      image: "../../public/coming-soon.jpg",
    },
  ];

  return (
    <div className="projects-container">
      <h2>These are some of my projects</h2>
      <section className="projects-wrapper">
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </section>
    </div>
  );
}
