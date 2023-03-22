import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from './tagfilm.module.scss';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const cx = classNames.bind(style)

function Tagfilm({ inforFilms }) {

    const tag = inforFilms.map((inforfilm, index) => {
        const title = inforfilm.original_title
        return <Link to={`${inforfilm.id}`} key={index}>
            <div className={cx('container-item')} >
                <div className={cx('container-img')}>
                    <img className={cx('img')} src={`https://image.tmdb.org/t/p/original${inforfilm.poster_path}`} alt={title}></img>
                </div>
                <div >
                    {/* lay chứ từ trên github */}
                    <CircularProgressbar
                        styles={buildStyles({
                            // Rotation of path and trail, in number of turns (0-1)
                            rotation: 0,

                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'butt',

                            // Text size
                            textSize: '24px',

                            // How long animation takes to go from one percentage to another, in seconds
                            pathTransitionDuration: 0.5,

                            // Can specify path transition in more detail, or remove it entirely
                            // pathTransition: 'none',
                            // Colors
                            pathColor: inforfilm.vote_average > 7 ? '#21d07a' : '#d2d531',
                            textColor: 'white',
                            trailColor: '#d6d6d6',
                            backgroundColor: '#000000',
                        })}
                        className={cx('progress')} value={inforfilm.vote_average / 0.1} text={`${(inforfilm.vote_average / 0.1).toFixed(0)}%`} />
                </div>
                <div className={cx('title')}>
                    <span>{title || inforfilm.name}</span>
                    <div className={cx('ratefilm')}>
                        Rate:
                        <span> {inforfilm.vote_average}</span>
                    </div>
                    <p className={cx('dateofilm')}><i>{inforfilm.release_date}</i></p>
                </div>

            </div>
        </Link>
    })
    return tag;
}


export default Tagfilm;