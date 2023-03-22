import Tippy from '@tippyjs/react/headless';
import style from '~/Component/Layout/Header/Header.module.scss';
import classNames from 'classnames/bind';
import avatar from '~/IMAGE/avatar.jpg'
import Button from '~/Component/Button';
import routes from '~/config/router';

const cx = classNames.bind(style);
const profile = ['Xem hồ sơ', 'Thảo luận', 'Danh sách', 'Xếp hạng']
function Avatar() {
    return (<div>
        <Tippy
            trigger="click"
            interactive
            render={attrs => (
                <div className={cx('container-item','wrapper-profile')} tabIndex="-1" {...attrs}>
                    {profile.map((infor, index) => {
                        return <Button key={index} to={routes.profile} className={cx('infor')}>{infor}</Button >
                    })}
                </div>
            )}
        >
            <img className={cx('avatar')} src={avatar} alt='avatar' />
        </Tippy>
    </div>);
}

export default Avatar;