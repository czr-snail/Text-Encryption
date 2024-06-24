import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleEncrypt = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/encrypt', { text: inputText });
      setEncryptedText(response.data.encryptedText);
    } catch (error) {
      console.error('Error encrypting:', error);
    }
  };

  const handleDecrypt = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/decrypt', { text: encryptedText });
      setDecryptedText(response.data.decryptedText);
    } catch (error) {
      console.error('Error decrypting:', error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Encryption App</h1>
        <div className="content">
          <div className="section">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to encrypt"
            />
            <button className="encrypt" onClick={handleEncrypt}>
              <span>Encrypt</span>
            </button>
          </div>
          <div className="section">
            <textarea
              value={encryptedText}
              onChange={(e) => setEncryptedText(e.target.value)}
              placeholder="Encrypted text"
            />
            <button className="decrypt" onClick={handleDecrypt}>
              <span>Decrypt</span>
            </button>
          </div>
          <div className="section">
            <textarea
              value={decryptedText}
              readOnly
              placeholder="Decrypted text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;