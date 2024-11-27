import s from './MoviesPage.module.css'
import MovieList from '../../components/MovieList/MovieList'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useEffect, useState } from 'react'
import { searchMovie } from '../../api'
import { useSearchParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

export default function MoviesPage() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [newMovies, setNewMovies] = useState([])
   
    const newQuery = searchParams.get('query') ?? ''
   
    useEffect(() => {
        document.title='Movies'
        const getSearchQuery = async () => {
            const data = await searchMovie(newQuery)
            const filteredData = data?.filter(film => film.title.toLowerCase().includes(newQuery.toLowerCase()))
            setNewMovies(filteredData)
        }
        getSearchQuery()
    }, [newQuery])

    const handleSearchSubmit = (query) => {
        const newParams = query !== '' ? { query } : {}
        setSearchParams(newParams)  
    }
    
    return (
        <div>  
            <SearchBar onSubmit={handleSearchSubmit} />
            {newMovies.length === 0 && newQuery !== '' &&
                (<p className={s.text}>No movies found. Try searching for something else</p>)}
            <MovieList movies={newMovies}/>
        </div>
    )
}