import {Button} from 'blueprint-react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { ThemeManager } from "@bui/theming";
import Slider from '@bui/material/Slider';
import Login from 'components/Login';
import React from 'react';
import AdminHome from 'components/pages/home/AdminHome';
import UserHome from 'components/pages/home/UserHome'
import Testing from 'components/pages/testing/Testing';
import Register from 'components/pages/registration/Registration';
import './App.scss';
//
// function App() {
//     React.useEffect(() => {
//         fetch('/api/aaaLogin.json')
//             .then(response => response.json())
//             .then(data => console.log(data));
//     }, []);
//     return <Button onClick={() => (console.log('Hello!'))}>Hello 世界!</Button>;
// }


function App() {
    return (
    <div>
        <Router>
            <Switch>
                <Route exact path ='/'>
                    <Login/>
                </Route>
                <Route path ="/register">
                    <Register/>
                </Route>
                    <Route path = "/home/user">
                        <UserHome/>
                    </Route>
                    <Route path = "/home/admin">
                        <AdminHome/>
                    </Route>
                    <Route path = "/testing">
                        <Testing/>
                    </Route>
            </Switch>
        </Router>
    </div>
    )
}

export default App;