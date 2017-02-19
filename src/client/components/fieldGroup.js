import React from 'react';
import FieldEditor from '../components/fieldEditor';

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
    this.setState({ fields:  [
        {
            label : "Council Tax Number",
            datatype : "string"
        },
          {
            label : "Council Tax Address",
            datatype : "datetime"
        },  {
            label : "Council Tax Amount",
            datatype : "numbers"
        }
    ]  });
  }
}

export default FieldGroup;
