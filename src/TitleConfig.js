
import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class TitleConfig extends Component {
    render() {
        return (
            <Helmet>
                <meta charSet="utf-8" />
                <title>viaworkTest</title>
                <meta name="description" content="viaworkTest for frontend developer" />
            </Helmet>
        );
    }
}

export default TitleConfig;