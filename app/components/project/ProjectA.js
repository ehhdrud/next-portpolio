'use client';

import React from 'react';
import Link from 'next/link';
import ImgBox from './ImgBox';

export default function ProjectA() {
    const details = [
        'Next.js의 SSR 방식을 통해 초기 로딩 속도와 검색 엔진 최적화 문제 해결하고, 메모이제이션 기술을 적용하여 렌더링 성능을 추가 개선하였습니다. (PageSpeeds Insights의 성능 점수 4개 항목 모두 100점)',
        'Firebase Auth를 통한 Google, Email에 대한 로그인을 구현하였습니다. 사용자 인스턴스의 지속성을 Session으로 설정하여 브라우저 종료 시 권한이 사라지도록 하였습니다. 사용자 정보 데이터는 Recoil에 저장하여 여러 컴포넌트에서 접근하기 용이하도록 하였고, 마찬가지로 recoil-persist를 통해 Session storeage에 저장함으로써 새로고침 시에도 데이터가 유지되면서 사용자 인스턴스와 동일한 생명주기를 갖도록 하였습니다.',
        '운동 데이터 CRUD를 위한 데이터베이스로 Realtime Database와 Cloud Firestore를 고민하였습니다. 깊이가 있는 데이터를 저장하면서 하위 값은 반환받을 필요가 없었기 때문에 문서 컬렉션 데이터 형식을 가지는 Cloud Firestore를 선택하였습니다.',
        'Web Worker를 통해 타이머가 Main thread가 아닌 Worker thread에서 동작하도록 구현하여 운동 중 다른 탭으로 이동하거나 브라우저를 백그라운드 상태에 두더라도 타이머가 계속 동작하도록 UX를 개선하였습니다.',
        '설정된 타이머를 누르면 타이머 ON/OFF되고 Reps 입력을 마칠 때도 타이머가 작동합니다. 그러나 각 운동 별 마지막 Reps 입력 완료 시에는 해당 쉬는 시간을 적용하지 않으므로 타이머가 작동하지 않도록 설계하여 사용성을 높혔습니다.',
    ];
    return (
        <div className="project flex flex-col gap-10">
            <div>
                <h2 className="text-xl font-bold mb-2 mt-10">⭐ 프로젝트 설명</h2>
                <p className="mb-4">
                    웨이트 트레이닝 루틴의 점진적 과부하를 위한 운동 일지로, 현존하는 운동 일지
                    앱에는 존재하지 않는 <i>운동별로 설정할 수 있는 휴식 시간 타이머</i> 기능을
                    구현한 프로젝트입니다.
                </p>
                <div className="flex">
                    <Link
                        href="https://github.com/ehhdrud/workout-log-for-overload"
                        className="w-fit text-sm bg-indigo-400 dark:bg-indigo-600 hover:bg-indigo-600 hover:dark:bg-indigo-800 rounded-md px-2 py-1 mx-1 text-gray-50 hover:text-gray-50 dark:text-white shadow-md shadow-slate-400 dark:shadow-slate-900"
                    >
                        GitHub <strong>→</strong>
                    </Link>
                    <Link
                        href="https://workout-log-for-overload.vercel.app/"
                        className="w-fit text-sm bg-indigo-400 dark:bg-indigo-600 hover:bg-indigo-600 hover:dark:bg-indigo-800 rounded-md px-2 py-1 mx-1 text-gray-50 hover:text-gray-50 dark:text-white shadow-md shadow-slate-400 dark:shadow-slate-900"
                    >
                        Vercel <strong>→</strong>
                    </Link>
                    <Link
                        href="https://youtu.be/iU5sZAEP5Jk"
                        className="w-fit text-sm bg-indigo-400 dark:bg-indigo-600 hover:bg-indigo-600 hover:dark:bg-indigo-800 rounded-md px-2 py-1 mx-1 text-gray-50 hover:text-gray-50 dark:text-white shadow-md shadow-slate-400 dark:shadow-slate-900"
                    >
                        Youtube <strong>→</strong>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col">
                <h2 className="text-xl font-bold mb-5">🖼 관련 이미지</h2>
                <div className="flex items-center flex-col gap-8">
                    <ImgBox
                        src={'/Image/A_workout-log-for-overload_시퀀스다이어그램_캡처본.PNG'}
                        description={'시퀀스 다이어그램'}
                        width={850}
                        height={850}
                    />
                    <ImgBox
                        src={'/Image/A_PSI_최종.PNG'}
                        description={'렌더링 성능 개선 후 PageSpeed Insights 성능 점수'}
                        width={850}
                        height={850}
                    />
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">💡 주요 구현 내용</h2>
                <div className="detail-container flex flex-col">
                    {details.map((detail, index) => (
                        <div className="mb-3" key={`details-${index}`}>
                            ◽ {detail}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">📜 관련 블로그 글</h2>
                <div className="blog-link-container flex flex-col">
                    <Link href="https://velog.io/@ehhdrud/Web-Worker%EB%A5%BC-%EC%A0%81%EC%9A%A9%ED%95%98%EB%A9%B4%EC%84%9C-%EA%B2%AA%EC%9D%80-%EB%AC%B8%EC%A0%9C">
                        ◽ Web Worker를 적용하면서 겪은 문제 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/Nextjs%EC%97%90%EC%84%9C-%EC%9B%B9-%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%A0-%EB%95%8C-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EB%AC%B8%EC%A0%9C">
                        ◽ Next.js에서 웹 스토리지를 사용할 때 발생하는 문제 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/%EC%83%81%EC%9C%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-%ED%95%98%EC%9C%84-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%ED%95%A8%EC%88%98%EC%97%90-%EC%A0%91%EA%B7%BC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95">
                        ◽ 상위 컴포넌트에서 하위 컴포넌트의 함수에 접근 🔍
                    </Link>
                    <Link href="https://velog.io/@ehhdrud/current%EA%B0%80-%ED%95%AD%EC%83%81-%EB%A7%88%EC%A7%80%EB%A7%89-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EC%B0%B8%EC%A1%B0%ED%95%98%EB%8A%94-%EB%AC%B8%EC%A0%9C">
                        ◽ 동적으로 렌더링되는 컴포넌트에 Ref를 설정할 때 주의점 🔍
                    </Link>
                </div>
            </div>
        </div>
    );
}
