const successData = {
    token: 'ABCDEGH123123',
    profile: {
      id: 'someuniqueid',
      name: 'Mr T Test',
      avatar: 'images.s3bucket.co.uk/avatar/someuniqueid.png',
      email: 'test@test.com',
      landline: '01303000000',
      mobile: '07800000000',
      address: {
        address0: '1 The Road',
        address1: '',
        town: 'Road',
        county: 'Roading',
        postcode: 'TH3 40AD'
      }
    }
  }

const user = {
  login: (username, password) => {
    return (dispatch) => {
      // Initial action, we can show the user a spinner, to indicate something is happening.
      dispatch({ type: 'USER_LOGIN' })
      // Login failed? Lets send a failure action
      if(password !== 'password') return dispatch({ type: 'USER_LOGIN_FAILURE', error: 'Incorrect password.' })
      // Otherwise, lets tell them it was a success!
      dispatch({ type: 'USER_LOGIN_SUCCESS', result: successData })
    }
  }
}

export default user
