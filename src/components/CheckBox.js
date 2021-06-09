import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from './CheckBox.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

console.log(styles);
function CheckBox({ checked, children, ...rest }) {
    return (
        <div className={cx('checkbox', 'asdf')}>
            <label>
                <input type='checkbox'  checked={checked} {...rest}/>
                <div className={styles.icon}>{checked ? <MdCheckBox className={styles.checked}/> : <MdCheckBoxOutlineBlank/>}</div>
            </label>
            <span>{children}</span>
        </div>
    )
}

export default CheckBox;