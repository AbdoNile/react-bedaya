class FieldMetaData {
    get CouncilTaxFields () 
    { return [
        {
            Id : "123",
            label : "Council Tax sd",
            datatype : "string"
        },
          {
            label : "Council Tax Address",
            datatype : "datetime"
        },  {
            label : "Council Tax Amount",
            datatype : "numbers"
        }
    ];
    };
}

export default FieldMetaData;