'use client';

import React from 'react';
import Link from 'next/link';
import ImgBox from './ImgBox';

export default function ProjectB() {
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
    const coworkTags = ['Git', 'GitHub', 'Slack', 'Notion', 'Gather'];
    const details = [
        'axios, async/await를 통해 REST API에 접근하여 데이터를 CRUD 하고, 해당 데이터를 Recoil을 통해 관리하였습니다. 해당 과정을 통해 AJAX 및 HTTP 통신과 전역 상태 관리에 대한 숙련도를 익혔습니다.',
        'React Query의 useInfiniteQuery를 통해 크롤링 동영상에 대한 무한스크롤을 구현하였습니다. 이를 통해 응답받은 동영상을 5분간 캐시에서 관리하여 애플리케이션의 렌더링 효율을 향상시켰습니다.',
        'Kakao Map API와 Geolocation API를 통해 지도와 위치 설정 기능 구현하였습니다. 주변 사용자를 조회할 때, 3km 범위에 한정함으로써 매 요청마다 적정량의 데이터를 응답받았습니다.',
        'Quill을 통해 게시판 에디터를 구현하고, 첨부할 이미지는 AWS S3를 통해 base64 포맷이 아닌 URL 포맷으로 저장 하였습니다. 이를 통해 서버가 이미지를 관리하기 위한 부하를 감소시켰습니다.',
        '게시글 정보를 가져올 때, dompurify 라이브러리를 통한 Sanitize 과정을 거치도록 하여 XSS 위험을 방지하였습니다. 추가적으로 CSRF에 대해서도 이해하고 해결 방법에 대해 학습하였습니다.',
    ];
    return (
        <div className="project flex flex-col gap-10">
            <div className="sub-tags flex flex-col">
                <div className="flex flex-row">
                    {backendTags.map((backendTag, index) => (
                        <div
                            key={`backendTag-${index}`}
                            className="px-2 py-1 mr-2 rounded-md bg-blue-300 dark:bg-blue-700 w-30 text-slate-900 dark:text-white"
                        >
                            {backendTag}
                        </div>
                    ))}
                </div>
                <div className="flex flex-row">
                    {coworkTags.map((coworkTag, index) => (
                        <div
                            key={`backendTag-${index}`}
                            className="px-2 py-1 mr-2 rounded-md bg-slate-200 dark:bg-slate-700 w-30 text-slate-900 dark:text-white"
                        >
                            {coworkTag}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className="mb-3">
                    가까운 위치의 운동 메이트를 찾아주고 유저들 간 정보를 공유할 수 있도록 하는
                    플랫폼인 FitTogether입니다.
                </p>
                <p>
                    아래 기능의 프론트엔드 구현을 담당하였습니다. <br />- 카테고리 별 동영상을
                    제시하는 ‘운동 정보’와 해당 동영상을 개인 저장하는 ‘북마크’ <br />- 지도에서
                    위치를 지정하고 해당 위치의 주변 사용자를 조회하여 메이트 요청을 보내는 ‘운동
                    메이트 찾기’ <br />- 게시글 CRUD, 게시글에 대한 좋아요/댓글, 게시글 필터링 등이
                    가능한 ‘커뮤니티’
                </p>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-5">💡 주요 구현 내용</h2>
                <div className="detail-container flex flex-col">
                    {details.map((detail, index) => (
                        <div className="mb-3" key={`details-${index}`}>
                            - {detail}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-5">📜 관련 블로그 글</h2>
                <div className="blog-link-container flex flex-col">
                    <Link href="https://velog.io/@ehhdrud/quill-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EC%97%90%EB%94%94%ED%84%B0%EC%9D%98-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B2%98%EB%A6%AC">
                        - Quill 게시판 에디터의 이미지 처리 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/%EB%AC%B8%EC%9E%90%EC%97%B4%EB%A1%9C-%EC%B6%9C%EB%A0%A5%EB%90%98%EB%8A%94-HTML%EC%9D%84-DOM-%EC%9A%94%EC%86%8C%EC%97%90-%EC%82%BD%EC%9E%85%ED%95%A0-%EB%95%8C-XSS-%EB%B0%A9%EC%A7%80">
                        - 문자열로 출력되는 HTML을 DOM 요소에 삽입할 때 XSS 방지 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/map%EC%9C%BC%EB%A1%9C-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%9E%91%EC%97%85-%EC%8B%9C-%EC%88%9C%EC%84%9C%EA%B0%80-%EB%B3%B4%EC%9E%A5%EB%90%98%EC%A7%80-%EC%95%8A%EB%8A%94-%EB%AC%B8%EC%A0%9C">
                        - 배열을 순회하는 비동기 작업 시 순서가 보장되지 않는 문제 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EC%97%90%EC%84%9C-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%84%A4%EC%9D%B4%EC%85%98%EC%9D%84-%EA%B5%AC%ED%98%84%ED%96%88%EC%9D%84-%EA%B2%BD%EC%9A%B0-%EB%AC%B8%EC%A0%9C">
                        - 프론트엔드에서 페이지네이션을 구현했을 경우 문제 🔍
                    </Link>
                </div>
            </div>

            <div>
                <div>
                    <Link
                        href="https://github.com/ashjang/FitTogether"
                        className=" bg-gray-400 hover:bg-gray-500 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="fit-together.vercel.app"
                        className="bg-blue-700 hover:bg-blue-800 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                    >
                        Vercel
                    </Link>
                    <Link
                        href="https://youtu.be/8_a2KKZx0nU"
                        className="bg-red-400 hover:bg-red-500 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                    >
                        Youtube
                    </Link>
                </div>
            </div>
        </div>
    );
}
