import React, { Component } from 'react';

import Landing from '../../components/Landing/Landing';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Aux from '../../hoc/Aux/Aux';

class Portfolio extends Component {
    render() {
        return (
            <Aux>
                <Landing />
                <About />
                <Footer />
            </Aux>
        );
    }
}

export default Portfolio;