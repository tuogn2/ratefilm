import Tippy from '@tippyjs/react/headless';
import style from '~/Component/Layout/Header/Header.module.scss';
import classNames from 'classnames/bind';
import Button from "~/Component/Button";

const cx = classNames.bind(style);

function Type({ children,listtype }) {
    return (
        <div>
            <Tippy
            interactive
            delay={[0, 80]}
            placement="bottom-start"
            render={attrs => (
                <div className={cx('container-item')} tabIndex="-1" {...attrs}>
                    {
                        listtype.map((item, index) => {
                            return (<Button key={index} to={item.path} className={cx('button-item')} >{item.name}</Button>);
                        }
                        )
                    }

                </div>
            )}
        >
            {children}
        </Tippy>
        </div>);
}

export default Type;