import React from 'react';
import { Inners, Buttons } from '../../styles/Common';
import { Induces } from './Style';
import { IsDesktop, IsTablet, IsMobile } from '../../utils/mediaQuery';

const Induce = () => {
    return (
        <Induces>
            <Inners>
                <article className='induce-content'>
                    <div className='induce-txt'>
                        {IsDesktop() && 
                            <h2>
                                <strong>나의 지식과 경험을 나눌 준비가 되었다면? <br/>
                                당신도 커피챗 파트너가 될 수 있어요.</strong> <br/>
                                모두의 경험은 소중하고 가치 있기에, 커피챗은 누구에게나 열려있습니다.
                            </h2>
                        }
                        {IsTablet() &&
                            <>
                                <h2>
                                    <strong>나의 지식과 경험을 나눌 준비가 되었다면? <br/>
                                    당신도 커피챗 파트너가 될 수 있어요.</strong> <br/>
                                    모두의 경험은 소중하고 가치 있기에, 커피챗은 누구에게나 열려있습니다.
                                </h2>
                            </>
                        }
                        {IsMobile() && 
                            <>
                                <h2>
                                    <strong>나의 지식과 경험을 <br/>
                                    나눌 준비가 되었다면? <br/>
                                    당신도 커피챗 파트너가 될 수 있어요.</strong>
                                </h2>
                                <h3>
                                    모두의 경험은 소중하고 가치 있기에, <br/>
                                    커피챗은 누구에게나 열려있습니다.
                                </h3>
                            </>
                        }
                    </div>
                    <Buttons typeColor={'#fff'} className='induce-btn'>
                        <a href='https://coffeechat.onelink.me/XgWl/hr5yc151' target='_blank' rel='noreferrer' title='커피챗 파트너 등록하기'>커피챗 파트너 등록하기</a>
                    </Buttons>
                </article>
            </Inners>
        </Induces>
    );
};

export default Induce;