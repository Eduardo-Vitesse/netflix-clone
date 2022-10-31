import React from 'react'

import './style.css'

function FeaturedMovie({ item }) {

    //let firstData = new Date(item.first_air_date)

    let genres = []
    for(let i in item.genres){
        genres.push(item.genres[i].name)
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">

                <h1 className="featured--name">{item.original_name}</h1>
                    <div className="featured--info">
                        <span className="featured--points">{item.vote_average} Pontos</span>
                        <span className="featured--year">2039</span>
                        <span className="featured--seasons">8 Temporadas</span>
                    </div>
                    <p className="featured--description">{item.overview}</p>
                    <div className="featured--buttons">
                        <button className="btnAssistir">
                            <i className="far fa-play-circle"></i> Assistir
                        </button>
                        <button className="btnMinhaLista">
                            <i className="fas fa-plus"></i> Minha Lista
                        </button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default FeaturedMovie
