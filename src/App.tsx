import './App.css';
import ROUTES from './app/routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const tempComp: React.FC = () => {
  return(
    <h1>Temp Component</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={ROUTES.homeRoute()} component={tempComp}/>
          <Route path={ROUTES.shopRoute()} component={tempComp} />
          <Route path={ROUTES.aboutUsRoute()} component={tempComp} />
          <Route path={ROUTES.blogsRoute()} component={tempComp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
