import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CarouselItem extends React.Component {
    render(props) {
        let notification = null;
        if (this.props.notification.length) {
            notification = <span className="fa-layers-counter">{this.props.notification}</span>
        }
        return (
            <li className="nav-item" key={this.key}>
                <a className="nav-link" href="#">
                    <span className="fa-layers fa-fw">
                        <FontAwesomeIcon className="fas fa-lg" icon={this.props.icon} />
                        {notification}
                    </span>
                </a>
            </li>
        );
    }
}
export default CarouselItem;