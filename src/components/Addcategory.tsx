import { Dispatch, SetStateAction, useState } from "react"

interface Props {
    // aca estoy pasando un useState
    setCategories?: Dispatch<SetStateAction<string[]>>;
    onNewValue: (event: any) => void
}
export const Addcategory = ({ onNewValue }: Props) => {

    const [inputvalue, setInputvalue] = useState('');

    const onInputChange = ({ target }: any) => {

        setInputvalue(target.value);

    }

    const onSubmit = (event: any) => {

        event.preventDefault();//evitar que se refresco la pagina

        if (inputvalue.trim().length <= 1) { return; }
       // if(setCategories) setCategories((categories) => [...categories, inputvalue]);
       onNewValue(inputvalue.trim());
       setInputvalue('');

    }

    return (
        <>
            <form onSubmit={(event) => onSubmit(event)}>
                <input
                    type="text"
                    name=""
                    placeholder="Buscar Gif"
                    value={inputvalue}
                    onChange={onInputChange}
                />
            </form>
        </>
    )
}
