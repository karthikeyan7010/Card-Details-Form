import React from 'react';

class Form extends React.Component { 
  render() {
    return (
      <div id="Form">
        <u><h3>FORM</h3></u>
        <form onSubmit={this.props.handleFormSubmit}>
        <span><label htmlFor="firstname">
          Firstname&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="firstname" placeholder='Firstname' value={this.props.newFirstname} required
            type="text" name="firstname"
            onChange={this.props.handleInputChange} />
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label for="Lastname">
          Lastname&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="text" placeholder='Lastname' value={this.props.newLastname} required
            type="text" name="lastname"
            onChange={this.props.handleInputChange} /><br/><br/>
          </label></span>
          <span>  <label for="emailid">
          Emailid&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="emailid" placeholder='Emailid' value={this.props.newemailid} required
            type="email" name="emailid"
            onChange={this.props.handleInputChange} />
          </label>&nbsp;&nbsp;&nbsp;&nbsp;
          <label for="emailid">
          Mobilenumber&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="mobilenum" placeholder='Mobilenumber'minlength="0" maxlength="10" value={this.props.newmobilenumber} required
            type="number" name="mobilenum"
            onChange={this.props.handleInputChange} /><br/><br/>
          </label> </span>
          <label for="ccn">Credit Card Number:</label>&nbsp;&nbsp;&nbsp;&nbsp;
          <input id="credit" type="tel" inputmode="numeric" name='credit' value={this.props.newcredit} required pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"  onChange={this.props.handleInputChange}/>&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
          <label for="emailid">
            CVV&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="password" name="cvv" value={this.props.newcvv} placeholder="000" size="1" minlength="3" maxlength="3" onChange={this.props.handleInputChange}/>
            <br/><br/>
            Month valid&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="expiration">
        <input type="text" name="month" placeholder="MM" maxlength="2" size="2"required pattern="[0-12\s]{0,12}" value={this.props.newmonth}onChange={this.props.handleInputChange}  />
        <span>/</span>
        <input type="text" name="year" placeholder="YY" maxlength="2" size="2"value={this.props.newyear}onChange={this.props.handleInputChange}  />
    </span>
          </label><br/><br/>
          <button type="submit" value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;