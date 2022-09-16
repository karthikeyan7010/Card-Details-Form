import React from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';

var rootStyle = {
  backgroundColor : 'green',
  color : 'white',
  height : '100%'

}
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isUpdate:false,
      id:0,
      firstname: '',
      lastname: '',
      emailid: '',
      mobilenum:'',
      credit:'',
      cvv:'',
      month:'',
      year:'',
      items: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = this.state.items

    if(this.state.isUpdate) {
      items.map((item) =>{
      if(item.id===this.state.id) 
      {
        item.firstname= this.state.firstname
        item.lastname= this.state.lastname
        item.emailid= this.state.emailid
        item.mobilenum=this.state.mobilenum
        item.credit=this.state.credit
        item.cvv=this.state.cvv
        item.month=this.state.month
        item.year=this.state.year
      }
      })
    }
    else  {
      items.push({
        id: this.state.id,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        emailid: this.state.emailid,
        mobilenum:this.state.mobilenum,
        credit:this.state.credit,
        cvv:this.state.cvv,
        month:this.state.month,
        year:this.state.year,
      });
  
  }
  this.setState({
    items,
    id:this.state.id+1,
    firstname: '',
    lastname: '',
    emailid:'',
    mobilenum:'',
    credit:'',
    cvv:'',
    month:'',
    year:'',
    isUpdate:false,
  });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    })
  };

  handleFormEdit = (id) => { 
  let value = this.state.items.find((key)=>id===key.id) 
  this.setState({
    isUpdate:true,
    id:id,
    firstname: value.firstname,
    lastname:value.lastname,
    emailid:value.emailid,
    mobilenum:value.mobilenum,
    credit:value.credit,
    cvv:value.cvv,
    month:value.month,
    year:value.year,

  });
  console.log(value);
  }


  render() {
    return (
      <div className="App" style={rootStyle}>
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newFirstname={ this.state.firstname }
          newLastname={ this.state.lastname }
          newemailid={ this.state.emailid }
          newmobilenumber={ this.state.mobilenum }
          newcredit={ this.state.credit }
          newcvv={ this.state.cvv }
          newmonth={ this.state.month }
          newyear={ this.state.year }
           />
           <Table items={ this.state.items }
           handleFormEdit ={ this.handleFormEdit } 
           />
           
      </div>
    );
  }
}

export default App;