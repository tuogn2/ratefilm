import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Boxchoice from "./Boxchoice";
import classNames from "classnames/bind";
import style from './sitebar.module.scss'

const cx = classNames.bind(style)

function Sitebar({title}) {
    
    return (<div className={cx('wrapper-sitebar')}>
        <h2>{title}</h2>
        <div>

            <Boxchoice title='Sort' icon={faChevronRight} />

            <Boxchoice title='Filters' icon={faChevronRight} />

            <Boxchoice title='Where to watch' icon={faChevronRight} />

        </div>
        <button className={cx('btnsearch')} >Search</button>
    </div>);
}

export default Sitebar;