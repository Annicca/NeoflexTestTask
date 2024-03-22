import { FC } from "react";

import style from './Price.module.scss'

interface PriceProps {
    price: number,
    oldPrice?: number
}

export const Price:FC<PriceProps> = ({price, oldPrice}) => {
    return(
        <div>
            <div className={style.price}>{price} ₽</div>
            {oldPrice && <div className={style.oldPrice}>{oldPrice + ' ₽'}</div>}
        </div>
    )
}