import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import RootLayout from './components/layout/RootLayout';
import Header from './components/layout/Header';
import Home from './components/views/Home';
import Exercises from './components/views/Exercises/Main/Exercises';
import Programs from './components/views/Programs';

import { useGetPrograms } from './hooks/useGetPrograms';
import { useGetWorkouts } from './hooks/useGetWorkouts';
import { useGetSessions } from './hooks/useGetSessions';

function App() {
  return (
    <RootLayout>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/programs">
            <Programs
              nextEndpoint="/workouts"
              useQuery={useGetPrograms}
            />
          </Route>
          <Route exact path="/workouts/:id">
            <Programs
              nextEndpoint="/sessions"
              useQuery={useGetWorkouts}
            />
          </Route>
          <Route exact path="/sessions/:id">
            <Programs
              nextEndpoint="/exercises"
              useQuery={useGetSessions}
            />
          </Route>
          <Route exact path="/exercises/:id/:slug">
            <Exercises />
          </Route>
        </Switch>
      </Router>
    </RootLayout>
  );
};

export default App;
