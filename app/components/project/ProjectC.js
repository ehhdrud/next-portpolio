'use client';

import React from 'react';
import Link from 'next/link';
import ImgBox from './ImgBox';
import { FaArrowRight } from 'react-icons/fa';

export default function ProjectC() {
    const details = [
        'JavaScript, CSS를 최대한 활용하여 여러 동적 효과를 가진 반응형 UI를 구현하였습니다.',
        'Ethers 객체를 통해 사용자의 MetaMask 계정을 조회하여 현재 연결된 네트워크의 주소와 자산을 확인할 수 있도록 하였습니다.',
        '이미지 최적화 과정, 코드 분할을 통한 지연 로딩, lender- blocking 요소 제거, 메모이제이션 등을 통해 통해 렌더링 성능을 향상시켰습니다. 그 결과 Performence 탭에서 측정한 로딩 속도를 5초대(5155ms)에서 1초대 미만으로(600ms)로 향상시켰고, PageSpeed Insight 의 렌더링 점수를 60점대에서 97~100점대로 향상 시켰습니다.',
        'react-helmet-async, react-snap 라이브러리를 활용하여 CSR의 검색 엔진 최적화 약점을 보완하였습니다.',
    ];
    return (
        <div className="project flex flex-col gap-10">
            <p className="mt-8">
                Web2와 Web3에서 AI tool를 활용한 그림을 판매하는 사업인 D3sign DAO Studio의 소개
                사이트입니다.
            </p>

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

            <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-5">🖼 스크린샷</h2>
                <div className="flex items-center gap-5">
                    <ImgBox
                        src={'/Image/C_이미지최적화전.PNG'}
                        description={'이미지 최적화 전 로딩 속도'}
                        width={350}
                        height={350}
                    />
                    <FaArrowRight color="#666" size="30" />
                    <ImgBox
                        src={'/Image/C_이미지최적화후.PNG'}
                        description={'이미지 최적화 후 로딩 속도'}
                        width={350}
                        height={350}
                    />
                </div>
                <div className="flex items-center gap-5">
                    <ImgBox
                        src={'/Image/C_PSI_렌더링최적화전.PNG'}
                        description={'렌더링 최적화 전 PageSpeed Insight 점수'}
                        width={350}
                        height={350}
                    />
                    <FaArrowRight color="#888" size="30" />
                    <ImgBox
                        src={'/Image/C_PSI_렌더링최적화후.PNG'}
                        description={'렌더링 최적화 후 PageSpeed Insight 점수'}
                        width={350}
                        height={350}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-5">📜 관련 블로그 글</h2>
                <div className="blog-link-container flex flex-col">
                    <Link href="https://velog.io/@ehhdrud/React-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%B5%9C%EC%A0%81%ED%99%94%EB%A5%BC-%ED%86%B5%ED%95%9C-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%B1%EB%8A%A5-%EA%B0%9C%EC%84%A0">
                        - 이미지 최적화를 통한 렌더링 성능 개선 과정과 결과 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/useEffect%EC%9D%98-%EC%9D%98%EC%A1%B4%EC%84%B1-%EB%B0%B0%EC%97%B4-%EA%B4%80%EB%A0%A8-%EA%B2%BD%EA%B3%A0">
                        - useEffect의 의존성 배열 관련 이슈 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C%EC%9D%98-DOM-%EC%A0%91%EA%B7%BC%EA%B3%BC-%EC%96%B8%EB%A7%88%EC%9A%B4%ED%8A%B8-%EC%8B%9C-%EB%A9%94%EB%AA%A8%EB%A6%AC-%EB%88%84%EC%88%98-%EB%B0%A9%EC%A7%80%ED%95%98%EA%B8%B0">
                        - useRef을 사용한 DOM 접근과 Ref.current를 cleanup 함수에서 사용할 시 주의할
                        점 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/%EC%8A%A4%EC%99%80%EC%9D%B4%ED%94%84-%EB%8F%99%EC%9E%91-%EC%8B%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%B0%A9%EC%A7%80">
                        - 스와이프 동작 시 스크롤 방지와 UX 개선 🔍
                    </Link>
                </div>
            </div>

            <div>
                <div>
                    <Link
                        href="https://github.com/ehhdrud/d3sign-dao-studio"
                        className=" bg-gray-400 hover:bg-gray-500 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="https://d3sign-dao-studio.vercel.app/"
                        className="bg-blue-700 hover:bg-blue-800 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                    >
                        Vercel
                    </Link>
                    <Link
                        href="https://youtu.be/OpwizAblHl8"
                        className="bg-red-400 hover:bg-red-500 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                    >
                        Youtube
                    </Link>
                </div>
            </div>
        </div>
    );
}
