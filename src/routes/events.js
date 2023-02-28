/**
 * Gets all events from Relay
 * uses relay.list
 */
import { Router } from 'express';
import 'websocket-polyfill'

import {
  relayInit,
  generatePrivateKey,
  getPublicKey,
  getEventHash,
  signEvent
} from 'nostr-tools'

const router = Router()

const url = 'ws://127.0.0.1:8008/'  // we have to use without SSL, maybe because we are requesting without SSL
//const url = 'wss://nostream.localtest.me' // not working

router.get('/', async (req, res) => {

  const relay = relayInit(url)

  try {
    await relay.connect()
    console.log(`connected to ${relay.url}`)
    let events = await relay.list([{kinds: [0, 1]}])
    console.log('fetched events from relay')

    return res.status(200).json(events)

  } catch (error) {
    console.log(`failed to connect to ${relay.url}`)
    return res.json(relay)  // needs better error reporting
  }

})

export default router
