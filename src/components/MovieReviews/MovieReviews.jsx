import { useEffect, useState } from 'react'
import s from './MovieReviews.module.css'
import { useParams } from 'react-router-dom'
import { getMovieReviews } from '../../api'
import Loader from '../Loader/Loader'

export default function MovieReviews() {
    const [reviews, setReviews] = useState([])
    const { movieId } = useParams()
    
    useEffect(() => {
        const getReviews = async () => {
            const data = await getMovieReviews(movieId)
            setReviews(data)
        }
        getReviews()
    }, [movieId])

    if (!reviews) {
        return <Loader/>
    }

    if (reviews.length === 0) {
        return <p className={s.noReviews}>No reviews yet...</p>
    }

  const finalDate = (createdAt) => {
  const date = new Date(createdAt);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}` }

    return (
        <div>
            <ul className={s.list}>
                {reviews.map(review => (
                    <li key={review.id} className={s.item}>

                        {review.author_details.avatar_path !== null ? (<div> 
                            <img src={`https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`} alt={review.author} className={s.image} />
                        </div>
                        ) : (<div> 
                            <img src='/defaultUser.webp' alt={review.author} className={s.image} />
                            </div>)
                        }
                        
                        <div>
                            <h4>{review.author}</h4>
                            <p className={s.content}>{review.content}</p>
                            <p className={s.date}>{finalDate(review.created_at) }</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}