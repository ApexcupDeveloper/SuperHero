import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { searchHeroes } from '../redux/actions/heroActions';
import { useToasts } from 'react-toast-notifications';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import VS from '../assets/imgs/vs.gif';
import LOGO from '../assets/imgs/logo.png';
import '../assets/css/search.css';
import Card from '../components/Card'

function SearchPage() {
  const search = useLocation().state;
  const name = new URLSearchParams(search).get('name');
  const [query, setQuery] = useState(name)
  const [firstHero, setFirstHero] = useState(null)
  const [secondHero, setSecondHero] = useState(null)
  const heroes = useSelector(state => state.heroes)
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const { errors } = heroes

  useEffect(() => {
    if (errors) {
      addToast(errors, { appearance: 'error' });
    }
  }, [errors])

  useEffect(() => {
    dispatch(searchHeroes(query))
  }, [])

  const pressKey = async (e) => {
    if (e.key === 'Enter') {
      await dispatch(searchHeroes(query));
    }
  }

  const handleSearch = async () => {
    await dispatch(searchHeroes(query));
  }

  const onChangeText = (e) => {
    setQuery(e.target.value)
  }

  const onSelect = async (data) => {
    if (firstHero) {
      if (data.id === firstHero.id) {
        setFirstHero(null)
      } else {
        if (secondHero && secondHero.id === data.id) {
          setSecondHero(null)
        } else {
          setSecondHero(data)
        }
      }
    } else {
      if (secondHero && secondHero.id === data.id) {
        setSecondHero(null)
      } else {
        setFirstHero(data)
      }
    }
  }

  const clickMore = (data) => {
    console.log('more : ', data)

  }

  const renderHeroes = (data, index) => {
    var status = ''
    if (firstHero && firstHero.id === data.id) {
      status = 'first'
    }
    if (secondHero && secondHero.id === data.id) {
      status = 'second'
    }

    return (
      <Card
        key={index}
        data={data}
        onSelect={() => onSelect(data)}
        clickMore={() => clickMore(data)}
        status={status}
      />
    )
  }

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
            value={query}
            className="header-search-input"
            placeholder="Search heroes by name..."
            onChange={onChangeText}
            onKeyDown={pressKey}
          />
          <div className="header-search-button" onClick={handleSearch}>Search</div>
        </div>
        <div className="hidden"></div>
      </div>
      <div className="search-page-body">
        {/* {
          firstHero && secondHero && (
            <div className="compare">
              <div className="compare-container">
                <div className="first-hero-container">
                  <div className="first-hero-data-container"></div>
                  <div className="compare-hero-img-container">
                    <img src={firstHero.image.url} alt="first-hero" className="compare-hero-img" />
                    <h3>{firstHero.name}</h3>
                  </div>
                </div>
                <div className="vs-container">
                  <img src={VS} alt="vs" className="vs-img" />
                </div>
                <div className="second-hero-container">
                  <div className="compare-hero-img-container">
                    <img src={secondHero.image.url} alt="second-hero" className="compare-hero-img" />
                    <h3>{secondHero.name}</h3>
                  </div>
                  <div className="second-hero-data-container"></div>
                </div>
              </div>
            </div>
          )
        } */}
        {
          heroes && heroes.loading ? (
            <Loader
              type="Audio"
              color="#1a73d2"
              height={100}
              width={100}
            />
          ) : (
            <>
              <h1>Search Results:</h1>
              <div className="search-page-hero-list">
                {
                  heroes && heroes.heroesData && heroes.heroesData.map((item, index) => renderHeroes(item, index))
                }
              </div>
            </>
          )
        }
      </div>
    </div>
  );
}

export default SearchPage;
