import { FC } from "react";
import { THeadPhone } from "src/type/THeadPhone";
import { Rate } from "../rate/Rate";
import { Price } from "../price/Price";

import style from './HeadPhone.module.scss'
import { ImgContainer } from "../imgContainer/ImgContainer";

interface HeadPhoneProps {
    headPhone: THeadPhone
}

export const HeadPhone:FC<HeadPhoneProps> = ({headPhone}) => {

    const addBag = () => {
        let bag: any = sessionStorage.getItem('bag')
        if(bag) {
            bag = JSON.parse(bag)
            bag = [...bag, headPhone]
        } else {
            bag = [headPhone]
        }
        sessionStorage.setItem('bag', JSON.stringify(bag))
    }

    return(
        <article className={style.headPhone}>
            <ImgContainer src={headPhone.img} alt = {headPhone.title} /> 
            <div className={style.info}>
                <div className={style.title}>{headPhone.title}</div>
                <Price price={headPhone.price} oldPrice={headPhone.oldPrice}/>
                <Rate rate={headPhone.rate} />
                <button onClick={addBag} className={style.buy}>Купить</button>
            </div>
        </article>
    )
}