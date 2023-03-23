import classNames from "classnames/bind";
import style from '~/Component/Page/Home/home.module.scss';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from "react";
import Button from "~/Component/Button";
const cx = classNames.bind(style)
function Search() {
    //lay thong tin từ thẻ input
    const [search, setsearch] = useState('');
    //lấy danh sach
    const [listfilm, setlistfilm] = useState([{}])
    // khi gõ thì hiển thị danh sách
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/search/keyword?api_key=e9e9d8da18ae29fc430845952232787c&page=1&query=${search}`)
            .then(data => data.json())
            .then(prev => setlistfilm(prev.results))
    }, [search])
    const handlechange = (e) => {
        const value = e.target.value;
        // console.log(value)
        if (value.startsWith(' ')) {
            return;
        }
        setsearch(value)

    }
    return (
        <Tippy
            visible={search.length > 0 && listfilm.length > 0}
            interactive
            placement="bottom-start"
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        {listfilm.map((film,index, i = 0) => {
                            if (i > 5) {
                                return null;
                            }
                            i++;
                            return <Button to={`/movie/popular/${film.id}`} key={index}>{film.name}</Button>
                        })}

                </div>

            )}

        ><div className={cx('search')}>
                <input className={cx('search-focus')}
                    onChange={handlechange}
                    value={search}
                    type='text' placeholder="Search for a movie, tv show, person..." />
                {/* <input className={cx('search-btn')} type='button' value='Search' /> */}
                <Button className={cx('search-btn')} to={search} type='button'  >
                    Search
                </Button>
            </div>
        </Tippy>);
}

export default Search;