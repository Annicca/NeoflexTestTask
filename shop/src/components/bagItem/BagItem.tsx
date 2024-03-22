import { FC } from "react";
import { THeadPhone } from "src/type/THeadPhone";
import { ImgContainer } from "../imgContainer/ImgContainer";
import { Price } from "../price/Price";
import { Counter } from "../counter/Counter";
import DeleteIcon from 'icons/delete.svg?react'

import style from './BagItem.module.scss'

interface BagItem {
    item: THeadPhone
}

export const BagItem:FC<BagItem> = ({item}) => {

    const deleteItem = () => {}

    const handleCount = (count: number) => {}

    return(
        <article className={style.bagItem}>
            <div className={style.innerContainer}>
                <div className={style.info}>
                    <ImgContainer src={item.img} alt = {item.title} className={style.imgContainer} />
                    <div className={style.detail}>
                        <span>{item.title}</span>
                        <Price price={item.price} classNamePrice={style.price}/>
                    </div>
                </div>
                <button onClick={deleteItem} className={style.delete}>
                    <DeleteIcon />
                </button>
            </div>

            <div className={style.infoBottom}>
                <Counter count={1} handleCount={handleCount} />
                <Price price={item.price} classNamePrice={style.priceBottom}/>
            </div>
        </article>
    )
}