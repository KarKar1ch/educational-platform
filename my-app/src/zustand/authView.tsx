import { create } from "zustand";

type State={
    view:string
}
type Action = {
    updateView:(view:string)=>void
    getView:()=>string
}


const authView = create<State & Action>((set:any,get:any)=>({
    view:'signin',
    updateView:(view:string)=>set({view}),
    getView:()=>get().view
}))


export default authView;