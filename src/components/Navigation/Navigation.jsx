import s from './Navigation.module.css'
import clsx from 'clsx'
import { PiFilmSlate } from "react-icons/pi";
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { LiaSearchSolid } from "react-icons/lia";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function Navigation() {
    return (
        <header className={s.header}>
            <p className={s.logo}>
                <span>
                    <PiFilmSlate size={47} color='#551a8b'/>
                </span>
                {' '}
                FilmFinder
            </p>
            <nav className={s.nav}>  
                <NavLink to='/' className={buildLinkClass}>Home <AiOutlineHome size={28}/></NavLink>
                <NavLink to='/movies' className={buildLinkClass}>Movies <LiaSearchSolid size={28}/></NavLink>
                </nav>
        </header>
    )
}