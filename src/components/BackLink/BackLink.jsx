import s from './BackLink.module.css'
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function BackLink({to}) {
    return (
<div className={s.arrowDiv}> 
        <Link to={to} className={s.link}>
            <HiArrowLeft size={24} />
            Go back
        </Link>
         </div>
    )
}