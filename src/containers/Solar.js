import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Spinner from '../components/UI/spinner/Spinner'
import './solar.css';

const HomePage = lazy(() => import('../components/homePage/HomePage'))
const Sun = lazy(() => import('../components/sun/Sun'))
const Mercury = lazy(() => import('../components/mercury/Mercury'))
const Venus = lazy(() => import('../components/venus/Venus'))
const Earth = lazy(() => import('../components/earth/Earth'))
const Mars = lazy(() => import('../components/mars/Mars'))
const Jupiter = lazy(() => import('../components/jupiter/Jupiter'))
const Saturn = lazy(() => import('../components/saturn/Saturn'))
const Uranus = lazy(() => import('../components/uranus/Uranus'))
const Neptune = lazy(() => import('../components/neptune/Neptune'))
const LoginPage = lazy(() => import('../components/loginPage/LoginPage'))
const Products = lazy(() => import('../components/products/Products'))
const AoutUs = lazy(() => import('../components/aboutUs/AboutUs'))
const NotFound = lazy(() => import('../components/notFound/NotFound'))



function Solar() {

  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>

          <Route path="/" exact render={() => (
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          )} />

          <Route path="/sun" render={() => (
            <Suspense fallback={<Spinner />}>
              <Sun />
            </Suspense>
          )} />

          <Route path="/mercury" render={() => (
            <Suspense fallback={<Spinner />}>
              <Mercury />
            </Suspense>
          )} />

          <Route path="/venus" render={() => (
            <Suspense fallback={<Spinner />}>
              <Venus />
            </Suspense>
          )} />

          <Route path="/earth" render={() => (
            <Suspense fallback={<Spinner />}>
              <Earth />
            </Suspense>
          )} />

          <Route path="/mars" render={() => (
            <Suspense fallback={<Spinner />}>
              <Mars />
            </Suspense>
          )} />

          <Route path="/jupiter" render={() => (
            <Suspense fallback={<Spinner />}>
              <Jupiter />
            </Suspense>
          )} />

          <Route path="/saturn" render={() => (
            <Suspense fallback={<Spinner />}>
              <Saturn />
            </Suspense>
          )} />

          <Route path="/uranus" render={() => (
            <Suspense fallback={<Spinner />}>
              <Uranus />
            </Suspense>
          )} />

          <Route path="/neptune" render={() => (
            <Suspense fallback={<Spinner />}>
              <Neptune />
            </Suspense>
          )} />

          <Route path="/login" render={() => (
            <Suspense fallback={<Spinner />}>
              <LoginPage />
            </Suspense>
          )} />

          <Route path="/products" render={() => (
            <Suspense fallback={<Spinner />}>
              <Products />
            </Suspense>
          )} />

          <Route path="/aboutUs" render={() => (
            <Suspense fallback={<Spinner />}>
              <AoutUs />
            </Suspense>
          )} />

          <Route exact render={() => (
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          )} />

        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

const mapState = state => {
  return {
    token: state.authReducer.token !== null
  }
}

export default connect(mapState)(Solar);
