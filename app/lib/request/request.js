import superagent from 'superagent-use'
import prefix from 'superagent-prefix'

const requestPrefix = prefix('')

superagent.use(requestPrefix)

export default superagent
