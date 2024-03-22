import { FC } from "react";
import { useBagContext, useBagDispatch } from "src/context/context";
import { BagActionsTypes, TBagItem } from "src/type/TBagItem";
import { ImgContainer } from "../imgContainer/ImgContainer";
import { Price } from "../price/Price";
import { Counter } from "../counter/Counter";
import DeleteIcon from 'icons/delete.svg?react'

import style from './BagItem.module.scss'

interface BagItem {
    item: TBagItem
}

export const BagItem:FC<BagItem> = ({item}) => {

    const dispatch = useBagDispatch()

    const deleteFromBag = () => {
        dispatch({
            type: BagActionsTypes.DELETE_FROM_BAG,
            payload: item.item.id
        })
    }

    return(
        <article className={style.bagItem}>
            <div className={style.innerContainer}>
                <div className={style.info}>
                    <ImgContainer src={item.item.img} alt = {item.item.title} className={style.imgContainer} />
                    <div className={style.detail}>
                        <span>{item.item.title}</span>
                        <Price price={item.item.price} classNamePrice={style.price}/>
                    </div>
                </div>
                <button onClick={deleteFromBag} className={style.delete}>
                    <DeleteIcon />
                </button>
            </div>

            <div className={style.infoBottom}>
                <Counter count={item.count} id = {item.item.id} />
                <Price price={item.item.price*item.count} classNamePrice={style.priceBottom}/>
            </div>
        </article>
    )
}