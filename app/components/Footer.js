import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font flex flex-col md:flex-row">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link
                    href="/"
                    className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                >
                    <span className="ml-3 text-xl font-bold">SEO DONG KYEONG&apos;s Portpolio</span>
                </Link>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-1 mt-4">
                    © 2023 All Rights reserved.
                </p>
            </div>
            <div className="flex justify-end items-center md:mr-5 mt-3">
                <div className="w-fit h-fit font-bold text-sm px-2 py-1 mr-2 mb-2 rounded-md whitespace-nowrap bg-gray-200 dark:bg-slate-500/20 text-slate-400 dark:text-slate-500">
                    NextJS
                </div>
                <div className="w-fit h-fit font-bold text-sm px-2 py-1 mr-2 mb-2 rounded-md whitespace-nowrap bg-gray-200 dark:bg-slate-500/20 text-slate-400 dark:text-slate-500">
                    Tailwind
                </div>
            </div>
        </footer>
    );
}
