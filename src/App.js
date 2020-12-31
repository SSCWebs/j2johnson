import React from 'react';
import './App.scss';
import './fireworks.scss';
import Menu from './components/navbar/nav';
import Home from './components/home/home';
import About from './components/about/about';
import RSVP from './components/rsvp/rsvp1';
import Registry from './components/registry/registry';
import Gallery from './components/gallery/gallery';
import Info from './components/info/info';
import TTD from './components/ttd/ttd';
import Admin from './components/admin/admin1';
import Footer from './components/footer/footer';
import { Switch, Route, useLocation } from 'react-router-dom';
import LoadingPage from './components/loadingPage/loadingPage';
import CovidFAQ from './components/covidFAQ/covidFAQ';


function App() {
  let location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <Menu />}
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/rsvp" component={RSVP} />
        <Route path="/registry" component={Registry} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/info" component={Info} />
        <Route path="/thingstodo" component={TTD} />
        <Route path="/covidfaq" component={CovidFAQ} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={LoadingPage} />
      </Switch>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;
