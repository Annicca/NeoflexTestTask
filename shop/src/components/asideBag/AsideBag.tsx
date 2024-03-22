import { FC } from "react";
import style from './AsideBag.module.scss'

interface AsideBagProps{
    cost: number
}

export const AsideBag:FC<AsideBagProps> = ({cost}) => {
    return(
        <aside className={style.aside}>
            <div className={style.asideContainer}>
                <div>ИТОГО</div>
                <div>₽ {cost}</div>
            </div>
            <button className={style.button}>Перейти к оформлению</button>
        </aside>
    )
}