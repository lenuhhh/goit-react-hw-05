import s from './NotFoundPage.module.css'
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
    <div className={s.arrowDiv}> 
        <Link to='/' className={s.link}>
            <HiArrowLeft size={24} />
            Go home
        </Link>
    </div>
    )
}