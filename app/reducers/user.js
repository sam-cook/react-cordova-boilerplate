export default function user(state, action) {
  state = state || {
    loading: false,
    error: null,
    authenticated: false
  }

  switch (action.type) {
    case 'USER_LOGIN':
    return Object.assign({}, state, {
      loading: true
    })

    case 'USER_LOGIN_SUCCESS':
    return Object.assign({}, state, {
      loading: false,
      authenticated: true,
      error: null,
      ...action.result
    })

    case 'USER_LOGIN_FAILURE':
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })

    default:
    return state
  }
}
