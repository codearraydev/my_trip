import React from 'react';

export default function HotelReview() {
    return (
        <div className="tab-pane fade" id="hotel-reviews">
            <div className="intro table-wrapper full-width hidden-table-sms">
                <div className="rating table-cell col-sm-4">
                    <span className="score">3.9/5.0</span>
                    <div className="five-stars-container"><div className="five-stars" style={{ width: '78%' }} /></div>
                    <a href="#" className="goto-writereview-pane button green btn-small full-width">WRITE A REVIEW</a>
                </div>
                <div className="table-cell col-sm-8">
                    <div className="detailed-rating">
                        <ul className="clearfix">
                            <li className="col-md-6"><div className="each-rating"><label>service</label><div className="five-stars-container"><div className="five-stars" style={{ width: '78%' }} /></div></div></li>
                            <li className="col-md-6"><div className="each-rating"><label>Value</label><div className="five-stars-container"><div className="five-stars" style={{ width: '78%' }} /></div></div></li>
                            <li className="col-md-6"><div className="each-rating"><label>Sleep Quality</label><div className="five-stars-container"><div className="five-stars" style={{ width: '78%' }} /></div></div></li>
                            <li className="col-md-6"><div className="each-rating"><label>Cleanliness</label><div className="five-stars-container"><div className="five-stars" style={{ width: '78%' }} /></div></div></li>
                            <li className="col-md-6"><div className="each-rating"><label>location</label><div className="five-stars-container"><div className="five-stars" style={{ width: '78%' }} /></div></div></li>
                            <li className="col-md-6"><div className="each-rating"><label>rooms</label><div className="five-stars-container"><div className="five-stars" style={{ width: '78%' }} /></div></div></li>
                            <li className="col-md-6"><div className="each-rating"><label>swimming pool</label><div className="five-stars-container"><div className="five-stars" style={{ width: '78%' }} /></div></div></li>
                            <li className="col-md-6"><div className="each-rating"><label>fitness facility</label><div className="five-stars-container"><div className="five-stars" style={{ width: '78%' }} /></div></div></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="guest-reviews">
                <h2>Guest Reviews</h2>
                <div className="guest-review table-wrapper">
                    <div className="col-xs-3 col-md-2 author table-cell">
                        <a href="#"><img src="http://placehold.it/270x263" alt width={270} height={263} /></a>
                        <p className="name">Jessica Brown</p>
                        <p className="date">NOV, 12, 2013</p>
                    </div>
                    <div className="col-xs-9 col-md-10 table-cell comment-container">
                        <div className="comment-header clearfix">
                            <h4 className="comment-title">We had great experience while our stay and Hilton Hotels!</h4>
                            <div className="review-score">
                                <div className="five-stars-container"><div className="five-stars" style={{ width: '80%' }} /></div>
                                <span className="score">4.0/5.0</span>
                            </div>
                        </div>
                        <div className="comment-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        </div>
                    </div>
                </div>
                <div className="guest-review table-wrapper">
                    <div className="col-xs-3 col-md-2 author table-cell">
                        <a href="#"><img src="http://placehold.it/270x263" alt width={270} height={263} /></a>
                        <p className="name">David Jhon</p>
                        <p className="date">NOV, 12, 2013</p>
                    </div>
                    <div className="col-xs-9 col-md-10 table-cell comment-container">
                        <div className="comment-header clearfix">
                            <h4 className="comment-title">I love the speediness of their services.</h4>
                            <div className="review-score">
                                <div className="five-stars-container"><div className="five-stars" style={{ width: '64%' }} /></div>
                                <span className="score">3.2/5.0</span>
                            </div>
                        </div>
                        <div className="comment-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        </div>
                    </div>
                </div>
                <div className="guest-review table-wrapper">
                    <div className="col-xs-3 col-md-2 author table-cell">
                        <a href="#"><img src="http://placehold.it/270x263" alt width={270} height={263} /></a>
                        <p className="name">Kyle Martin</p>
                        <p className="date">NOV, 12, 2013</p>
                    </div>
                    <div className="col-xs-9 col-md-10 table-cell comment-container">
                        <div className="comment-header clearfix">
                            <h4 className="comment-title">When you look outside from the windows its breath taking.</h4>
                            <div className="review-score">
                                <div className="five-stars-container"><div className="five-stars" style={{ width: '76%' }} /></div>
                                <span className="score">3.8/5.0</span>
                            </div>
                        </div>
                        <div className="comment-content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" className="button full-width btn-large">LOAD MORE REVIEWS</a>
        </div>

    );
}
