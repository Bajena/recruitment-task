import CommitList from './CommitList';

export default function SingleGithubProject({ projectData }) {
  return (
    <div className="project">
      <p>{projectData.name}</p>
      <a href={projectData.html_url} target="_blank" rel="noreferrer">
        {projectData.html_url}
      </a>
      <CommitList projectName={projectData.name} />
    </div>
  );
}
