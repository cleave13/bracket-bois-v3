
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import SingleCourse from './pages/SingleCourse';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={<Home />} 
          />
          <Route 
            path="/Login" 
            element={<Login />} 
          />
          <Route 
            path="/Profile" 
            element={<Profile />} 
          />
          <Route 
            path="/Signup" 
            element={<Signup />} 
          />
          <Route 
            path="/SingleCourse/:id" 
            element={<SingleCourse />} 
          />
        </Routes>
      
      </Router>
    </ApolloProvider>
  );
}

export default App;
