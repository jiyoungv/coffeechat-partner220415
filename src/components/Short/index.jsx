import React from 'react';
import { Inners } from '../../styles/Common';
import { Shorts } from './Style';
import short_mark from '../../assets/images/short_mark.png';
import { IsDesktop, IsTablet, IsMobile } from '../../utils/mediaQuery';

const Short = () => {
    return (
        <Shorts>
            <Inners>
                <article className='short-content'>
                    <div className='short-img'>
                        <figure>
                            <img src={short_mark} alt='' />
                        </figure>
                    </div>
                    <div className='short-txt'>
                        {IsDesktop() && <h2>나의 소중한 경험이 누군가에게 용기가 되어 뿌듯하고, 리워드까지 얻을 수 있어요</h2>}
                        {IsTablet() && <h2>나의 소중한 경험이 누군가에게 용기가 되어 뿌듯하고 <br/>리워드까지 얻을 수 있어요</h2>}
                        {IsMobile() && <h2>나의 소중한 경험이 <br/>누군가에게 용기가 되어 뿌듯하고 <br/>리워드까지 얻을 수 있어요</h2>}
                    </div>
                </article>
            </Inners>
        </Shorts>
    );
};

export default Short;