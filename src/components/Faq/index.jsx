import React, { useState, useCallback } from 'react';
import parse from 'html-react-parser';
import { Inners } from '../../styles/Common';
import { Faqs } from './Style';
import faqData from '../../data/faqData';

const Faq = () => {
    const [index, setIndex] = useState(-1); // -1은 전부 닫힌 상태
    const onClick = useCallback((i) => () => {
        setIndex(i);

        if (i === index) { // 현재 index와 바로 이전 index가 같으면
            setIndex(-1);
        }
    }, [index]);

    const faqList = faqData.map((v, i) => {
        return (
            <li key={v.id} className={i === index ? 'open' : ''}>
                <div className='faq-list-q'>
                    <button type='button' onClick={onClick(i)}>{v.question}</button>
                </div>
                <div className='faq-list-a'>
                    <p>{parse(v.answer)}</p>
                </div>
            </li>            
        )
    });

    return (
        <Faqs>
            <Inners>
                <div className='faq-tit'>
                    <h2>자주 묻는 질문.</h2>
                </div>
                <ul className='faq-list'>
                    {faqList}
                </ul>
            </Inners>
        </Faqs>
    );
};

export default Faq;