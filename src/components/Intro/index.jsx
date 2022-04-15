import React, { useEffect, useRef, useState } from 'react';
import { Inners } from '../../styles/Common';
import { Intros } from './Style';
import useScroll from '../../hooks/useScroll';
import { IsDesktop } from '../../utils/mediaQuery';

const Intro = () => {
    const isDesktop = IsDesktop();
    const [scrollY] = useScroll();
    const scrollDesktopRef = useRef(null); // 스크롤 기준 요소 (Desktop)
    const scrollMobileRef = useRef(null); // 스크롤 기준 요소 (Tablet, Mobile)
    const [pointY, setPointY] = useState(0); // 스크롤 시작 지점
    const [on, setOn] = useState(false); // 스크롤 애니메이션 상태

    useEffect(() => {
        if (scrollY <= 0) return;

        let el = scrollMobileRef.current;

        if (isDesktop) {
            el = scrollDesktopRef.current;
        }
        
        const elPosY = scrollY + el.getBoundingClientRect().top;
        const elHeight = el.offsetHeight;
        const clientH = document.documentElement.clientHeight;
        const result = Math.floor(elPosY + elHeight - clientH);

        setPointY(result);
    }, [scrollY, pointY, isDesktop]);

    useEffect(() => {
        if (scrollY > 0 && pointY > 0 && scrollY > pointY) {
            setOn(true);
        }
    }, [scrollY, pointY]);

    return (
        <Intros>
            <Inners>
                <div className='intro-txt'>
                    <h2>커피챗 파트너란?</h2>
                    <p>
                        커피챗은 이직, 면접, 직무, 커리어 전환, 취업, 유학 등 먼저 경험한 사람에게 <br className='none-mobile' />
                        궁금함을 풀어놓고 정보와 기회를 탐색하는 20분 대화입니다.
                    </p>
                    <p>
                        커피챗 파트너는 나의 경험에 기반한 지식과 정보를 목소리로 나누며, <br className='none-desktop none-mobile' />
                        지속적인 수익을 창출할 수 있습니다. <br/>
                        바쁜 일상에서도 대화를 통해 나의 가치를 발견하고 존중받는 것. <br className='none-mobile'/>
                        지금 따뜻한 대화 한 잔, 어떠세요?
                    </p>
                </div>
                <ul className='intro-list' ref={scrollDesktopRef}>
                    <li className={`intro-list-item ${on ? 'on' : ''}`}>
                        <h3>언제 어디서나.</h3>
                        <p>
                            내가 원하는 시간에 <br className='none-tablet' />
                            커피챗 앱으로
                        </p>
                    </li>
                    <li className={`intro-list-item trans-delay1 ${on ? 'on' : ''}`} ref={scrollMobileRef}>
                        <h3>목소리로.</h3>
                        <p>
                            익명을 보장받으며 <br className='none-tablet'/>
                            음성 대화로 자유롭게
                        </p>
                    </li>
                    <li className={`intro-list-item trans-delay2 ${on ? 'on' : ''}`}>
                        <h3>경험을 나누며.</h3>
                        <p>
                            나의 경험에 기반한 <br className='none-tablet'/>
                            정보와 지식을 나누며
                        </p>
                    </li>
                    <li className={`intro-list-item trans-delay3 ${on ? 'on' : ''}`}>
                        <h3>리워드까지.</h3>
                        <p>
                            소중한 20분의 대화에 <br className='none-tablet'/>
                            현금 리워드 1만 원
                        </p>
                    </li>
                </ul>
            </Inners>
        </Intros>
    );
};

export default Intro;