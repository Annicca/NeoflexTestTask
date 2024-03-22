import { FC } from "react";
import { THeadPhone } from "src/type/THeadPhone";
import { useBagDispatch } from "src/context/context";
import { BagActionsTypes } from "src/type/TBagItem";
import { Rate } from "../rate/Rate";
import { Price } from "../price/Price";
import { ImgContainer } from "../imgContainer/ImgContainer";

import style from './HeadPhone.module.scss'

interface HeadPhoneProps {
    headPhone: THeadPhone
}

export const HeadPhone:FC<HeadPhoneProps> = ({headPhone}) => {

    const dispatch = useBagDispatch()

    const addToBag = () => {
        dispatch({
            type: BagActionsTypes.ADD_TO_BAG,
            payload: headPhone
        })
    }

    return(
        <article className={style.headPhone}>
            <ImgContainer src={headPhone.img} alt = {headPhone.title} /> 
            <div className={style.info}>
                <div className={style.title}>{headPhone.title}</div>
                <Price price={headPhone.price} oldPrice={headPhone.oldPrice}/>
                <Rate rate={headPhone.rate} />
                <button onClick={addToBag} className={style.buy}>Купить</button>
            </div>
        </article>
    )
}