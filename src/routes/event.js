/**
 * Currently only generates a random event
 * Could be used to fetch single event in future /event/<id>
 *
 */
import { Router } from 'express'
import {
  validateEvent,
  verifySignature,
  generatePrivateKey,
  signEvent,
  getEventHash,
  getPublicKey
} from 'nostr-tools'

const router = Router()

let privateKey = generatePrivateKey()

let event = {
  kind: 1,
  created_at: Math.floor(Date.now() / 1000),
  tags: [],
  content: 'hello',
  pubkey: getPublicKey(privateKey)
}

event.id = getEventHash(event)
event.sig = signEvent(event, privateKey)

router.get('/', (req, res) => {
  return res.status(200).json({
    "event": event
  })
})

export default router
