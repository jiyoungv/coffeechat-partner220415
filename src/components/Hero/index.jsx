import React from 'react';
import { Inners } from '../../styles/Common';
import { Heros } from './Style';

const Hero = () => {
    return (
        <Heros>
            <Inners>
                <div className='hero-txt'>
                    <h1>
                        우리는 모두의 경험이 <br className='none-desktop'/>
                        가치 있음을 믿습니다. <br/>
                        나의 경험을 필요로 하는 사람에게 <br/>
                        가장 진심 어린 대답으로. <br/>
                    </h1>
                    <h1 className='type2'>
                        지금, 커피챗 파트너가 되어 <br/>
                        새로운 대화를 시작해보세요                        
                    </h1>
                    <h3>
                        국내 최초 1:1 익명 기반 <br/>
                        커리어 대화 연결 플랫폼 커피챗
                    </h3>
                    <a href='https://coffeechat.onelink.me/XgWl/hr5yc151' target='_blank' rel='noreferrer' className='hero-btn' title='커피챗 파트너 등록하기'>커피챗 파트너 등록하기</a>
                </div>
            </Inners>
        </Heros>
    );
};

export default Hero;