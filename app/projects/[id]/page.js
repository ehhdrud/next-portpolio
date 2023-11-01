'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = (props) => {
    const params = useSearchParams();

    const title = params.get('title');
    const detail = JSON.parse(params.get('detail')).filter((e) => {
        return e;
    });
    const skill = JSON.parse(params.get('skill')).filter((e) => {
        return e;
    });
    const troubleshooting = JSON.parse(params.get('troubleshooting')).filter((e) => {
        return e;
    });
    const github = params.get('github');
    const vercel = params.get('vercel');
    const youtube = params.get('youtube');

    return (
        <div className="flex flex-col items-start justify-center min-h-screen lg:mx-80 md:mx-32 sm:mx-16 mx-8">
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold mb-8">{title}</h1>
            <div className="mb-6">
                {detail.map((item) => (
                    <p key={item.name}>{item.name}</p>
                ))}
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">⭐사용 기술</h2>
                {skill.map((item) => (
                    <p key={item.name}>- {item.name}</p>
                ))}
            </div>
            <div className="mb-12">
                <h2 className="text-xl font-bold mb-2">💥트러블 슈팅</h2>
                {troubleshooting.map((item) => (
                    <Link key={item.name} href={item.external.url} className="flex items-center">
                        -&nbsp;<p className="underline  hover:font-bold">{item.name}</p> 🔎
                    </Link>
                ))}
            </div>
            <div className="flex">
                <Link
                    href={github}
                    className=" bg-gray-400 hover:bg-gray-500 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                >
                    github
                </Link>
                <Link
                    href={vercel}
                    className="bg-blue-700 hover:bg-blue-800 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                >
                    vercel
                </Link>
                <Link
                    href={youtube}
                    className="bg-red-400 hover:bg-red-500 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                >
                    youtube
                </Link>
            </div>
        </div>
    );
};

export default Project;
