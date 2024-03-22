import { THeadPhone } from "./THeadPhone";

export interface TBagItem {
    item: THeadPhone,
    count: number
}

export enum BagActionsTypes {
	ADD_TO_BAG = 'ADD_TO_BAG',
	UPDATE_COUNT_ITEM = 'UPDATE_COUNT_ITEM',
	DELETE_FROM_BAG = 'DELETE_FROM_BAG'
}

export interface AddToBagAction {
	type: BagActionsTypes.ADD_TO_BAG,
    payload: THeadPhone
}

interface UpdateCountItemAction {
	type: BagActionsTypes.UPDATE_COUNT_ITEM;
	payload: {
        id: number,
        count: number
    }
}

export interface DeleteFromBagAction {
	type: BagActionsTypes.DELETE_FROM_BAG;
	payload: number
}

export type BagAction = AddToBagAction | UpdateCountItemAction | DeleteFromBagAction