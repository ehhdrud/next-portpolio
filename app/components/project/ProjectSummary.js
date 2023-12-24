'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectItem({ data }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const title = data.properties.name.title[0].plain_text;
    const description = data.properties.description.rich_text[0].plain_text;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const tags = data.properties.tags.multi_select;

    console.log(tags);
    return (
        mounted && (
            <div className="project-card">
                <Image
                    className="rounded-l-xl"
                    src={imgSrc}
                    alt="cover image"
                    width={100}
                    height={100}
                    quality={100}
                />
                <Link
                    href={{
                        pathname: `/projects/${title}`,
                        query: {
                            title: title,
                            tags: JSON.stringify(tags),
                        },
                    }}
                >
                    <div className="p-4 flex flex-col">
                        <h1 className="text-2xl font-bold">{title}</h1>
                        <h3 className="mt-4 text-xl">{description}</h3>
                        <div className="flex items-start mt-2">
                            {tags.map((aTag) => (
                                <div
                                    className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30 text-slate-900 dark:text-white"
                                    key={aTag.id}
                                >
                                    {aTag.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </Link>
            </div>
        )
    );
}
