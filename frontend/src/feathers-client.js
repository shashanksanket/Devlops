import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import auth from '@feathersjs/authentication-client'
import { iff, discard } from 'feathers-hooks-common'


const hostprefix = window.location.hostname.split('.')[0];
let apiUrl = ''

if (hostprefix!='localhost'){
  apiUrl = 'http://13.233.121.232'

}else{
  apiUrl = 'http://localhost:3030'
  }
  

// const socket = io(apiUrl, {transports: ['websocket']})

// Connect to a different URL
const restClient = rest(apiUrl)

const feathersClient = feathers()
  .configure(restClient.fetch(window.fetch.bind(window)))
  .configure(auth({ storage: window.localStorage, path: '/api/authentication' }))
  .hooks({
    before: {
      all: [
        iff(
          context => ['create', 'update', 'patch'].includes(context.method),
          discard('__id', '__isTemp')
        )
      ]
    }
  })

export default feathersClient
