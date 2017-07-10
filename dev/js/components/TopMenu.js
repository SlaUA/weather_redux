import React from 'react';
import {NavLink} from 'react-router-dom';

export default class TopMenu extends React.Component {

    constructor(props) {

        super(props);

        this.links = [{
            text: 'Weather app',
            to: '/'
        }, {
            text: 'Drag and drop example',
            to: '/dnd'
        }];
    }

    render() {

        let links = this.links.map(
            (link, index)=>
                <NavLink key={index}
                         exact={link.exact || true}
                         activeClassName='active'
                         to={link.to}>
                    {link.text}
                </NavLink>
        );

        return (
            <div className="topMenuLinksWrapper">
                {links}
            </div>
        );
    }
}