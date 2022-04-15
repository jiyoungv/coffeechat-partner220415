import React from 'react';
import { Inners } from '../../styles/Common';
import { Reviews } from './Style';
import ReviewList from '../ReviewList';

const Review = () => {
    return (
        <Reviews>
            <Inners>
                <div className='review-tit'>
                    <h2>
                        커리어 커뮤니케이션 시장을<br/>
                        함께 혁신하는 커피챗 파트너들.
                    </h2> 
                </div>
                <ReviewList />
            </Inners>
        </Reviews>
    );
};

export default Review;