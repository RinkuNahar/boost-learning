import React from 'react';
import man from '../../../images/review/man.png';
import './Review.css'
import woman from '../../../images/review/woman.png'
const Review = () => {
    return (

        <div id='reviews'>
            <div>
                <h1 className='text-danger mt-4 mb-4'>Reviews</h1>
                </div>
            <div className=' review-layout w-100 container mb-4'>
                <div className='d-flex review'>
                    <div>
                        <img className='review-img' src={man} alt="" />
                        <h4 className='text-center'> Mr. BayMax</h4>
                    </div>
                    <div className='style-div ms-4'></div>
                    <div className='py-4 mt-4 text-start ps-4' >
                        <p>You are the best teacher I have seen in my entire life.I learnt Physics from you.You always teach us practically.And that's why we could remember everything. And still now I can remember these things.Thank you so much for teaching us.</p>
                    </div>
                </div>
                <div className='d-flex review'>
                    <div>
                        <img className='review-img-woman' src={woman} alt="" />
                        <h4 className='text-center'> Mrs. Scelton </h4>
                    </div>
                    <div className='style-div ms-4'></div>
                    <div className='py-4 mt-4 text-start ps-4'>
                        <p>I am a working woman. So I couldn't give my full care to my children.I was so worried about her that in my busy schedule how can I give her any kind of lesson. But after I found u and giving my child to you I think I have taken the best decision ever in my life. Now she always wants to go to you and wants to learn. Thank you so much for helping me like this.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;