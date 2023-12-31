import Animation from './Animation';
import Link from 'next/link';

export default function Home() {
    return (
        <section className="flex flex-col itmes-center justify-center min-h-screen text-gray-600 body-font">
            <div className="container mx-auto flex lg:px-5 xl:px-24 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-3xl text-2xl mb-10 font-medium text-gray-900">
                        성능에 집착하는 개발자,&nbsp;
                        <br className="hidden lg:inline-block" />
                        서동경입니다.
                    </h1>
                    <div className="mb-8 leading-relaxed text-m">
                        <p className="mb-2 text-slate-600 dark:text-slate-400">
                            💡 렌더링 성능에 관심이 많은 프론트엔드 엔지니어입니다.
                        </p>
                        <p className="mb-2 text-slate-600 dark:text-slate-400">
                            💡 기존 앱을 분석하여 사용자 입장에서 필요한 기능을 구현하는 것을 가장
                            즐깁니다.
                        </p>
                        <p className="mb-2 text-slate-600 dark:text-slate-400">
                            💡 개념의 원리나 문제의 원인을 정확하게 이해하여 블로그에 작성하며
                            공부합니다.
                        </p>
                        <p className="mb-2 text-slate-600 dark:text-slate-400">
                            💡 1px을 고치기 위해 많은 시간을 할애하는 것을 시간 낭비라고 생각하지
                            않습니다.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            href="/projects"
                            className="inline-flex text-white hover:text-gray-100 dark:text-slate-100 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        >
                            Go to see projects
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation />
                </div>
            </div>
        </section>
    );
}
