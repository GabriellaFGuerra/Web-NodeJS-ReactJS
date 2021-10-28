import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home';
import Students from './pages/Students';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/alunos" exact component={Students} />
        </Switch>
    );
}

export default Routes;