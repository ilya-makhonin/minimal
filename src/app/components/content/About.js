import React from 'react';
import app from './../../images/about/app.png';


export default function(props) {
    return (
        <section className="about">
            <article className="about_article_block">
                <h2 className="about_header">
                    About minimal
                </h2>
                <p className="about_content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </article>
            <img src={app} alt="APP image"/>
        </section>
    );
}
