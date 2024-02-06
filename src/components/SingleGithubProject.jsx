import CommitList from './CommitList';

export default function SingleGithubProject({ projectData }) {
  return (
    <div className="projects-container__project">
      <p className="projects-container__project__title">{projectData.name}</p>
      <a
        className="projects-container__project__link"
        href={projectData.html_url}
        target="_blank"
        rel="noreferrer"
      >
        {projectData.html_url}
      </a>
      <CommitList projectName={projectData.name} />
    </div>
  );
}
