import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import View from './pages/View';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/view" component={View} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;