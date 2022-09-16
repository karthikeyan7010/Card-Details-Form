import React from 'react';

class Table extends React.Component {

  render() {
    const items = this.props.items;
    return (
      <div id="Table"  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50vh',
      }}>
        <table>
          <tbody>
            {
          items.map((item, i) =>
          <tr key={i}>
                  <td>FirstName:{item.firstname}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>LastName:{item.lastname}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>EmailID:{item.emailid}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>MobileNumber{item.mobilenum}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>CreditCard{item.credit}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>CVV{item.cvv}</td>&nbsp;&nbsp;&nbsp;&nbsp;
                  <td>Month&Year{item.month}/{item.year}</td>&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={e =>this.props.handleFormEdit(item.id)}>
                Edit
              </button>
            </tr> )
        }
          </tbody>
        </table>
      </div>
    );
  }
}
export default Table;