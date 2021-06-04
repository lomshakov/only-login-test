import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import NormalRoute from "./routes/NormalRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import {Layout} from "./components/common/Layout";
import {LoginPage} from "./components/LoginPage/LoginPage";
import {ProfilePage} from "./components/ProfilePage/ProfilePage";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to="/login"/>
                    </Route>
                    <NormalRoute path="/login" layout={Layout} component={LoginPage}/>
                    <ProtectedRoute path="/profile" layout={Layout} component={ProfilePage}/>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;