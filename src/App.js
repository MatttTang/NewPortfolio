import './App.css';
import {motion} from 'framer-motion';
import Header from './Modules/Header.js'
import './styling/MainPage.css'
import {Route, Switch, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Home from './Modules/Home';
import About from './Modules/About';
import Work from './Modules/Work';

function App() {
  var location = useLocation();
  return (
    <div className="App">
      <motion.div>
        <Header />
      </motion.div>

    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/" component={Home}/>
        <Route  path="/About" component={About} />
        <Route  path="/Work" component={Work} />
      </Switch>
    </AnimatePresence>

    </div>
  );
}

export default App;
