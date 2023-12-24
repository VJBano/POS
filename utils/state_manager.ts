import { create } from "zustand";

type SoldModalProps = {
    visible:boolean;
    setVisible: (val:boolean) => void;
}

type StockModalProps = {
    visible: boolean;
    setVisible: (val:boolean) => void;
}

const StateManager = {

    SoldModal: create<SoldModalProps>((set) => ({
        visible:false,
        setVisible: (val) => set(() => ({visible:val}))
    })),

    stockModal: create<StockModalProps>((set) => ({
        visible:false,
        setVisible: (val) => set(() => ({visible:val}))
    }))
    
}

export default StateManager