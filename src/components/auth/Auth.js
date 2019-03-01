import React, { Component } from 'react'
import { connect } from 'react-redux'
import { update_username, update_password, action_builder } from '../../ducks/reducer'
import axios from 'axios'

class Auth extends Component {

  async onRegisterClick() {
    try {
      let res = await axios.post('/auth/register', update_password, update_username)

    } catch (error) {
      this.props.history.push('/dashboard')
    }
  }



  render() {
    console.log(this.props)
    return (
      <div>
        <input
          onChange={ (e) => this.props.update_username(e.target.value) }
          placeholder='username'></input>
        <input
          onChange={ (e) => this.props.update_password(e.target.value) }
          placeholder='password'></input>
        <button>Login</button>
        <button>Register</button>
      </div>
    )
  }
}


const mapDistpatchToProps = () => {
  return {
    action_builder, update_username, update_password
  }
}


export default connect(null, mapDistpatchToProps)(Auth)