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
        <AllCharacters />
        <Switch>
          <Route 
            path="/character" 
            exact
            render={(routerProps) => <CharacterDetails {...routerProps} />} 
          />
        </Switch>
      </Router>
    </div>
  );
}
