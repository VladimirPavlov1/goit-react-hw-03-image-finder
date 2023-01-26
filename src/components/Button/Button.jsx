import { BtnLoad } from "./Button.styled"

export const Button =({onClick})=>{
    return (
        <BtnLoad onClick={()=>onClick()}>Load More</BtnLoad>
    )
}