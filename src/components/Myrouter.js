import React, { Component } from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import Homepage from './Home'
import Contact from './Contact'
import About from './About'
import {Route} from 'react-router-dom';

import ibnsinaSp from './Specialist/ibnsinaSp';

export default class Myrouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route  path="/contact" component={Contact}/>
                    <Route path="/about" component={About} />

                    <Route path="/ibnsinaSp" component={ibnsinaSp} />
                </Switch>
            </div>
        )
    }
}
