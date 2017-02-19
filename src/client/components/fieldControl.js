import React from 'react';

class FieldControl extends React.Component {
 
  render() {
    console.log(this.props);
    let field = this.props.field;
     switch(field.datatype){
        case "string":
          return <input type="text" value="string"/>
          break;
        case "datetime":
          return <input type="text" value="date time"/>
          break;
          default:
          return <span>{field.datatype}</span>
          break;
     }
  }
}

export default FieldControl;
