
export default function Gallery() {
  const images = [
  "https://res.cloudinary.com/fedexx/image/upload/v1666209423/janete/1_vumqpb.jpg",
  "https://res.cloudinary.com/fedexx/image/upload/v1666209423/janete/2_cqbqpn.jpg",
  "https://res.cloudinary.com/fedexx/image/upload/v1666209423/janete/4_hdtwju.jpg",
  "https://res.cloudinary.com/fedexx/image/upload/v1666209422/janete/3_vcj7ju.jpg",
  "https://res.cloudinary.com/fedexx/image/upload/v1666209422/janete/5_svsttn.jpg",
  "https://res.cloudinary.com/fedexx/image/upload/v1666209421/janete/7_dveuq7.jpg",
  "https://res.cloudinary.com/fedexx/image/upload/v1666209419/janete/8_xvnlzh.jpg",
  "https://res.cloudinary.com/fedexx/image/upload/v1666209419/janete/6_odxhvl.jpg",
    ]

  return (
    <div className="flex flex-col items-center">
    <h1 className="text-6xl text-center mb-16">Nuestros momentos</h1>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2  w-4/5 center">
        
      {images.map(e=> <div key={e} className=' rounded hover:scale-105 drop-shadow-2xl hover:z-10 transition-all'>
        <img className="rounded" src={e} alt="" />
        </div>
        )}
    </div>
    </div>
  );
}
