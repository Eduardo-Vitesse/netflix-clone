const apiKey = "412eb6784cf7da43bb70668f8b4459da"
const apiBase = "https://api.themoviedb.org/3"
const pt_br = "language=pt-BR"

async function basicFetch(endpoint){
    const req = await fetch(`${apiBase}${endpoint}`)
    const json = await req.json()
    return json
}

export const getHomeList = async () => {
    return [
        {
            slug: 'originals',
            title: 'Originais da NetFlix',
            items: await basicFetch(`/discover/tv?with_network=123&${pt_br}&api_key=${apiKey}`)
        },
        {
            slug: 'trending',
            title: 'Recomendados para Você',
            items: await basicFetch(`/trending/all/week?${pt_br}&api_key=${apiKey}`)
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?${pt_br}&api_key=${apiKey}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&${pt_br}&api_key=${apiKey}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&${pt_br}&api_key=${apiKey}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&${pt_br}&api_key=${apiKey}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&${pt_br}&api_key=${apiKey}`)
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_genres=99&${pt_br}&api_key=${apiKey}`)
        }
    ]
}

export const getMovieInfo = async (movieId, type) => {
    let info = {}
    
    if(movieId){
        switch (type) {
            case 'movie':
                info = await basicFetch(`/movie/${movieId}?api_key=${apiKey}`)
            break;
            case 'tv':
                info = await basicFetch(`/tv/${movieId}?api_key=${apiKey}`)
            break;
            default:
                info = null
        }
    }
    console.log(info);
}