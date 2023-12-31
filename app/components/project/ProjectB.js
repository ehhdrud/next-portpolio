'use client';

import React from 'react';
import Link from 'next/link';
import ImgBox from './ImgBox';

export default function ProjectB() {
    const coworkTags = ['Git', 'GitHub', 'Slack', 'Notion', 'Gather'];
    const frontendTags = [
        'React',
        'Vite',
        'TypeScript',
        'Axios',
        'Recoil',
        'Emotion',
        'Figma',
        'Vercel',
    ];
    const backendTags = [
        'Java',
        'SpringBoot',
        'MySQL',
        'AmazonRDS',
        'Gradle',
        'Junit5',
        'Postman',
        'Swagger',
        'Docker',
        'AmazonEC2',
        'JWT',
        'AmazonS3',
    ];

    const details = [
        'axios, async/await를 사용한 비동기 통신을 통해 데이터를 CRUD하였습니다.',
        '데이터를 Recoil에서 따로 관리하여 Props drilling 없이 데이터를 주고 받았고 recoil-persist를 통해 Session storage에 저장함으로써 지속적 접근이 가능하도록 하였습니다.',
        "'운동 정보' 페이지에서 React-Query의 useInfiniteQuery를 통해 크롤링한 동영상에 대한 무한스크롤을 구현하였습니다. 응답받은 동영상은 5분간 캐시에 저장하여 렌더링 효율을 개선하였습니다. ('북마크' 페이지에 저장된 동영상에도 무한스크롤과 캐싱을 적용.) ",
        'Kakao Map API와 Geolocation API를 통해 지도를 불러오고, 키워드로 위치를 검색하는 기능과 현재 위치나 특정 위치의 위도/경도를 반환받아 위치를 설정 기능을 구현하였습니다.  지도 클릭 없이 위치 설정 아이콘을 클릭할 경우에는 현재 위치에 마커를 표시하고, 지도의 특정 위치를 클릭한 후 아이콘 클릭할 경우 해당 위치에 마커를 표시하였습니다.',
        '주변 사용자를 조회할 때 마커 기준 3km 범위에 한정함으로써 각 요청마다 적정량의 주변 사용자 데이터를 응답받았습니다. 주변 사용자의 위도와 경도를 상태로 저장하여 지도 상에 다른 사용자의 마커를 표시하고 해당 마커를 클릭하여 메이트 요청을 보낼 수 있도록 구현하였습니다.',
        'Quill을 통해 게시판 에디터를 구현하였습니다. 이미지를 첨부할 경우, Amazon S3를 통해 base64 포맷이 아닌 URL 포맷으로 이미지를 저장하여 이미지 관리를 위한 서버 부하를 감소시켰습니다.',
        '한번에 모든 게시글을 불러와 페이지당 10개의 게시글을 보여주는 프론트엔드 측 페이지네이션 방식을 Path variable, Query parameter을 통해 서버에서 페이지 당 10개의 게시글을 불러오는 백엔드 측 페이지네이션 방식으로 변경하여 렌더링 효율 및 메모리 효율을 개선하였습니다. ',
        '메이트만 볼 수 있는 게시글로 설정할 수 있는 기능을 추가하였습니다. ‘Mate only’ 게시글에 접근 시 메이트 여부를 반환받아서 권한을 확인하여, 본인 또는 메이트만 접근 권한이 있도록 설계하였습니다.',
        '게시글 정보를 가져올 때, dompurify 라이브러리를 통한 Sanitize 과정을 거치도록 하여 XSS 위험을 방지하였고, 추가적으로 CSRF에 대해서 이해하고 해결 방법에 대해 학습하였습니다.',
    ];
    return (
        <div className="project flex flex-col gap-10">
            <div className="sub-tags flex flex-col">
                <div className="flex flex-row flex-wrap">
                    {coworkTags.map((coworkTag, index) => (
                        <div
                            key={`coworkTags-${index}`}
                            className="text-sm px-2 py-1 mr-2 mb-2 rounded-md bg-sky-200 dark:bg-sky-700 text-slate-900 dark:text-white shadow-md shadow-slate-400 dark:shadow-slate-900"
                        >
                            {coworkTag}
                        </div>
                    ))}
                </div>
                <div className="flex flex-row flex-wrap">
                    {frontendTags.map((frontendTag, index) => (
                        <div
                            key={`frontendTags-${index}`}
                            className="text-sm px-2 py-1 mr-2 mb-2 rounded-md  bg-blue-200 dark:bg-blue-700 text-slate-900 dark:text-white shadow-md shadow-slate-400 dark:shadow-slate-900"
                        >
                            {frontendTag}
                        </div>
                    ))}
                </div>
                <div className="flex flex-row flex-wrap">
                    {backendTags.map((backendTag, index) => (
                        <div
                            key={`backendTags-${index}`}
                            className="text-sm px-2 py-1 mr-2 mb-2 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 shadow-md shadow-slate-400 dark:shadow-slate-900"
                        >
                            {backendTag}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">⭐ 프로젝트 설명</h2>
                <div className="mb-4">
                    <p className="mb-3">
                        가까운 위치의 운동 메이트를 찾아주고 유저들 간 정보를 공유할 수 있도록 하는
                        플랫폼입니다.
                    </p>
                    <p>
                        아래 기능의 프론트엔드 구현을 담당하였습니다. <br />◽ 카테고리 별 동영상을
                        제시하는 <strong>운동 정보</strong>와 해당 동영상을 개인 저장하는{' '}
                        <strong>북마크</strong> <strong>(100%)</strong> <br />◽ 지도에서 위치를
                        지정하고 해당 위치의 주변 사용자를 조회하여 메이트 요청을 보내는{' '}
                        <strong>운동 메이트 찾기</strong> <strong>(80%)</strong>
                        <br />◽ 게시글 CRUD, 게시글에 대한 좋아요/댓글, 게시글 필터링 등이 가능한{' '}
                        <strong>커뮤니티</strong> <strong>(100%)</strong>
                    </p>
                </div>
                <div>
                    <Link
                        href="https://github.com/ashjang/FitTogether"
                        className="text-sm bg-indigo-400 dark:bg-indigo-600 hover:bg-indigo-600 hover:dark:bg-indigo-800 rounded-md px-2 py-1 mx-1 text-gray-50 hover:text-gray-50 dark:text-white shadow-md shadow-slate-400 dark:shadow-slate-900"
                    >
                        GitHub <strong>→</strong>
                    </Link>
                    <Link
                        href="https://fit-together.vercel.app/"
                        className="text-sm bg-indigo-400 dark:bg-indigo-600 hover:bg-indigo-600 hover:dark:bg-indigo-800 rounded-md px-2 py-1 mx-1 text-gray-50 hover:text-gray-50 dark:text-white shadow-md shadow-slate-400 dark:shadow-slate-900"
                    >
                        Vercel <strong>→</strong>
                    </Link>
                    <Link
                        href="https://youtu.be/8_a2KKZx0nU"
                        className="text-sm bg-indigo-400 dark:bg-indigo-600 hover:bg-indigo-600 hover:dark:bg-indigo-800 rounded-md px-2 py-1 mx-1 text-gray-50 hover:text-gray-50 dark:text-white shadow-md shadow-slate-400 dark:shadow-slate-900"
                    >
                        Youtube <strong>→</strong>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-5">🖼 관련 이미지</h2>
                <div className="flex items-center flex-col gap-8">
                    <ImgBox
                        src={'/Image/B_FitTogether_운동정보&북마크_시퀀스다이어그램_캡처본.PNG'}
                        description={"시퀀스 다이어그램 - '운동 정보' & '북마크'"}
                        width={850}
                        height={850}
                    />
                    <ImgBox
                        src={'/Image/B_FitTogether_운동메이트찾기_시퀀스다이어그램_캡처본.PNG'}
                        description={"시퀀스 다이어그램 - '운동 메이트 찾기'"}
                        width={850}
                        height={850}
                    />
                    <ImgBox
                        src={'/Image/B_FitTogether_커뮤니티_시퀀스다이어그램_캡처본.PNG'}
                        description={"시퀀스 다이어그램 - '커뮤니티'"}
                        width={850}
                        height={850}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-5">💡 주요 구현 내용</h2>
                <div className="detail-container flex flex-col">
                    {details.map((detail, index) => (
                        <div className="mb-3" key={`details-${index}`}>
                            ◽ {detail}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-5">📜 관련 블로그 글</h2>
                <div className="blog-link-container flex flex-col">
                    <Link href="https://velog.io/@ehhdrud/quill-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EC%97%90%EB%94%94%ED%84%B0%EC%9D%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B2%98%EB%A6%AC">
                        ◽ Quill 게시판 에디터의 이미지 처리 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/%EB%AC%B8%EC%9E%90%EC%97%B4%EB%A1%9C-%EC%B6%9C%EB%A0%A5%EB%90%98%EB%8A%94-HTML%EC%9D%84-DOM-%EC%9A%94%EC%86%8C%EC%97%90-%EC%82%BD%EC%9E%85%ED%95%A0-%EB%95%8C-XSS-%EB%B0%A9%EC%A7%80">
                        ◽ 문자열로 출력되는 HTML을 DOM 요소에 삽입할 때 XSS 방지 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/map%EC%9C%BC%EB%A1%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%9E%91%EC%97%85-%EC%8B%9C-%EC%88%9C%EC%84%9C%EA%B0%80-%EB%B3%B4%EC%9E%A5%EB%90%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EB%AC%B8%EC%A0%9C">
                        ◽ 배열을 순회하는 비동기 작업 시 순서가 보장되지 않는 문제 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EC%97%90%EC%84%9C-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98%EC%9D%84-%EA%B5%AC%ED%98%84%ED%96%88%EC%9D%84-%EA%B2%BD%EC%9A%B0-%EB%AC%B8%EC%A0%9C">
                        ◽ 프론트엔드에서 페이지네이션을 구현했을 경우 문제 🔍
                    </Link>
                </div>
            </div>
        </div>
    );
}
