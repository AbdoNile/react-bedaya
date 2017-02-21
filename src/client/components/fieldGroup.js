import React from 'react';
import FieldEditor from '../components/fieldEditor';
import FieldMetaData from '../services/fieldData';

class FieldGroup extends React.Component {
  constructor() {
    super();
  }

  render() {
    const fields = this.state.fields.map(function(field)  {
     
       return <FieldEditor field={field} />
    });
    return <div>{fields}</div>  ;
  }

  componentWillMount() {
     var fieldMetaData = new FieldMetaData();
    this.setState({ fields: fieldMetaData.CouncilTaxFields  });
  }
}

export default FieldGroup;
