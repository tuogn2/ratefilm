import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import style from '~/Component/Layout/Sitebar/sitebar.module.scss';
const cx = classNames.bind(style)


function Boxchoice({ icon, title }) {
    const [show, setshow] = useState(false)
    const handleclick = () => {
        setshow(!show)
    }
    useEffect(() => {
        //    handleclick();
    }, [show])
    return (<div className={cx('container')}>
        <div className={cx('wrapper-box')} onClick={handleclick}>
            <p>{title}</p>
            <FontAwesomeIcon icon={icon} />
        </div>
        {show && <div className={cx('hiden-box')}>
            <span className={cx('title-hiden-box')}>Sort Results By</span>
            <select className={cx('list-box')} size='1'>
                <option>Popularity Descending</option>
                <option>Popularity Ascending</option>
                <option>Rating Descending</option>
            </select>
        </div>}
    </div>
    );
}

export default Boxchoice;