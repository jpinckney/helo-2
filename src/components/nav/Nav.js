import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


function Nav(props) {
  console.log(props.location)


  if (props.location !== '/') {
    return (
      <div>
        Nav
        <Link to='/dashboard'><button>Home</button></Link>
        <Link to='/new'><button>New Post</button></Link>
        <Link to='/'><button>Logout</button></Link>

      </div>
    )

  }

  return null
}


const mapStateToProps = reduxState => {
  return reduxState
}

export default withRouter(connect(mapStateToProps)(Nav))