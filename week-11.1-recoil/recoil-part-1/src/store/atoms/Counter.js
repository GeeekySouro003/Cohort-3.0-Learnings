import { atom, selector } from "recoil";

export const counterAtom = atom({
    default:0,
    key: "counter"

})

//derived state from the counter atom
export const evenSelector=selector({
     key:"isEvenSelector",
     get:function({get}) { //logic for deriving some state from the counter atom
        const currentCount=get(counterAtom);
        const isEven=(currentCount % 2 ==0);
        return isEven;
     }
})