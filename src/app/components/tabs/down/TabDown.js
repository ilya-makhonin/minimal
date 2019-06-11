import React from 'react';

import shop from '../../../images/down_banner/shop_icon.png';

export default class TabDown extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="images_product_down">
                    <img src={this.props.image} alt="Product image"/>
                </div>
                <div className="description_product_down">
                    <article className="desc_product_down">
                        <h2 className="header_product_down">My apps shoecase</h2>
                        <p className="text_product_down">
                            Lorem ipsum dolor sit amet, consectetur...
                        </p>
                    </article>
                    <button className="btn_product_down">
                        <div className="btn_down_image">
                            <img src={shop} alt="Basket image"/>
                        </div>
                        <span className="btn_down_text">Buy now</span>
                    </button>
                </div>
            </div>
        );
    }
}