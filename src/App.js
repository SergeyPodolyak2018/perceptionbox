import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

const styles = {
  app: {
    height: '100vh',
    backgroundColor: '#cccccc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',    
  },

  logotip:{    
    display: 'flex',    
    alignItems: 'center',
    justifyContent: 'center', 
    marginBottom:'30px', 
  },
  circl:{
    width:'100px',
    height:'100px',
    borderRadius:'50%',
    backgroundColor:'grey',
    marginRight: '20px',    
  },
  textContainer:{
    textAlign: 'center',
    color:'#0d4a80',
  },
  logotextbig:{
    fontSize: '50px',
    fontWeight: '700',
  },
  logotextsmol:{
    fontSize: '30px',
  },
  card:{
    width:'550px',
    minHeight:'200px',
    padding:'30px',
    backgroundColor:'#ffffff',
    display: 'flex',    
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column', 
    borderRadius:'5px',
    transition: '0.2s',
    boxShadow: '', 
  },
  hover:{
    boxShadow: '0 10px 10px rgba(0,0,0,0.5)',
  },
  normal:{
    boxShadow: '',
  },
  
};



class App extends Component {
    constructor(props){
      super(props)    
      this.state={
        hover:false,
      }
    }
    onMouseEnterHandler=()=>{
        this.setState({
            hover: true
        });
        console.log('enter');
    }
    onMouseLeaveHandler=()=>{
        this.setState({
            hover: false
        });
        console.log('leave');
    }
  render() {
    let inner = styles.normal;
    if(this.state.hover) {
        inner = styles.hover;
        console.log(inner);
    }
    console.log(styles.card);
    return (
      <div className="App" style={styles.app}>
        <div style={styles.logotip}>
          <div style={styles.circl}></div>
          <div style={styles.textContainer}>
            <p style={styles.logotextbig}>swedavia</p>
            <p style={styles.logotextsmol}>svedish airports</p>
          </div>
        </div>
        <div style={Object.assign({}, styles.card, inner)} 
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}>
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
