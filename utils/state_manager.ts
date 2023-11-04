import { create } from "zustand";

type SoldModalProps = {
    visible:boolean;
    setVisible: (val:boolean) => void;
}

const StateManager = {

    SoldModal: create<SoldModalProps>((set) => ({
        visible:false,
        setVisible: (val) => set(() => ({visible:val}))
    }))
    
}

export default StateManager