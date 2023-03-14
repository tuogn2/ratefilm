import classNames from "classnames/bind";
import style from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from 'react';
import Tippy from "@tippyjs/react/headless";
import logo from '~/IMAGE/logo.png'
import avatar from '~/IMAGE/avatar.jpg'
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import routes from "~/config/router";

import Type from "./Type";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
const More = [
                { name: 'discustions', path: routes.home }, 
                { name: 'Leaderboard', path: routes.home },
                { name: 'Support', path: routes.home },
                { name: 'API', path: routes.home },
               ]
             
const People = [
                 { name: 'Popular People', path: routes.popular }, 
                ]
const TVshow = [
                 { name: 'Popular', path: routes.popular }, 
                 { name: 'Airing Today', path: routes.popular }, 
                 { name: 'On TV', path: routes.popular }, 
                 { name: 'Top Rated', path: routes.popular }, 

                ]
const Movies = [
                { name: 'Popular', path: routes.popular }, 
                { name: 'Now Playing', path: routes.Now_Playing }, 
                { name: 'Upcoming', path: routes.Upcoming }, 
                { name: 'Top Rated', path: routes.top_rated }, 

      ]

function Header() {
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
               <div> <Link to={routes.home} ><img className={cx('image')} src={logo} alt='logo' /></Link></div>
                <Type listtype={Movies}>
                    <div className={cx('Movies')}>
                        <span>Movies</span>
                    </div>
                </Type>
                <Type listtype={TVshow}>
                    <div className={cx('TVShow')}>
                        <span>TV Show</span>
                    </div>
                </Type>
                <Type listtype={People}>
                    <div className={cx('People')}>
                        <span>People</span>
                    </div>
                </Type>
                <Type listtype={More}>
                    <div className={cx('More')}>
                        <span>More</span>
                    </div>
                </Type>
            </div>
            <div className={cx('right')}>
                {/* plus */}
                <Tippy
                    interactive
                    delay={[0, 80]}
                    placement="bottom"
                    trigger="click"
                    render={attrs => (
                        <div className={cx('container-item', 'right-plus')} tabIndex="-1" {...attrs}>
                            <div className={cx('addmovie')}>Add New Movie</div>
                            <div className={cx('addshow')}>Add New TV Show</div>
                        </div>
                    )}
                >
                    <div>
                        <FontAwesomeIcon className={cx("icon")} icon={faPlus} />
                    </div>
                </Tippy>
                <div className={cx('language')}>
                    VI
                </div>



                {/* plus */}
                <Tippy
                    interactive
                    delay={[0, 80]}
                    placement="bottom"
                    trigger="click"
                    render={attrs => (
                        <div className={cx('container-item', 'notification')} tabIndex="-1" {...attrs}>
                            <h3>
                                Unread Notifications 0
                            </h3>
                            <p>
                                Good job! Looks like you're all caught up.

                                <a href="https://www.facebook.com/">View All</a>
                            </p>
                        </div>
                    )}
                >

                    <div>
                        <FontAwesomeIcon className={cx("icon")} icon={faBell} />
                    </div>
                </Tippy>
                <div>
                    <img className={cx('avatar')} src={avatar} alt='avatar' />
                </div>
                <div>
                    <FontAwesomeIcon className={cx("icon", "search-color")} icon={faMagnifyingGlass} />
                </div>
            </div>

        </div>
    )
}

export default Header;