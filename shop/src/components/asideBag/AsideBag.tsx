import { FC } from "react";
import style from './AsideBag.module.scss'
import { useBagContext } from "src/context/context";

export const AsideBag:FC = () => {

    const {cost} = useBagContext()

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