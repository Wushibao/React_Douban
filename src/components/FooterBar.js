import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './RouterItem/Home'
import Book from './RouterItem/Book'
import Group from './RouterItem/Group'
import Fair from './RouterItem/Fair'
import Mine from './RouterItem/Mine'
const FooterBar = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/Book">书影音</Link>
                </li>
                <li>
                    <Link to="/Group">小组</Link>
                </li>
                <li>
                    <Link to="/Fair">市集</Link>
                </li>
                <li>
                    <Link to="/Mine">我的</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Book" component={Book} />
                <Route exact path="/Group" component={Group} />
                <Route exact path="/Fair" component={Fair} />
                <Route exact path="/Mine" component={Mine} />
            </Switch>

        </div>
    </Router>
)

export default FooterBar;