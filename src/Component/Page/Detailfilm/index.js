import classNames from "classnames/bind";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import style from './detailfilm.module.scss';
// import backround from '~/IMAGE/avatar.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart, faList, faStar } from "@fortawesome/free-solid-svg-icons";



const cx = classNames.bind(style);
function Detailfilm() {
    let detailid = '';
    const location = useLocation();
    const path = location.pathname;
    const length = path.length;
    for (let i = length - 1; i >= 0; i--) {
        if (path[i] !== '/') {
            detailid += path[i];

        } else {
            break;
        }
    }

    detailid = detailid.split("").reverse().join("");

    const [detailfilm, setdetaifilm] = useState([{}]);
    const [actors, setactors] = useState([{}]);

    // const [fallback, setfallback] = useState('')
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${detailid}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`)
            .then(prev => prev.json())
            .then(data => setdetaifilm(data))
            // .catch((error)=>{
            //     console.error('Error:',error)
            //     fetch('https://api.themoviedb.org/3/movie/297762?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos')
            //     .then((data)=>{
            //         data.json()
            //     })
            //     .then((prev)=>{
            //         setdetaifilm(prev)
            //     })
            // });
        fetch(`http://api.themoviedb.org/3/movie/${detailid}/casts?api_key=e9e9d8da18ae29fc430845952232787c`)
            .then(prev => prev.json())
            .then(data => setactors(data.cast))
            // .catch((error)=>{
            //     console.error('Error:',error)
            //     console.log('hi')
            //     fetch('http://api.themoviedb.org/3/movie/297762/casts?api_key=e9e9d8da18ae29fc430845952232787c')
            //     .then((data)=>{
            //         data.json()
            //     })
            //     .then((prev)=>{
            //         setactors(prev.cast)
            //     })
            // });
            
    }, [detailid])
    


   
    const back = `https://image.tmdb.org/t/p/original${detailfilm.backdrop_path}`;
    return (<div>
        <div className={cx('container')}>
            <img className={cx('background')}
                src={back}//  src={fallback || back}
                alt={detailfilm.original_title}
            // onError={handlerror}
            />
            <div className={cx('container-detail')}>
                <img className={cx('poster')}
                    src={`https://image.tmdb.org/t/p/original${detailfilm.poster_path}`}
                    alt={detailfilm.original_title}
                // onError={handlerror}
                />
                <div className={cx('infor')}>
                    <h1 className={cx('title')}>{detailfilm.original_title}</h1>
                    <div className={cx('date')}>
                        <span className={cx('certification')}>R</span>
                        <span>{detailfilm.release_date}</span>
                        <span className={cx('categoris')}>,Thể loại: </span>
                        {detailfilm.genres && detailfilm.genres.map((genre) => {
                            return <span key={genre.id} className={cx('catrgori')}>
                                {genre.name}
                            </span>
                        })}
                    </div>
                    <div className={cx('container-icons')}>
                       
                        <FontAwesomeIcon className={cx('icon')} icon={faList} />
                        <FontAwesomeIcon className={cx('icon')} icon={faHeart} />
                        <FontAwesomeIcon className={cx('icon')} icon={faBookmark} />
                        <FontAwesomeIcon className={cx('icon')} icon={faStar} />
                    </div>
                    <p className={cx('tagline')}> {detailfilm.tagline || `Life is 10% what happens to you and 90% how you react to it  `}</p>
                    <h3>Overview</h3>
                    <div className={cx('overviewtitle')}>{detailfilm.overview}</div>

                </div>
            </div>

        </div>
        <div>
            <h2 className={cx('topbill')}>
                Top Billed Cast
            </h2>
            <div className={cx('container-actors')}>
                {actors.map((actor, index) => {
                    return <div key={index} className={cx('wrapper-actor')}>
                        <img className={cx('actor-img')}
                            src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
                            alt={actor.original_name}
                        />
                        <h3 >{actor.name}</h3>
                        <h5>{actor.original_name}</h5>
                    </div>

                })}
            </div>
        </div>

    </div>);
}

export default Detailfilm;