import { DATABASE_ID, TOKEN } from '../config/index';
import ProjectItem from '../components/project/ProjectSummary';

export default async function Projects() {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({ page_size: 100 }),
        cache: 'force-cache',
    };

    const staticData = await fetch(
        `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
        options
    );

    const projects = await staticData.json();
    console.log(projects);

    return (
        <div className="flex items-center justify-center min-h-screen mb-10">
            <div className="flex flex-col items-center justify-center gap-8 m-4">
                {projects.results.map((aProject) => (
                    <ProjectItem key={aProject.id} data={aProject} />
                ))}
            </div>
        </div>
    );
}
