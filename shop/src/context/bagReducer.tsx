import { BagAction, BagActionsTypes, TBagItem } from "src/type/TBagItem";
import { getBagSession, setBagSession } from "src/utils/bagService";


export function bagReducer(state: TBagItem[] = getBagSession(), action: BagAction): TBagItem[] {
    switch (action.type) {
        case BagActionsTypes.ADD_TO_BAG: {
            let itemBag: TBagItem = state.filter((item) => item.item.id === action.payload.id)[0]
            if(itemBag) {
                state.map((item) => {
                    if(item.item.id === action.payload.id) {
                        item.count += 1
                    }
                })
                setBagSession([...state])
                return [...state]
            } else {
                let newItemBag: TBagItem = {
                    item: action.payload,
                    count: 1
                }
                setBagSession([...state, newItemBag])
                return [...state, newItemBag]
            }
        }
        case BagActionsTypes.UPDATE_COUNT_ITEM: {
            state.map((item) => {
                if(item.item.id === action.payload.id) {
                    item.count = action.payload.count
                }
            })
            setBagSession([...state])
            return [...state]
        }
        case BagActionsTypes.DELETE_FROM_BAG: {
            let newBag: TBagItem[] = state.filter((item) => item.item.id !== action.payload)
            
            setBagSession(newBag)
            return [...newBag]
        }
        default: {
            throw Error('Unknown action: ');
        }
    }
}