import Header from "../Header/Header";
import Sitebar from "../Sitebar";
import Footer from "../Footer";
import classNames from "classnames/bind";
import style from './typefirmLayout.scss'
import { useLocation } from 'react-router-dom';
import routes from "~/config/router";

const cx = classNames.bind(style)

const Movies = [
    { name: 'Popular', path: routes.popular }, 
    { name: 'Now Playing', path: routes.Now_Playing }, 
    { name: 'Upcoming', path: routes.Upcoming }, 
    { name: 'Top Rated', path: routes.top_rated }, 

]

function TypefilmLayout({ children }) {
    const location = useLocation();
    const path = location.pathname;    
    var title="tuong";
    for(let i =0;i<4;i++){
       
        if(Movies[i].path.toString()===path.toString()){

            title=Movies[i].name
        }
    }
    return (
       <>
        <div className={cx('container-layoutfilm')}>
            <Header />
            <div className={cx('wrapper')}>
                <Sitebar className={cx('sitebar')} title={title} />
                <div className={cx('container-film')}>
                    {children}
                </div>
            </div>

            <Footer className={cx('footer')} />
        </div>
       </>
    );
}

export default TypefilmLayout;