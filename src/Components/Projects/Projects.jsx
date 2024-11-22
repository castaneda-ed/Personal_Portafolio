import "../../styles/Projects.css";
import ProjectCard from "./ProjectsCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Pokemon Pokedex",
      description:
        "An app to view  a list of pokemon and search pokemon including their descriptions and types",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLEJx7kJR5PxwjKGB4Yj-mG71dJEj1jO_y0g&s",
      projectLink: "https://www.youtube.com/",
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description of Project 2",
      image: "../../public/coming-soon.jpg",
      projectLink: "pokedex.com",
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description of Project 3",
      image: "../../public/coming-soon.jpg",
      projectLink: "pokedex.com",
    },
    {
      id: 4,
      title: "Project 4",
      description: "Description of Project 4",
      image: "../../public/coming-soon.jpg",
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
