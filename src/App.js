import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import AuthRoute from './util/AuthRoute';
import { AuthProvider } from './context/auth'

import 'semantic-ui-css/semantic.min.css';
import './App.css';

import MenuBar from "./components/MenuBar";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <AuthProvider><Router>
      <Container>
        <MenuBar />
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/register" component={Register} />
        <AuthRoute exact path="/login" component={Login} />
        <Route exact path="/posts/:postId" component={SinglePost} />
      </Container>
    </Router>
  </AuthProvider>
  );
}

export default App;
