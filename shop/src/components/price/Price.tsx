import { FC } from "react";
import classNames from "classnames";

import style from './Price.module.scss'


interface PriceProps {
    price: number,
    oldPrice?: number,
    classNamePrice?: string,
    clasNameBlock?: string,
    classNameOldPrice?: string
}

export const Price:FC<PriceProps> = ({price, oldPrice, ...className}) => {
    return(
        <div className={className.clasNameBlock}>
            <div className={classNames(style.price, className.classNamePrice)}>{price} ₽</div>
            {oldPrice && <div className={classNames(style.oldPrice, className.classNameOldPrice)}>{oldPrice + ' ₽'}</div>}
        </div>
    )
}