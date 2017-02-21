import React from 'react';
import SideNavigator from "./sideNavigator";
import MainTheatre from "./mainTheatre";
import TopNav from "./topNav";
class TopContainer extends React.Component {
 
  render() {
    return (    
    <div>
    <TopNav />

    <div className="container-fluid">
      <div className="row">
        <SideNavigator />
        
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
         
         {this.props.children}
        </div>
      </div>
    </div>
    </div>)
    ;
  }

  
}

export default TopContainer;
