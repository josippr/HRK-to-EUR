
import './App.css';
import './index.css';
import { useState } from 'react';


function App() {

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage((event.target.value)/7.534500);
  };

  const handleChangeHR = (event) => {
    setMessage((event.target.value)*7.534500);
  };

  return (
    <div className="App">
      <header className='header'>
        <p>HRK/EUR Converter</p>
      </header>
      <main className='main'>
        <h2 className="tip">Unesite iznos u HRK u polje za unos:</h2>
        <h4 className='iznos'><p className='color'></p>Iznos u HRK: </h4>
        <input
        className='input-HRK'
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        />
        <br />
        <h4 className='iznos'><p className='color'>Iznos u EUR (cijeli):</p> {message}</h4>
        <h4 className='iznos'><p className='color'>Iznos u EUR zaokruženo:</p> {message}</h4>
        <br />
        

        <h2 className="tip">Unesite iznos u EUR u polje za unos:</h2>
        <h4 className='iznos'><p className='color'></p>Iznos u EUR: </h4>
        <input
        className='input-HRK'
        type="text"
        id="message"
        name="messageHR"
        onChange={handleChangeHR}
        />
        <br />
        <h4 className='iznos'><p className='color-c'>Iznos u HRK (cijeli):</p> {message}</h4>
        <h4 className='iznos'><p className='color-c'>Iznos u HRK zaokruženo:</p> {message}</h4>
        
        <p className='tecaj'>Konverzija: 7,534500<br />App by: <a className="link" href="https://github.com/josippr">Josip Prpić</a></p>
      </main>
    </div>
  );
}

export default App;
