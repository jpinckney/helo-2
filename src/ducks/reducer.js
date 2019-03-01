const initialState = {
  username: '',
  password: '',
  id: 0,

}

// * ACTION TYPES

const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const ACTION_BUILDER = 'ACTION_BUILDER'

// * ACTION CREATORS

export function update_username(username) {
  console.log(username)
  return {
    type: UPDATE_USERNAME,
    payload: username
  }
}


export function update_password(password) {
  console.log(password)
  return {

    type: UPDATE_PASSWORD,
    payload: password
  }
}

export function action_builder(user_id, username) {
  return {
    type: ACTION_BUILDER,
    payload1: user_id,
    payload2: username
  }
}

// * REDUCER

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case UPDATE_USERNAME:
      const { username } = payload
      return { ...state, username }
    case UPDATE_PASSWORD:
      const { password } = payload
      return { ...state, password }
    case ACTION_BUILDER:
      const { user_id } = payload
      return { ...state, user_id, username }
    default:
      return state
  }
}