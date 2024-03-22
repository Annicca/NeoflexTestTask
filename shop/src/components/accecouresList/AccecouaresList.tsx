import { FC } from "react"
import List from "../list/List"
import { HeadPhone } from "../headPhone/HeadPhone"
import { accecouares } from "src/utils/const"

import style from './AccecouaresList.module.scss'


export const AccecouaresList:FC =() => {
    
    if(accecouares.length !== 0) return(
        <main className="container">
            <List 
            items={accecouares} 
            className={style.accecouares}
            renderItem={(accecouareItem) =>
                <section>
                    <h1>{accecouareItem.title}</h1>
                    <List 
                    key={accecouareItem.title} 
                    items={accecouareItem.items} 
                    className={style.list} 
                    renderItem={(headPhone) => <HeadPhone key={headPhone.id} headPhone={headPhone} />} />
                </section>
            }
            />
        </main>
        
    )
}