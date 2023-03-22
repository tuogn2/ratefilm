import style from './profile.module.scss'
import classNames from 'classnames/bind';
import Avatar from '~/IMAGE/avatar.jpg';
const cx = classNames.bind(style);

function Profile() {
    return <div className={cx('wrapper')}>
        <div className={cx('banner')}>
            <div className={cx('container-avatar')}>
                <img className={cx('avatar')} src={Avatar}/>
            </div>
            <div className={cx('inforuser')}>
                <h2>Đỗ Chí Tường</h2>
                
            </div>
        </div>
    </div>;
}

export default Profile;