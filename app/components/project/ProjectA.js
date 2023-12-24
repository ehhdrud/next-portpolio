'use client';

import React from 'react';
import Link from 'next/link';
import ImgBox from './ImgBox';

export default function ProjectA() {
    const details = [
        'Next.js의 SSR 방식을 통해 CSR의 초기 로딩 속도, 검색 엔진 최적화 문제를 개선하고, PageSpeed 권장 사항을 준수하여 여러가지 렌더링 관련 문제들을 해결하였습니다 . 그 결과 CSR 방식으로만 진행한 프로젝트에 비해 월등히 높은 Performance 점수를 받았습니다.',
        'Firebase Auth를 통해 로그인/회원가입을 구현하고, Recoil을 사용해 사용자 정보를 관리하였습니다. Recoil-Persist를 통해 Session-Storeage에 사용자 정보를 저장하여 유연한 데이터 접근을 가능하게 하는 동시에 새로고침 시에도 데이터가 유지되도록 하였습니다. 사용자 인스턴스의 지속성도 Session에서 관리하도록 설정하여 브라우저 종료 시 사용자 인스턴스가 삭제되도록 하여 보안을 신경썼습니다.',
        'Firebase Cloud Firestore 에서 운동 데이터를 CRUD하는 방식으로 서버리스로 데이터를 구축하였습니다. 백엔드가 설계한 REST API에 요청을 보내 데이터를 넘겨받을 때보다 데이터의 구조에 대해 더 깊히 생각해볼 수 있는 계기가 되었습니다.',
        'Web Worker를 통해 타이머가 main thread가 아닌 worker thread에서 동작하도록 구현하였습니다. 이로 인해 운동 중 다른 탭으로 이동하거나 브라우저를 백그라운드 상태에 두더라도 타이머가 계속 동작하도록 하여 UX를 개선하였습니다.',
    ];
    return (
        <div className="project flex flex-col gap-10">
            <p className="mt-8">
                웨이트 트레이닝 루틴의 점진적 과부하를 위한 운동 일지로, 현존하는 운동 일지 앱에는
                존재하지 않는 '운동별로 설정할 수 있는 휴식 시간 타이머' 기능을 구현한
                프로젝트입니다.
            </p>

            <div>
                <h2 className="text-xl font-bold mb-2">💡 주요 구현 내용</h2>
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
                <div className="flex items-center">
                    <ImgBox
                        src={'/Image/A_PSI_최종.PNG'}
                        description={'PageSpeed Insight 렌더링 개선 후 점수'}
                        width={600}
                        height={600}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">📜 관련 블로그 글</h2>
                <div className="blog-link-container flex flex-col">
                    <Link href="https://velog.io/@ehhdrud/Web-Worker%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%98%EB%A9%B4%EC%84%9C-%EA%B2%AA%EC%9D%80-%EB%AC%B8%EC%A0%9C">
                        - Web Worker를 적용하면서 겪은 문제 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/Nextjs%EC%97%90%EC%84%9C-%EC%9B%B9-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%A0-%EB%95%8C-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EB%AC%B8%EC%A0%9C">
                        - Next.js에서 웹 스토리지를 사용할 때 발생하는 문제 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/%EC%83%81%EC%9C%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-%ED%95%98%EC%9C%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%ED%95%A8%EC%88%98%EC%97%90-%EC%A0%91%EA%B7%BC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95">
                        - 상위 컴포넌트에서 하위 컴포넌트의 함수에 접근 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/current%EA%B0%80-%ED%95%AD%EC%83%81-%EB%A7%88%EC%A7%80%EB%A7%89-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EC%B0%B8%EC%A1%B0%ED%95%98%EB%8A%94-%EB%AC%B8%EC%A0%9C">
                        - 동적으로 렌더링되는 컴포넌트에 Ref를 설정할 때 주의점 🔍
                    </Link>
                </div>
            </div>

            <div>
                <div>
                    <Link
                        href="https://github.com/ehhdrud/workout-log-for-overload"
                        className=" bg-gray-400 hover:bg-gray-500 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                    >
                        GitHub
                    </Link>
                    <Link
                        href="workout-log-for-overload.vercel.app"
                        className="bg-blue-700 hover:bg-blue-800 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                    >
                        Vercel
                    </Link>
                    <Link
                        href="https://youtu.be/iU5sZAEP5Jk"
                        className="bg-red-400 hover:bg-red-500 rounded-lg px-2 py-1 mx-1 text-gray-50 font-bold dark:text-white"
                    >
                        Youtube
                    </Link>
                </div>
            </div>
        </div>
    );
}
