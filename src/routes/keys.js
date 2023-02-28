/**
 * Gets random key pair
 *
 */
import { Router } from 'express';
import {generatePrivateKey, getPublicKey} from 'nostr-tools'

const router = Router();

let sk = generatePrivateKey() // `sk` is a hex string
let pk = getPublicKey(sk) // `pk` is a hex string

router.get('/', (req, res) => {
  return res.status(200).json({
    "sk":sk,
    "pk":pk
  })
});

export default router;

