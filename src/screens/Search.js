import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { searchHeroes } from '../redux/actions/heroActions';

import LOGO from '../assets/imgs/logo.png';
import '../assets/css/search.css';
import Card from '../components/Card'

function SearchPage(props) {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');
  const [query, setQuery] = useState(name)
  const heroes = useSelector(state => state.heroes)
  const dispatch = useDispatch();


  useEffect(() => {
    console.log('props : ', query)
    dispatch(searchHeroes(query));
  }, [])

  return (
    <div className="search-page">
      <div className="search-page-header">
        <a className="app-logo-container" href="/">
          <img src={LOGO} alt="logo" />
          <div className="app-logo-title-container">
            <span>Super</span>
            <span>Heroes</span>
          </div>
        </a>
        <div className="header-search-container">
          <input type="text"
            className="header-search-input"
            placeholder="Search heroes by name..."
          />
          <div className="header-search-button">Search</div>
        </div>
        <div className="hidden"></div>
      </div>
      <div className="search-page-body">
        <h1>Search Results:</h1>
        <div className="search-page-hero-list">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
