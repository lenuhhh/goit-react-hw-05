import s from './HomePage.module.css'
import MovieList from '../../components/MovieList/MovieList'
import { useState, useEffect } from 'react'
import { getTrendingMovies } from '../../api'
import Loader from '../../components/Loader/Loader'

export default function HomePage() {
    const [movies, setMovies] = useState([])
   
    useEffect(() => {
        document.title = 'Home'
        const getMoviesList = async () => {
            const data = await getTrendingMovies()
            setMovies(data)
        }
        getMoviesList()
    }, [])

    if (!movies) {
        return <Loader/>
    }

    return (
        <div> 
            <h1 className={s.title}>Trending today</h1>
            <MovieList movies={movies} />
        </div>
    )
}