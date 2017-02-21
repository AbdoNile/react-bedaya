import React from 'react';
import bootStrap from 'react-bootstrap'
import {Link} from 'react-router';

class SideNavigator extends React.Component {
 
  render() {
    return      <div className="col-sm-3 col-md-2 sidebar">
         
          <ul className="nav nav-sidebar">
         
         <li><Link to="edit" activeClassName="active">Edit</Link></li>
         <li><Link to="list" activeClassName="active">List</Link></li>
          </ul>
        
        </div>;
  }


}

export default SideNavigator;
