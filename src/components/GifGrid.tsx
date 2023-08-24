import useGif from "../hooks/useGif";
import { GridItem } from "./GridItem";

interface Props {
  key: string,
  categoria: string
}

export const GifGrid = ({ categoria }: Props) => {

  const { data, isLoading } = useGif(categoria);

  return (
    <>
      <h3>{categoria}</h3>

      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className="card-grid">
        {
          data.map(data => (
            <GridItem key={data.id}
              {...data}
            />

          ))
        }
      </div>
    </>
  )
}
