import { useState } from "react"
import { Addcategory } from "./components/Addcategory";
import { GifGrid } from "./components/GifGrid";



export const App = () => {

    const [categories, setCategories] = useState(['naruto'])

    const onAddCategory = (newCategories: string) => {

        if (categories.includes(newCategories)) { return; }

        setCategories([newCategories, ...categories]);
    }

    

    return (

        <>
            {/* Titulo */}
            <h1>GifexpertApp</h1>

            {/* Input */}
            <Addcategory
                //setCategories={setCategories} 
                onNewValue={value => onAddCategory(value)}

            />
    
          {/* <GifGrid key={'gif1'} categoria={categories[0]}/> */}

           { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        categoria={ category } />
                ))
            }


        </>
    )
}
