import Countdown from "./Countdown"
import { GiChurch} from "react-icons/gi";
import { GiGlassCelebration } from 'react-icons/gi'


const Info = () => {
  return (
    <div>
 
    <Countdown/>
    <div className="flex w-full justify-center mt-20 mb-20">

    <div className="flex flex-col md:flex-row md:w-10/12 w-full justify-between items-end">
        <div className="flex flex-col justify-center items-center">
            <GiChurch className="text-9xl text-orange-300 mb-5"/>
            <h3 className="text-2xl mb-5 text-zinc-800">CEREMONIA</h3>
            <p className="w-3/4 text-center">Celebramos con todos nuestros nuestro casamiento el 15 de Noviembre a las 19:00 horas en Astilleros Milberg, Nordelta. Tocá el botón de abajo para recibir las indicaciones para llegar. ¡Te esperamos! </p>
            <button className="mt-5 px-5  py-2 rounded-full bg-orange-300 text-white"><a href="https://goo.gl/maps/hEUQmyU1J8p8fMa16">VER UBICACION</a></button>
        </div>
        <div className="flex flex-col justify-center items-center">
            <GiGlassCelebration className="text-9xl text-orange-300 mb-5" />
            <h3 className="text-2xl mb-5 text-zinc-800">FIESTA!</h3>
            <p className="w-3/4 text-center">Celebramos nuestro casamiento el 15 de Noviembre a las 19:00 horas en Astilleros Milberg, Nordelta. Tocá el botón de abajo para recibir las indicaciones para llegar. ¡Te esperamos! </p>
            <button className=" mt-5 px-5 py-2 rounded-full bg-orange-300 text-white"><a href="https://goo.gl/maps/hEUQmyU1J8p8fMa16">VER UBICACION</a></button>
        </div>
    </div>
    </div>
 
    </div>
  )
}

export default Info