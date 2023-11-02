import Animation from './Animation';
import Link from 'next/link';

export default function Home() {
    return (
        <section className="flex flex-col itmes-center justify-center min-h-screen text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-3xl text-2xl mb-10 font-medium text-gray-900">
                        느리더라도 완벽하게 아이디어를 실현하려는 개발자,
                        <br className="hidden lg:inline-block" />
                        서동경입니다
                    </h1>
                    <div className="mb-8 leading-relaxed text-sm">
                        <p className="mb-3">안녕하십니까! 프론트엔드 개발자 서동경입니다.</p>
                        <p className="mb-3">
                            전자공학과를 졸업하였지만,&nbsp;
                            <Link
                                href="https://colorful-liver-e8f.notion.site/02c85fdb4f4f479484aaada72755bcda?pvs=4"
                                className="bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300 font-semibold p-1 rounded"
                            >
                                졸업 작품
                            </Link>
                            을 진행하며 코딩을 처음 접하며 혼자서도 무엇이든 만들 수 있고 여러
                            분야에 도전할 수도 있는 개발자라는 직업이 매력적으로 느껴져 개발 공부를
                            시작하였습니다. 평소 디자인에 관심이 많았던 이유로 프론트엔드 직군을
                            목표로 공부 중입니다.
                        </p>
                        <p className="mb-3">
                            언어와 라이브러리의 기본 원리를 최우선으로 여기고 이를 최대한 기록하려고
                            노력합니다. 학습 시 이해하기 까다로웠던 중요 원리나 문제 해결 과정을
                            블로그에 게시함으로써 좀 더 정확한 정보를 토대로 내가 다시 쓴 글을 통해
                            이론을 정리하고 있습니다.
                        </p>
                        <p className="mb-3">
                            완벽주의 성향을 가지고 있어 코드의 효율성과 통일성, UI/UX 등 다양한
                            측면에서 프로젝트의 완성도를 높이는 것에 집착합니다. 그로 인해 프로젝트
                            마무리 과정에 오랜 시간을 할애하는 편이지만, 원하는 결과물을 얻는 것에
                            큰 기쁨을 느끼기 때문에 그 시간을 즐깁니다.
                        </p>
                        <p className="mb-3">
                            새로운 기술을 접하는 것이 프론트엔드 개발자로서 큰 성장을 도모한다고
                            믿고 있기에 이에 거리낌이 없고, 매 프로젝트에 다른 기술을 적용하려고
                            노력하였습니다.
                        </p>
                        <p className="mb-3">
                            정보를 전달하거나 의견이 맞지 않는 상황에서 상대방을 배려하는
                            커뮤니케이션에 능합니다. 협업 시 그러한 문제 상황을 좋은 분위기로 이끌어
                            원하는 결과물을 얻은 다수의 경험이 있습니다.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link
                            href="/projects"
                            className="inline-flex text-white dark:text-slate-100 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
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
