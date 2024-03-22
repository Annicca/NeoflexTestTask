import { Dispatch, FC, PropsWithChildren, createContext, useContext, useReducer } from "react";
import { BagAction, TBagItem } from "src/type/TBagItem";
import { getBagSession } from "src/utils/bagService";
import { bagReducer } from "./bagReducer";

interface TBagContext{
    bag: TBagItem[],
    count: number,
    cost: number
}

interface TBagDispatchContext{
    dispatch: Dispatch<BagAction>
}

const BagContext = createContext<TBagContext | null>(null)

const BagDispatchContext = createContext<Dispatch<BagAction> | null>(null)

export const useBagContext = () => {
    const context = useContext(BagContext);
    if (!context) throw new Error('Use app context within provider!');
    return context;
}

export const useBagDispatch = () => {
    const context = useContext(BagDispatchContext);
    if (!context) throw new Error('Use app context within provider!');
    return context;
}

const useCreateBagContext = (): TBagContext & TBagDispatchContext => {
    
    const [bag, dispatch] = useReducer(bagReducer, getBagSession())
    
    let cost = bag.reduce((cost, item) =>{
        return cost+= item.count*item.item.price
    }, 0);

    let count = bag.reduce((count, item) =>{
        return count+= item.count
    }, 0);

    return {
        dispatch,
        bag,
        count,
        cost
    }
}

export const BagContextProvider: FC<PropsWithChildren> = ({ children}) => {
    const {dispatch, ...context} = useCreateBagContext();
    return (
        <BagContext.Provider value={context}>
            <BagDispatchContext.Provider value={dispatch}>
                {children}
            </BagDispatchContext.Provider>
        </BagContext.Provider>
    )
    ;
};

