import React from 'react';

export default function HotelFaq() {
    return (
        <div className="tab-pane fade" id="hotel-faqs">
            <h2>Frquently Asked Questions</h2>
            <div className="topics">
                <ul className="check-square clearfix">
                    <li className="col-sm-6 col-md-4"><a href="#">address &amp; map</a></li>
                    <li className="col-sm-6 col-md-4"><a href="#">messaging</a></li>
                    <li className="col-sm-6 col-md-4"><a href="#">refunds</a></li>
                    <li className="col-sm-6 col-md-4"><a href="#">pricing</a></li>
                    <li className="col-sm-6 col-md-4 active"><a href="#">reservation requests</a></li>
                    <li className="col-sm-6 col-md-4"><a href="#">your reservation</a></li>
                </ul>
            </div>
            <p>Maecenas vitae turpis condimentum metus tincidunt semper bibendum ut orci. Donec eget accumsan est. Duis laoreet sagittis elit et vehicula. Cras viverra posuere condimentum. Donec urna arcu, venenatis quis augue sit amet, mattis gravida nunc. Integer faucibus, tortor a tristique adipiscing, arcu metus luctus libero, nec vulputate risus elit id nibh.</p>
            <div className="toggle-container">
                <div className="panel style1 arrow-right">
                    <h4 className="panel-title">
                        <a className="collapsed" href="#question1" data-toggle="collapse">How do I know a reservation is accepted or confirmed?</a>
                    </h4>
                    <div className="panel-collapse collapse" id="question1">
                        <div className="panel-content">
                        </div>
                    </div>
                </div>
                <div className="panel style1 arrow-right">
                    <h4 className="panel-title">
                        <a className="collapsed" href="#question2" data-toggle="collapse">What do I do after I receive a reservation request from a guest?</a>
                    </h4>
                    <div className="panel-collapse collapse" id="question2">
                        <div className="panel-content">
                            <p>Sed a justo enim. Vivamus volutpat ipsum ultrices augue porta lacinia. Proin in elementum enim. <span className="skin-color">Duis suscipit justo</span> non purus consequat molestie. Etiam pharetra ipsum sagittis sollicitudin ultricies. Praesent luctus, diam ut tempus aliquam, diam ante euismod risus, euismod viverra quam quam eget turpis. Nam <span className="skin-color">tristique congue</span> arcu, id bibendum diam. Ut hendrerit, leo a pellentesque porttitor, purus arcu tristique erat, in faucibus elit leo in turpis vitae luctus enim, a mollis nulla.</p>
                        </div>
                    </div>
                </div>
                <div className="panel style1 arrow-right">
                    <h4 className="panel-title">
                        <a className href="#question3" data-toggle="collapse">How much time do I have to respond to a reservation request?</a>
                    </h4>
                    <div className="panel-collapse collapse in" id="question3">
                        <div className="panel-content">
                            <p>Sed a justo enim. Vivamus volutpat ipsum ultrices augue porta lacinia. Proin in elementum enim. <span className="skin-color">Duis suscipit justo</span> non purus consequat molestie. Etiam pharetra ipsum sagittis sollicitudin ultricies. Praesent luctus, diam ut tempus aliquam, diam ante euismod risus, euismod viverra quam quam eget turpis. Nam <span className="skin-color">tristique congue</span> arcu, id bibendum diam. Ut hendrerit, leo a pellentesque porttitor, purus arcu tristique erat, in faucibus elit leo in turpis vitae luctus enim, a mollis nulla.</p>
                        </div>
                    </div>
                </div>
                <div className="panel style1 arrow-right">
                    <h4 className="panel-title">
                        <a className="collapsed" href="#question4" data-toggle="collapse">Why can’t I call or email hotel or host before booking?</a>
                    </h4>
                    <div className="panel-collapse collapse" id="question4">
                        <div className="panel-content">
                        </div>
                    </div>
                </div>
                <div className="panel style1 arrow-right">
                    <h4 className="panel-title">
                        <a className="collapsed" href="#question5" data-toggle="collapse">Am I allowed to decline reservation requests?</a>
                    </h4>
                    <div className="panel-collapse collapse" id="question5">
                        <div className="panel-content">
                        </div>
                    </div>
                </div>
                <div className="panel style1 arrow-right">
                    <h4 className="panel-title">
                        <a className="collapsed" href="#question6" data-toggle="collapse">What happens if I let a reservation request expire?</a>
                    </h4>
                    <div className="panel-collapse collapse" id="question6">
                        <div className="panel-content">
                        </div>
                    </div>
                </div>
                <div className="panel style1 arrow-right">
                    <h4 className="panel-title">
                        <a className="collapsed" href="#question7" data-toggle="collapse">How do I set reservation requirements?</a>
                    </h4>
                    <div className="panel-collapse collapse" id="question7">
                        <div className="panel-content">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
