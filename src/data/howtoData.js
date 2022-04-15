import shortid from 'shortid';

const howtoData = [
    { 
        id: shortid.generate(),
        title: '파트너 등록 신청',
        text: `
            <p>커피챗 앱에서 회원가입 후 바로 파트너 등록을 진행해 주세요.</p>
            <ul>    
                <li>나의 경험을 담은 매력적인 프로필과 대화 가능 주제 작성</li>
                <li>2단계 인증 진행 (명함 또는 재직/재학 증명서 제출)</li>
            </ul>
        `,
    },
    { 
        id: shortid.generate(),
        title: '커피챗 수락',
        text: `
            <p>앱 푸시 알림 또는 카카오톡 알림톡을 통해 내가 받은 커피챗을 확인해 주세요.</p>
            <ul>
                <li>신청자의 사전 질문 확인 후 원하는 시간 선택</li>
                <li>일정 조율 또는 거절 가능</li>
            </ul>
        `,
    },
    { 
        id: shortid.generate(),
        title: '커피챗 진행',
        text: `
            <p>예약 시간에 앱에서 입장해 주세요.</p>
            <ul>
                <li>예약 시간 30분 전부터 입장 가능</li>
                <li>1:1 익명 기반 20분 음성 대화 진행</li>
            </ul>
        `,
    },
    { 
        id: shortid.generate(),
        title: '리워드 획득',
        text: `
            <p>커피챗 종료 후 리워드 정보를 입력해 주세요.</p>
            <ul>
                <li>리워드 정보 최초 1회 등록 필요</li>
                <li>매주 목요일 현금 리워드 등록 계좌로 지급 (1회 20분 / 1만 원)</li>
            </ul>
        `,
    },
];

export default howtoData;