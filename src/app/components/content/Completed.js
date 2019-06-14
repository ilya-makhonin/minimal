import React from 'react';
import arrows from './../../images/completed/arrows.png';


export default function(props) {
    return (
        <section className="completed">
            <div className="completed_text">
                <p className="text">
                    <span className="text_bold">60%</span>
                    <br/>
                    Of project Completed
                </p>
            </div>
            <div className="completed_arrows">
                <img src={arrows} alt="Arrows img"/>
            </div>
        </section>
    );
}
