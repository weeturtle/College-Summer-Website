import './App.css';
import ROUTES from './app/routes';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/Home/homePage';
import { ShopPage } from './pages/Shop/shopPage';
import { AboutPage } from './pages/About/aboutPage';
import { BlogPage } from './pages/Blog/blogPage';
import { ErrorPage } from './pages/Error/errorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to={ROUTES.homeRoute()} />
          </Route>
          <Route path={ROUTES.homeRoute()} component={HomePage}/>
          <Route path={ROUTES.shopRoute()} component={ShopPage} />
          <Route path={ROUTES.aboutUsRoute()} component={AboutPage} />
          <Route path={ROUTES.blogsRoute()} component={BlogPage} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
