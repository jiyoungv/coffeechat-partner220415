import React from 'react';
import { Inners } from '../../styles/Common';
import { Connects } from './Style';

const Connect = () => {
    return (
        <Connects>
            <Inners>
                <article className='connect-content'>
                    <div className='connect-txt'>
                        <h2>
                            우리는 <br className='none-desktop'/>
                            모두의 경험이 <br/>
                            가치가 있음을 믿습니다. <br/>
                            궁금함을 마음껏 묻고 싶은 호기심과 <br/>
                            진심을 다해 알려주고 싶은 마음의 벽을 <br/>
                            허물어 보겠습니다. <br/>
                            나의 경험을 나눌 준비가 되었다면, <br/>
                            지금 커피챗 파트너로 함께해 주세요.          
                        </h2>
                    </div>
                    <div className='connect-btn-wrap'>
                        <a href='https://coffeechat.onelink.me/XgWl/bryvxhjw' target='_blank' rel='noreferrer' title='Google Play' className='connect-btn'>Google Play</a>
                        <a href='https://coffeechat.onelink.me/XgWl/bryvxhjw' target='_blank' rel='noreferrer' title='App Store' className='connect-btn type-apple'>App Store</a>
                    </div>
                </article>
            </Inners>
        </Connects>
    );
};

export default Connect;