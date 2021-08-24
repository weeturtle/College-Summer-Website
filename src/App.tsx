import './App.css';
import ROUTES from './app/routes';
import styled from 'styled-components';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/Home/homePage';
import { ShopPage } from './pages/Shop/shopPage';
import { AboutPage } from './pages/About/aboutPage';
import { BlogPage } from './pages/Blog/blogPage';
import { ErrorPage } from './pages/Error/errorPage';
import { Header } from './Features/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from './Features/Item/itemSlice';
import { useEffect } from 'react';
import { selectIsBasket } from './Features/Basket/basketSlice';
import { Basket } from './Features/Basket/Basket';

const BasketSection = styled(Basket)`
z-index: 5;
background-color: white;
`

function App() {
  const dispatch = useDispatch();

  const isBasket: boolean = useSelector(selectIsBasket);

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Header />
        { isBasket && <BasketSection /> }
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
