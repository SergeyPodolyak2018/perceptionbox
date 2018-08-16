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
    backgroundColor: 'rgb(212, 23, 127)',
    color: '#ffffff', 
    fontSize: '16px',
    fontWeight: '700',
  },
  fogot:{
    color: '#b5b5b5',
    textDecoration: 'underline',

  }
};

  




class Form extends Component {
 render () {
   return (
     <form style={styles.mainForm}>
     <label htmlFor='name' style={styles.lable}>Username</label>
     <input type='text' name='name' style={styles.formFields}/>
     <label htmlFor='password' style={styles.lable}>Password</label>
     <input type='password' style={styles.formFields}
       name='password' />
     <div style={styles.send}>
       <button type='submit' style={styles.formButton}>
         Отправить
       </button> 
       <a href='#' style={styles.fogot}>Fogot password?</a>
     </div>
   </form>
   )
 }
}
export default Form;