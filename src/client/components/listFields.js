import React from 'react';
import FieldMetaData from '../services/fieldData';
import {Link} from 'react-router';
import {Glyphicon, Button, ButtonToolbar } from 'react-bootstrap';
class ListFields extends React.Component { 
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
       const fields = this.state.fields.map(function(field)  {
     
       return  <tr>
                  <td>{field.Id}</td>
                  <td>{field.label}</td>
                  <td>{field.datatype}</td>
                  <td>
                    <ButtonToolbar>
                      <Link to="/edit"  query={{ field_Id: "hello" }} >
                   <Button bsStyle="primary" bsSize="small"><Glyphicon glyph="edit"></Glyphicon> Edit</Button>
                  </Link>
                   <Link 
                   to={  "/edit/" + field.Id }   >                   
                   <Button bsStyle="warning" bsSize="small">
                     <Glyphicon glyph="delete"></Glyphicon> Delete</Button>
                  </Link>
                  </ButtonToolbar>
    
                  </td>
                </tr>;
    });
   return   <div className="table-responsive">
            <table className="table table-striped">
            <thead>
                <tr>
                  <th>Field Id</th>
                  <th>Field Name</th>
                  <th>Data Type</th>
                  <th></th>
                 </tr>
              </thead>
              <tbody>
              
                  {fields}
              
               
              </tbody>
            </table>
          </div>;
    
  }

 componentWillMount() {
     var fieldMetaData = new FieldMetaData();
    this.setState({ fields: fieldMetaData.CouncilTaxFields  });
  }
}

export default ListFields;
