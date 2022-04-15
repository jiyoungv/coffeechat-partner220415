import React, { useState, useCallback, useEffect } from 'react';
import { EventBanners } from './Style';
import eb_coupon from '../../assets/images/eb_coupon.png';
import useScroll from '../../hooks/useScroll';
import { IsMobile } from '../../utils/mediaQuery';

const EventBanner = () => {
    const isMobile = IsMobile();
    const [show, setShow] = useState(true);
    const [close, setClose] = useState(false);
    const [scrollY] = useScroll();

    const onHide = useCallback(() => {
        setShow(false);
    }, []);

    const onClose = useCallback(() => {
        setClose(true);
        setShow(false);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            if (scrollY > 100) {
                setShow(false);
            } else if (scrollY === 0) {
                setShow(true);
            }
        } else {
            if (!close) {
                setShow(true);
            }
        }
    }, [isMobile, scrollY, close]);

    return (
        <EventBanners className={show ? 'on' : ''}>
            <article className='eb-content'>
                <div className='eb-txt'>
                    <h3>
                        전 세계 25개국 이상 <br className='none-mobile'/>
                        다양한 <br className='none-desktop none-tablet'/>
                        커리어의 파트너와 자유로운 1:1 커피챗 <br/>
                        신규 가입하면 <strong>누구나 첫 커피챗 무료</strong>
                    </h3>
                </div>
                <figure className='eb-img'>
                    <img src={eb_coupon} alt='' />
                </figure>
                <div className='eb-btn-wrap'>
                    <a href='https://www.coffeechat.kr/event' target='_blank' rel='noreferrer' title='지금 바로 혜택 받기' className='eb-btn'>지금 바로 혜택 받기</a>
                </div>
                <div className='eb-btn-wrap'>
                    <button type='button' title='나중에 받기' className='eb-btn2' onClick={onClose}>나중에 받기</button>
                </div>
            </article>
            <button type='button' className='eb-close' title='배너 닫기' onClick={onHide}>
                <span className='hidden'>배너 닫기</span>
            </button>
        </EventBanners>
    );
};

export default EventBanner;