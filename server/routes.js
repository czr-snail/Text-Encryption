const express = require('express');
const router = express.Router();
const { encrypt, decrypt } = require('./encryption');

router.post('/encrypt', (req, res) => {
  const { text } = req.body;
  const encryptedText = encrypt(text);
  res.json({ encryptedText });
});

router.post('/decrypt', (req, res) => {
  const { text } = req.body;
  try {
    const decryptedText = decrypt(text);
    res.json({ decryptedText });
  } catch (error) {
    res.status(400).json({ error: 'Invalid encrypted text' });
  }
});

module.exports = router;