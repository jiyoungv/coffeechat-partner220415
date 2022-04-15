import React from 'react';
import { Inners } from '../../styles/Common';
import { Faqs } from './Style';
import faqData from '../../data/faqData';
import FaqList from '../FaqList';

const Faq = () => {
    const faqList = faqData.map((v) => <FaqList key={v.id} data={v}/>);

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