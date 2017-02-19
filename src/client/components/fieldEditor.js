import React from 'react';
import FieldControl from '../components/fieldControl'; 

class FieldEditor extends React.Component {
 
  render() {
    
    return <p>{this.props.field.label} - <FieldControl field={this.props.field} /> </p>;
  }

  
}

export default FieldEditor;
