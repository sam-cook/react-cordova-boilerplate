import { hashHistory } from 'react-router'

const navigate = (route) => {
  return hashHistory.push(`/${route}`)
}

export default navigate
