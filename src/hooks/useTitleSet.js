import { useEffect } from "react"

const useTitleSet = (titleSet) =>{
    useEffect(()=>{
        // // step-1a
        // document.title= titleSet;
        // step-2 dynamic
        document.title= `${titleSet}-FoodRecipes`;
    },[titleSet])
}

export default useTitleSet;