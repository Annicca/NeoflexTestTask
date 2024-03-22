import { TBagItem } from "src/type/TBagItem";

export function getBagSession(): TBagItem[] {
    let bag: any = sessionStorage.getItem('bag')
    if(bag) return JSON.parse(bag)
    else return []
}

export function setBagSession(bag: TBagItem[]) {
    sessionStorage.setItem('bag', JSON.stringify(bag))
}