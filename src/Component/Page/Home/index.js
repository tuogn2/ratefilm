import classNames from "classnames/bind";
import style from './home.module.scss';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);
function Home() {
    const [films, showfilm] = useState([{}]);
    const [select, showselect] = useState('day')
    let day = true;
    let week = false;

    useEffect(() => {


        fetch(`https://api.themoviedb.org/3/trending/all/${select}?api_key=4a41c5e735b727dcdaed54effa84778e`)
            .then((reponse) => reponse.json())
            .then((data) => showfilm(data.results))
    }, [select])
    if (select === 'day') {
        day = true;
        week = false
    } else {
        day = false;
        week = true;
    }



    let trendingday = cx({ select: day })
    let trendingweek = cx({ select: week })


    return <div className={cx('container')}>
        <div className={cx('wrappermedia')} >
            <h1 className={cx('title')}>Welcome.</h1>
            <p className={cx('content')}>Millions of movies, TV shows and people to discover. Explore now.</p>
            <div className={cx('search')}>
                <input className={cx('search-focus')} type='text' placeholder="Search for a movie, tv show, person..." />
                <input className={cx('search-btn')} type='button' value='Search' />
            </div>
        </div>
        <div className={cx('wrapper-trending')}>
            <div className={cx('container-btntrending')}>
                <h2 className={cx('trending')}>Trending</h2>
                <div className={cx('btn')}>
                    <button className={trendingday} onClick={() => { showselect('day') }}>Today</button>
                    <button className={trendingweek} onClick={() => { showselect('week') }}>Week</button>
                </div>

            </div>
            <div className={cx('wrapper-listfilm')}>
                {films.map((film, index) => {
                    return (
                    <Link to={`/movie/popular/${film.id}`}  key={index} className={cx('container-item')} > 
                        {/* <div className={cx('container-item')} > */}
                            <div className={cx('container-img')}>
                                <img className={cx('img')} src={`https://image.tmdb.org/t/p/original${film.poster_path}`} alt={film.title}></img>
                            </div>
                            <div className={cx('title-film')}>
                                <span>{film.title || film.name}</span>
                                <div className={cx('ratefilm')}>
                                    Rate:
                                    <span> {film.vote_average}</span>
                                </div>
                                <p className={cx('dateofilm')}><i>{film.release_date}</i></p>
                            </div>

                        {/* </div> */}
                     </Link>
                    )
                })}
            </div>

        </div>
        <div>

        </div>
    </div>;
}

export default Home;