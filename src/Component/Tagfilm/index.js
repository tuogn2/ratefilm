import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from './tagfilm.module.scss';

const cx = classNames.bind(style)

function Tagfilm({ inforFilms }) {

    const tag = inforFilms.map((inforfilm, index) => {
        const title = inforfilm.original_title
        return <Link to={`${inforfilm.id}`}  key={index}>
            <div className={cx('container-item')} >
                <div className={cx('container-img')}>
                    <img className={cx('img')} src={`https://image.tmdb.org/t/p/original${inforfilm.poster_path}`} alt={title}></img>
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