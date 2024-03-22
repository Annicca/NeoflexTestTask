import { TBagItem } from "src/type/TBagItem";
import { THeadPhone } from "src/type/THeadPhone";

export function getItemBag (id: number): TBagItem {
    return getBag().filter((item) => item.item.id === id)[0]
}

export function getBag(): TBagItem[] {
    let bag: any = sessionStorage.getItem('bag')
    if(bag) return JSON.parse(bag)
    else return []
}

export function setBag(bag: TBagItem[]) {
    sessionStorage.setItem('bag', JSON.stringify(bag))
}

export function updateItemBagCount(id: number, count: number){
    let bag: TBagItem[] = getBag()
    bag.map((item) => {
        if(item.item.id === id) {
            item.count = count
        }
    })
    setBag(bag)
}

export function addToBag(headPhone: THeadPhone) {
    let bag = getBag()
    let itemBag: TBagItem = getItemBag(headPhone.id)
    if(itemBag) {
        updateItemBagCount(itemBag.item.id, itemBag.count+1)
    } else {
        let newItemBag: TBagItem = {
            item: headPhone,
            count: 1
        }
        setBag([...bag, newItemBag])
    }
}

export function getCountBagItems() {
    return getBag().reduce((count, item) =>{
        return count+= item.count
    }, 0)
}