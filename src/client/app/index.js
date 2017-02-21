import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';


import TopContainer from '../layout/topContainer';
import ListFields from '../components/listFields';
import FieldGroup from '../components/fieldGroup';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/dashboard.css';



class App extends React.Component {
    render () {
     return       <Router history={hashHistory}>
         <Route path="/pages" component={TopContainer} >
         <IndexRoute component={FieldGroup} />
            <Route path="/list" name="list" component={ListFields} ></Route>
              <Route path="/edit/(:field_Id)" name="edit"  component={FieldGroup} ></Route>

              
          </Route>
     </Router> ;
    }
}

render( <App />, document.getElementById( 'app' ) );
 