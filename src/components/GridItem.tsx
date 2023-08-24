import { GifInterface } from "../interface/gifInterface"


export const GridItem = ({images, title}:GifInterface) => {
    const {downsized_medium} =images;
    const {url} = downsized_medium;
  return (
    <div className="card">
        <img src={url} />
        <p>{title}</p>
    </div>
  )
}
