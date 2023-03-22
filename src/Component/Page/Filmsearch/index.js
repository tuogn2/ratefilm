import classNames from "classnames/bind";
import style from './filmsearch.module.scss';

const cx = classNames.bind(style)

function Filmsearch() {
        return ( 
        <h1 className={cx('title')}>
            Đang bảo trì!!!
        </h1>
    );
}

export default Filmsearch;