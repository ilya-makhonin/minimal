import React from 'react';

import basket from '../../../images/top_banner/basket.png';
import world from '../../../images/top_banner/world.png';

export default function(props) {
    return (
        <div className={props.className}>
            <div className="images_product_top">
                <img src={props.image} alt="Image Product"/>
            </div>
            <div className="description_product_top">
                <div className="emblem_product_top">
                    <img src={world} alt="World pic"/>
                    <span className="emblem_text">App of the year</span>
                </div>
                <article className="desc_product_top">
                    <h2 className="header_product_top">My apps shoecase</h2>
                    <p className="text_product_top">
                        Lorem ipsum dolor sit amet, consectetur...
                    </p>
                </article>
                <button className="btn_product_top">
                    <div className="btn_top_image">
                        <img src={basket} alt="Basket image"/>
                    </div>
                    <span className="btn_top_text">Buy now</span>
                </button>
            </div>
        </div>
    );
}
