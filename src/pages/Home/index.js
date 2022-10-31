import React, { useState, useEffect } from 'react';
import { getHomeList } from '../../api'

import './style.css'

//Components
import Header from '../../components/Header'
import FeaturedMovie from '../../components/FeaturedMovie'
import MovieRow from '../../components/MovieRow'
import Footer from '../../components/Footer'

import loading from '../../assets/loading.gif'

function Home() {

  const [ movie, setMovie ]  = useState([])
  const [ featured, setFeatured ]  = useState({})
  const [ blackHeader, setBlackHeader ] = useState(false)

  useEffect(()=>{
    const loadAll = async ()=> {
      //pegado toda lista de filmes
      const data = await getHomeList()
      setMovie(data)

      //Pegadon so filmes em destaques
      let originals = data.filter(i=>i.slug === 'originals')
      let rendomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[rendomChosen]
      //let chosenInfo = chosen
      setFeatured(chosen)
    }


    loadAll()
  }, [])

  useEffect(()=> {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }

  }, [])

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featured &&
        <FeaturedMovie item={featured}/>
      }

      <section className="lists">
        {movie.map((item , key)=> (
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>

      <Footer/>

      {movie.length <= 0 &&
        <div className="loading">
          <img src={loading} alt="Carregando" />
        </div>
      }
    </div>
  );
}

export default Home;
