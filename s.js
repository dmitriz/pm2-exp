const { map, pipeline } = require('cpsfy') 
const ws = require('ws')
const ipc=require('node-ipc')
const bSocket = 'tsk',
	evt = 'trade'

const BASE = 'wss://stream.binance.com:9443'
const url = `${BASE}/ws/btcusdt@trade`


const getWs = (url, opts) => cb => 
	new ws(url, opts).on('message', cb)

const bcast = (socket, event) => {
	ipc.serve(socket)
	ipc.server.start()
	return data => ipc.server.broadcast(event, data)
}

const s = pipeline(url)(
	getWs,
	map(JSON.parse),
	map(bcast(bSocket, evt))
)

s(console.log)
