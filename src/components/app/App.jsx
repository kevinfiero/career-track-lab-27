import React from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import AllCharacters from '../characters/AllCharacters';
import CharacterDetails from '../characters/CharacterDetails';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route 
            path="/" 
            exact
            render={(routerProps) => <AllCharacters {...routerProps} />} 
          />
          <Route 
            path="/character/:id" 
            exact
            render={(routerProps) => <CharacterDetails {...routerProps} />} 
          />
        </Switch>
      </Router>
    </div>
  );
}
