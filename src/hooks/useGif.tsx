import { useEffect, useState } from "react";
import { GifInterface, Principalnterface } from "../interface/gifInterface";
import gifDB from "../Api/gifDB";

interface GifDetails{
    data: GifInterface[];
}

export default function useGif(query:string) {
  
    const [isLoading, setisLoading] = useState(true)
    const [state, setState] = useState<GifDetails>({
        data: [],
    });

    const getGifDetails = async() => {  
        const gifDetailsResp = await gifDB.get<Principalnterface>(`?q=${query}`);
         setState({data: gifDetailsResp.data.data})
         setisLoading(false);
    }
    
    useEffect(() => {
        getGifDetails();
        
    }, []);
  return {
    ...state,
    isLoading
  }
}
