export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <article
        className="project"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </article>
    </div>
  );
}
