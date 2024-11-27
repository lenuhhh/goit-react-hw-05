import s from './MovieCast.module.css'
import { getMovieCast } from '../../api'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'

export default function MovieCast() {
    const [cast, setCast] = useState([])
    const { movieId } = useParams()
    
    useEffect(() => {
        const getCast = async () => {
            const data = await getMovieCast(movieId)
            setCast(data)
        }
        getCast()
    }, [movieId])
    
    if (!cast) {
        return <Loader/>
    }

    if (cast.length === 0) {
        return <p className={s.castText}>Cast details are missing. Check back later for updates!</p>
    }

    return (
        <div>
            <ul className={s.list}>
                {cast.map(actor => (
                    <li key={actor.cast_id} className={s.item}>
                        {actor.profile_path ? (
                                     <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} className={s.image} />
                        ) : (
                                     <img src='/defaultActor.jpg' alt={actor.name} className={s.image} />
                        )}
                        <div className={s.actorDiv}>
                            <h4>{actor.name}</h4>
                            <h5>Character:
                                {' '}<span>{actor.character}</span>
                            </h5>
                            {actor.popularity > 0 && (
                                <h5>Popularity:
                                {' '}<span>{actor.popularity.toFixed(2)}</span>
                            </h5>
                            )}
                            <h5>Known for:
                                {' '}<span>{actor.known_for_department}</span>
                            </h5>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}