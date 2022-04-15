import React, { useCallback, useState } from 'react';
import parse from 'html-react-parser';

const FaqList = ({ data }) => {
    const [open, setOpen] = useState(false);
    const onClick = useCallback(() => {
        setOpen(prev => !prev);
    }, []);

    return (
        <li className={open ? 'open' : ''}>
            <div className='faq-list-q'>
                <button type='button' onClick={onClick}>{data.question}</button>
            </div>
            <div className='faq-list-a'>
                <p>{parse(data.answer)}</p>
            </div>
        </li>
    );
};

export default FaqList;