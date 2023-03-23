import classNames from "classnames/bind";
import style from './footer.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,  faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {  faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import logo from '~/IMAGE/logo.png'
import { Link } from "react-router-dom";
import routes from "~/config/router";

const cx = classNames.bind(style)
function Footer() {
    return (
        <footer className={cx('container')}>
            <div >
                <Link  to={routes.home}>
                    <img className={cx('logo-footer')} alt="logo" src={logo} />
                </Link>
            </div>
            <div className={cx('infor-contact')}>
                <p>Thông tin liên hệ: </p>
                <div>
                    <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                    <span>0976.474.170</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                    <span>tranphu.chituong.9d4@gmail.com</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faLocationDot} className={cx('icon')} />
                    <span>12 Nguyễn văn bảo, P4,Gò vấp, Tp.HCM</span>
                </div>
            </div>
            <div className={cx('socials')}>
                <p>
                    Các nền tảng mạng xã hội liên hệ:
                </p>
                <div className={cx('social-network')}>
                    <a href="https://www.facebook.com/" alt='face'><FontAwesomeIcon icon={faFacebookF} className={cx('social-media')} /></a>
                    <a href="https://twitter.com/?lang=vi" alt='Twitter'><FontAwesomeIcon icon={faTwitter} className={cx('social-media')} /></a>
                    <a href="https://www.instagram.com/" alt='insgram'><FontAwesomeIcon icon={faInstagram} className={cx('social-media')} /></a>
                </div>
            </div>
        </footer>);
}

export default Footer;