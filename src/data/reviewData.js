import shortid from 'shortid';

const reviewData = [
    { 
        id: shortid.generate(),
        company: 'Apple',
        title: `
            애플 코리아 Apple, <br/>
            뚱이딸 파트너의 커피챗 이야기
        `,
        text: `
            커피챗으로 같은 분야에서 일하는 분들과 대화를 <br className='none-tablet none-mobile'/>
            하며 저의 경험을 나누는 뿌듯함도 있고, <br className='none-mobile'/>
            새로운 시각과 의견을 얻는 즐거움도 있어요 :)
        `,
    },
    { 
        id: shortid.generate(),
        company: '제일기획',
        title: `
            제일기획, <br/>
            키코 파트너의 커피챗 이야기
        `,
        text: `
            20분의 대화만으로 누군가의 시행착오를 <br className='none-tablet none-mobile'/>
            조금은 덜어줄 수 있다는 기쁨과  커피 한 잔의 <br className='none-tablet none-mobile'/>
            진한 여운까지 남는 대화가 저에게도 에너지를 <br className='none-tablet none-mobile'/>
            주는 것 같아요. <br className='none-tablet none-mobile'/>
            오랜 직장 생활로 잠시 잊었던 목표와 <br className='none-tablet none-mobile'/>
            일의 의미들을 다시 생각해 봅니다.
        `,
        type: 2,
    },
    { 
        id: shortid.generate(),
        company: 'Dentsu New York',
        title: `
            Dentsu New York, <br/>
            제니 파트너의 커피챗 이야기
        `,
        text: `
            미국 유학 커리어 패스가 궁금하거나 준비하는 <br className='none-tablet none-mobile'/>
            분들께 저의 실제 경험을 전달하며 도움이 될 수 <br className='none-tablet none-mobile'/>
            있고, <br className='none-desktop none-mobile'/>
            또 대화를 통해 저의 커리어도 함께 돌아볼 수 <br className='none-tablet none-mobile'/>
            있는 계기가 되었어요 :)
        `,
        type: 3,
    },
    { 
        id: shortid.generate(),
        company: 'INSEAD MBA',
        title: `
            INSEAD MBA, <br/>
            Comienzo 파트너의 커피챗 이야기
        `,
        text: `
            링크드인을 통해 수없이 콜드 메일을 보냈던 경험, <br className='none-tablet none-mobile'/>
            저도 있습니다. <br className='none-tablet none-mobile'/>
            이제는 커피챗으로 누군가의 시작에 조금이나마 <br className='none-mobile'/>
            도움이 될 수 있다니 기뻐요. <br className='none-tablet none-mobile'/>
            20분 동안 실시간으로 대화를 주고받으며 저도 <br className='none-tablet none-mobile'/>
            정보를 얻기도 합니다.
        `,
        type: 4,
    },
    { 
        id: shortid.generate(),
        company: 'CMU',
        title: `
            Carnegie Mellon University, <br/>
            jayjay 파트너의 커피챗 이야기
        `,
        text: `
            국내 대기업에서 해외 석사를 거쳐 미국 <br className='none-tablet none-mobile'/>
            현지 취업까지 하는 동안 저도 수많은 분들에게 <br className='none-mobile'/>
            도움과 에너지를 받았어요. <br className='none-tablet none-mobile'/>
            이제는 커피챗으로 저의 경험이 필요한 분들께 <br className='none-tablet none-mobile'/>
            pay it forward를 실천하고 있습니다.
        `,
    },
];

export default reviewData;