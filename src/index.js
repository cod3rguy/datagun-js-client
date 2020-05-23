import io from 'socket.io-client'

const targets = {}

const datagun = {
  initialize: (apiKey) => { console.log('Datagun initialized.') },
  paintTarget: (targetName, hitCallback) => {
    targets[targetName] = hitCallback
  }
}

const socket = io('http://863394de.ngrok.io')
socket.on('connect', () => console.log('connected'))
socket.on('event', (data) => {
  console.log(data)
  if (targets[data.target]) targets[data.target](data.payload)
})
socket.on('disconnect', () => console.log('disconnected'))

if (window) window.datagun = datagun

export default datagun
