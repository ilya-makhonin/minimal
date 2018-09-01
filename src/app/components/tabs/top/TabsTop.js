import React from 'react';
import TabTop from './TabTop';
import ListTabs from './ListTabs';

import mac from './../../../images/top_banner/tabs/mac.png';
import phone from './../../../images/top_banner/tabs/phone.png';
import pad from './../../../images/top_banner/tabs/pad.png';

import iphone from './../../../images/top_banner/iphone.png';

export default class TabsTop extends React.Component {
    render() {
        $(document).ready(function () {
            $('.list_tab_top').on('click', function () {
                $('.active_list_top').removeClass('active_list_top');
                $(this).addClass('active_list_top');
                $('.active_tab_top').removeClass('active_tab_top');
                $($('.content_tab_top')[$(this).index()]).addClass('active_tab_top');
            });
        });

        return (
            <section className="tabs_top">
                <ul className="wrapperTabsTopList">
                    <ListTabs icon={phone} className="list_tab_top active_list_top"/>
                    <ListTabs icon={pad} className="list_tab_top"/>
                    <ListTabs icon={mac} className="list_tab_top"/>
                </ul>
                <div className="wrapperTabsTopContent">
                    <TabTop className="content_tab_top active_tab_top" image={iphone}/>
                    <TabTop className="content_tab_top" image="#"/>
                    <TabTop className="content_tab_top" image="#"/>
                </div>
            </section>
        );
    }
}