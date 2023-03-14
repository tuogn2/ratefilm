import Header from "../Header/Header";
import Footer from "../Footer";
import classNames from "classnames/bind";
import style from './defaullayout.module.scss'
const cx=classNames.bind(style);
function DefaulLayout({children}) {
    return (
        <div>
            <Header/>
            <div className={cx('content')}>
                {children}
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default DefaulLayout;