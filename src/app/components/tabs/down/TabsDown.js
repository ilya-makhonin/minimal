import React from 'react';
import ListTabs from '../ListTabs';
import TabDown from './TabDown';

import apple from '../../../images/down_banner/tabs/apple.png';
import basket from '../../../images/down_banner/tabs/basket.png';
import lock from '../../../images/down_banner/tabs/lock.png';
import power from '../../../images/down_banner/tabs/power.png';
import search from '../../../images/down_banner/tabs/search.png';
import star from '../../../images/down_banner/tabs/star.png';
import comp from './../../../images/down_banner/comp.png';


export default function(props) {
    $(document).ready(function () {
        $('.list_tab_down').on('click', function () {
            $('.active_tab_down').removeClass('active_tab_down');
            $($('.content_tab_down')[$(this).index()]).addClass('active_tab_down');
        });
    });

    return (
        <section className="tabs_down">
            <ul className="wrapperTabsDownList" >
                <ListTabs icon={search} className="list_tab_down"/>
                <ListTabs icon={power} className="list_tab_down"/>
                <ListTabs icon={apple} className="list_tab_down"/>
                <ListTabs icon={basket} className="list_tab_down"/>
                <ListTabs icon={lock} className="list_tab_down"/>
                <ListTabs icon={star} className="list_tab_down"/>
            </ul>
            <div className="wrapperTabsDownContent">
                <TabDown className="content_tab_down active_tab_down" image={comp}/>
                <TabDown className="content_tab_down" image="#"/>
                <TabDown className="content_tab_down" image="#"/>
                <TabDown className="content_tab_down" image="#"/>
                <TabDown className="content_tab_down" image="#"/>
                <TabDown className="content_tab_down" image="#"/>
            </div>
        </section>
    );
}
