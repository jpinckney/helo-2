

module.exports = {
  register: async (req, res, next) => {
    const { username, password } = req.body
    const { session } = req
    const db = req.app.get('db')
    let existingUser = await db.find_user({ username, password })
    if (existingUser[ 0 ]) {
      return res.status(200).send({
        loggedIn: false, message: 'username has been taken'
      })
    } else {
      let newUser = await db.register_user({ username, password })
      session.user = newUser
      console.log({ username, password })
    
    }
  }
}