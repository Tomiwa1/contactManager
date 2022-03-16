import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Contacts from './Components/contacts/Contacts';
import { Provider } from './context';
import Header from './Components/layout/Header';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';
import AddContact from './Components/contacts/AddContact';
import EditContacts from './Components/contacts/EditContacts';
import Test from './Components/test/Test';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header message={'Contact Manager'} />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
