import React, { useState } from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import './style.css'

function MovieRow({ title, items }) {
    const [ scrollX, setScrollX ] = useState(0)

    const handleLeftArrow = () => {
        let moveToLeft = scrollX + Math.round(window.innerWidth / 2)
        if(moveToLeft > 0){
            moveToLeft = 0
        }
        setScrollX(moveToLeft)
    }

    const handleRightArrow = () => {
        let moveToRight = scrollX - Math.round(window.innerWidth / 2)
        let larguraDaLista = items.results.length * 150
        if((window.innerWidth - larguraDaLista) > moveToRight){
            moveToRight = (window.innerWidth - larguraDaLista) - 60
        }
        setScrollX(moveToRight)
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="arrow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="arrow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieRow
