import { FC} from "react";
import List from "../list/List";
import { BagItem } from "../bagItem/BagItem";
import { AsideBag } from "../asideBag/AsideBag";
import { useBagContext } from "src/context/context";

import style from './BagList.module.scss'

export const BagList:FC = () => {

    const {bag} = useBagContext()

    if(!bag || bag.length === 0 ) return <div>Ваша корзина пуста</div>
    else return(
        <div className={style.bag}>
            <h1>Корзина</h1>
            <section className={style.innerContainer}>
                <List items={bag} className={style.list} renderItem={(item) => <BagItem key = {item.item.id} item={item} />} />
                <AsideBag />
            </section>
        </div>
    )
}