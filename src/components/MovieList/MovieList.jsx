import s from './MovieList.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function MovieList({movies}) {
    const location = useLocation()
    return (
        <div> 
        <ul className={s.list}>
            {movies.map(movie => (
                <li key={movie.id} className={s.item}>
                    <Link to={`/movies/${movie.id.toString()}`} state={location}>
                        
                        {movie.poster_path ? (<img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} className={s.img} />)
                            : (<img src='/defaultMoviePoster.jpg' alt={movie.title} className={s.img} />)
                        }
                        <h2>{movie.title}</h2>
                    </Link>
              </li>
          ))}
            </ul>
            </div>
    )
}