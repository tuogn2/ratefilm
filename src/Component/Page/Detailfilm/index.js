import classNames from "classnames/bind";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import style from './detailfilm.module.scss';

const cx = classNames.bind(style);
function Detailfilm() {
    let datailid = '';
    const location = useLocation();
    const path = location.pathname;
    const length = path.length;
    for (let i = length - 1; i >= 0; i--) {
        if (path[i] !== '/') {
            datailid += path[i];

        } else {
            break;
        }
    }
    datailid = datailid.split("").reverse().join("");

    const [detailfilm,setdetaifilm] =useState([{}]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${datailid}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`)
        .then(prev =>prev.json())
        .then(data =>setdetaifilm(data))
    }, [])

    
   

    return (<div className={cx('container')}>
        <img className={cx('background')} src={`https://image.tmdb.org/t/p/original${detailfilm.backdrop_path}`} alt={detailfilm.original_title}/>
    </div>);
}

export default Detailfilm;