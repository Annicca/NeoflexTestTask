import { FC, useEffect, useState } from "react";
import List from "../list/List";
import { BagItem } from "../bagItem/BagItem";
import { THeadPhone } from "src/type/THeadPhone";

import style from './BagList.module.scss'

export const BagList:FC = () => {

    const [bag, setBag] = useState<THeadPhone[]>([])
    
    useEffect(() => {
        let bagSessionStorage = sessionStorage.getItem('bag')
        if(bagSessionStorage) {
            setBag(JSON.parse(bagSessionStorage))
        }
    }, [])

    if(bag.length === 0 ) return <div>Ваша корзина пуста</div>
    else return(
        <div className={style.bag}>
            <h1>Корзина</h1>
            <section className={style.innerContainer}>
                <List items={bag} className={style.list} renderItem={(item) => <BagItem key = {item.id} item={item} />} />
                <aside className={style.aside}>
                    <div className={style.asideContainer}>
                        <div>ИТОГО</div>
                        <div>стоимость</div>
                    </div>
                    <button className={style.button}>Перейти к оформлению</button>
                </aside>
            </section>
        </div>
    )
}