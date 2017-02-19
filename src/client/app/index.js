import React from 'react';
import {render} from 'react-dom';
import FieldGroup from '../components/fieldGroup';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class App extends React.Component {
    render () {
      return <FieldGroup />;y
    }
}

render( <App />, document.getElementById( 'app' ) );
 