import React, { Component } from 'react';
// initialized the elements
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      totalChange: 0,
      twenties: 0,
      tens: 0,
      fives:0,
      dollars: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    }

   this.calculateChange = this.calculateChange.bind(this);
   this.handleChange = this.handleChange.bind(this);
  }

  calculateChange(event) {
    let due = this.state.amountDue;
    let received = this.state.amountReceived;
    let change = (this.state.totalChange) = (received - due).toFixed(2);
   
     this.setState({[event.target.name]: change});
      console.log(change + 'change');

    
      var twenties = 20 ;
        this.state.twenties = twenties = Math.floor(change / 20);
          var remainder = (((change - 20 * twenties).toFixed(2))); 
    
      var tens = 10 ;
        this.state.tens = tens = Math.floor(remainder / 10);
          remainder -= tens * 10;

      var fives = 5 ;
        this.state.fives = fives = Math.floor(remainder / 5);
          remainder -= fives * 5;    

      var dollars = 1 ;
        this.state.dollars = dollars = Math.floor(remainder / 1);
          remainder = ((remainder - dollars).toFixed(2)) * 100;
      
      var quarters = 25;
        this.state.quarters = quarters = Math.floor(remainder / 25);
          remainder -= (quarters * 25);

      var dimes = 10;
        this.state.dimes = dimes = Math.floor(remainder / 10);
          remainder -= (dimes * 10);

      var nickels = 5;
        this.state.nickels = nickels = Math.floor(remainder / 5);
          remainder -= (nickels * 5);
      
      var pennies = 1;
        this.state.pennies = pennies = Math.floor(remainder / 1);
  
          console.log(twenties + ' twenties');
          console.log(tens + ' tens');
          console.log(dollars + ' dollars');
          console.log(quarters + ' quarters');
          console.log(dimes + ' dimes');
          console.log(nickels + ' nickels')
          console.log(pennies + ' pennies');
  }
  
  handleChange(event) {
  this.setState({[event.target.name]: event.target.value})
  }
  
// need to update the html to pass the neccessary test

  render() {
    return (
       <div className='container'>
         <div className='row'>
          <div className='col-sm-4'>
           <h3>Change Calculator</h3>
            <input type="number" name="amountDue" id="amount due" placeholder='due' value={this.state.amountDue} onChange={this.handleChange} />
            <input type="number" name='amountReceived' id='amount received' placeholder='received' value={this.state.amountReceived} onChange={this.handleChange} />
            <button className='btn btn-primary' name='calculate change' onClick={this.calculateChange}>calculate</button>
              <div className='col-8'>
                <div className='well'>
                  <h1>change</h1>
                  <p className='change'>{this.state.totalChange}</p>
                </div>
                <div className='well'>
                  <p>twenties</p>
                  <p className='change'>{this.state.twenties}</p>
                </div>
                <div className='well'>
                  <p>tens</p>
                  <p className='change'>{this.state.tens}</p>
                </div> 
                <div className='well'>
                  <p>fives</p>
                  <p className='change'>{this.state.fives}</p>
                </div>
                <div className='well'>
                  <p>dollars</p>
                  <p className='change'>{this.state.dollars}</p>
                </div>
                <div className='well'>
                  <p>quarters</p>
                  <p className='change'>{this.state.quarters}</p>
                </div>
                <div className='well'>  
                  <p>dimes</p>
                  <p className='change'>{this.state.dimes}</p>
                </div>  
                <div className='well'>
                  <p>nickels</p>
                  <p className='change'>{this.state.nickels}</p>
                </div> 
                <div className='well'> 
                  <p>pennies</p>
                  <p className='change'>{this.state.pennies}</p>
                </div>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
