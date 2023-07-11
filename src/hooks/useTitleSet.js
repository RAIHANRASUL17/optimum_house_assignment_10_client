import { useEffect } from "react"

const useTitleSet = (titleSet) =>{
    useEffect(()=>{
        // // step-1
        // document.title= titleSet;
        // step-2 dynamic
        document.title= `${titleSet}-FoodRecipes`;
    },[titleSet])
}

export default useTitleSet;