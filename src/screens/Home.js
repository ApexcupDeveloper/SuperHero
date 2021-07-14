import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import LOGO from '../assets/imgs/logo.png';
import '../assets/css/home.css';

function HomePage() {
  const [query, setQuery] = useState('')
  const [empty, setEmpty] = useState(false)
  const history = useHistory();

  const goSearch = () => {
    if (query.length === 0) {
      setEmpty(true)
      return
    }
    history.push(`/search?name=${query}`)
  }

  const pressKey = (e) => {
    if (query.length === 0) {
      setEmpty(true)
      return
    }
    if (e.key === 'Enter') {
      history.push(`/search?name=${query}`)
    }
  }

  const onChangeQuery = (e) => {
    setEmpty(false)
    setQuery(e.target.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={LOGO} className="App-logo" alt="logo" />
        <h2 className="App-title"><span style={{ color: '#ea1e1e' }}>Super</span> Heroes</h2>
        <div className="App-description">Get all SuperHeroes and Villians data via "Super Heroes"</div>
        <div className="search-container">
          <input type="text"
            className="search-input"
            value={query}
            placeholder="Search heroes by name..."
            onChange={onChangeQuery}
            onKeyDown={pressKey}
            style={ empty ? { borderColor: 'red' } : null }
          />
          <div className="search-button" onClick={goSearch}>Search</div>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
