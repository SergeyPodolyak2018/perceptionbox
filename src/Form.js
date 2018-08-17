import React, { Component } from 'react';

const styles = {
  mainForm:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width:'100%',
  },  
  formFields:{
    width: '100%',
    height: '47px',
    border: '1px solid #e1e1e1',
    backgroundColor: '#fff',
    color: '#b5b5b5', 
    fontSize: '13px',
    fontWeight: '400', 
    marginBottom: '16px',
    padding: '0px 19px',
  },
  lable:{
    alignSelf:'flex-start'
  },
  send:{
    display: 'flex',    
    alignItems: 'center',
    justifyContent: 'space-between',
    width:'100%',   
  },
  formButton:{
    width: '175px',
    height: '55px',
    border: '1px solid rgb(212, 23, 127)',    
    color: '#ffffff', 
    fontSize: '16px',
    fontWeight: '700',
    borderRadius:'25px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  enable:{
    backgroundColor: 'rgb(212, 23, 127)',
    border: '1px solid rgb(212, 23, 127)',
  },
  disable:{
    backgroundColor:'rgb(128, 128, 128)',
    border: '1px solid rgb(128, 128, 128)',
  },
  fogot:{
    color: '#b5b5b5',
    textDecoration: 'underline',
  },
  welcome:{
    color: 'rgb(13, 74, 128)',
    fontSize: '35px',
    fontWeight: '700',
    marginBottom:'25px',
  },
  welcomeName:{
    color: 'rgb(13, 74, 128)',
    fontSize: '25px',
    fontWeight: '300',
    marginBottom:'25px',

  }
};

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      formErrors: {name: '', password: ''},
      nameValid: false,
      passwordValid: false,
      formValid: false,
      sendForm:false,
    }
  }
  
  render () {
    let inner;
    let inerwindow;
    if(this.state.formValid) {
      inner = styles.enable;        
    }else{
      inner = styles.disable; 
    } 
    if(this.state.sendForm) {
        inerwindow =<div style={styles.mainForm}>
                      <p style={styles.welcome}>Добро пожаловать</p>
                      <p style={styles.welcomeName}>{this.state.name}</p>
                    </div>       
    }else{
      inerwindow =<form style={styles.mainForm}>
                      <label htmlFor='name' style={styles.lable}>Username</label>
                      <input type='text' name='name' style={styles.formFields} onChange={this.handleUserInput} autoComplete="off"/>
                      <label htmlFor='password' style={styles.lable}>Password</label>
                      <input type='password' style={styles.formFields}
                        name='password' onChange={this.handleUserInput}/>
                      <div style={styles.send}>        
                        <button style={Object.assign({}, styles.formButton, inner)} disabled={!this.state.formValid} onClick={this.onButtonClick}>Отправить</button>
                        <a href='#' style={styles.fogot}>Fogot password?</a>
                      </div>
                  </form>    
    } 

    return (
      <div style={styles.mainForm}>
        {inerwindow}
      </div>
    )
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
  }

  onButtonClick = (e) => {    
    this.setState({sendForm: true});
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let passwordValid = this.state.passwordValid;
    switch(fieldName) {
      case 'name':
        nameValid = value.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i);
        fieldValidationErrors.name = nameValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.nameValid &&
                              this.state.passwordValid});
  }

}
export default Form;