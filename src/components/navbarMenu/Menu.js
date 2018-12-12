import React, { Component } from 'react';

import MenuItem from './MenuItem'
import MenuData from './MenuData'

class Menu extends Component {

    render() {
        const items = MenuData.map((item, index) => {
            return <MenuItem
                key={item.id}
                notification={item.notification}
                icon={item.icon}
            />
        })
        return (
            <ul className="navbar-nav">
                {items}
            </ul>
        );
    }
}
export default Menu;