
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

const client = new ApolloClient({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          />
          <Route 
            path="/login" 
            element={<Login />}
          />
          <Route 
            path="/signup" 
            element={<Signup />}
          />
          <Route 
            path="/profile"
            element={<Profile />}
          />
        </Routes>
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
