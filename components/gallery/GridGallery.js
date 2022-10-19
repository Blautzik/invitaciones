

export default function GridGallery({ images }) {
return images.map(e => <img src={e}/>)
}
