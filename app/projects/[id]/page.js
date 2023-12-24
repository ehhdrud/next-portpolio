'use client';

import { useSearchParams } from 'next/navigation';
import ProjectA from '@/app/components/project/ProjectA';
import ProjectB from '@/app/components/project/ProjectB';
import ProjectC from '@/app/components/project/ProjectC';

const Project = () => {
    const params = useSearchParams();
    const title = params.get('title');
    const tags = JSON.parse(params.get('tags'));
    return (
        <div className="flex flex-col items-start justify-center min-h-screen lg:mx-80 md:mx-32 sm:mx-16 mx-8 lg:my-16 md:my-8 sm:my-4 my-2">
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold mb-8">{title}</h1>
            <div className="flex flex-row">
                {tags.map((tag, index) => (
                    <div
                        key={`tags-${index}`}
                        className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 text-slate-900 dark:text-white"
                    >
                        {tag.name}
                    </div>
                ))}
            </div>
            <div>
                {title === 'Workout Log for Overload' && <ProjectA />}
                {title === 'FitTogether' && <ProjectB title={title} />}
                {title === 'D3sign DAO Studio' && <ProjectC title={title} />}
            </div>
        </div>
    );
};

export default Project;
