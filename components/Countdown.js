
import { useEffect, useState } from "react";


const Countdown = () => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const target = new Date("12/31/2022 23:59:59");


  useEffect(() => {


    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="flex flex-col w-full justify-center bg-orange-300 h-48 items-center">
    <h2 className="text-4xl text-white mt-10">Faltan:</h2>
    <div className="flex w-full justify-center bg-orange-300 h-32 items-center">
        
          <div className="flex md:w-1/4 w-11/12 justify-between">
              <div className="flex flex-col items-center md:w-1/12 ">
                <span className="text-2xl text-orange-300 bg-white rounded-full w-10 h-10 text-center flex items-center justify-center">{days}</span>
                <span className="md:text-xl text-base text-white">Dias</span>
              </div>
              <div className="flex flex-col items-center md:w-1/12 ">
                <span className="text-2xl text-orange-300 bg-white rounded-full w-10 h-10 text-center flex items-center justify-center">{hours}</span>
                <span className="md:text-xl text-base text-white">Horas</span>
              </div>
              <div className="flex flex-col items-center md:w-1/12 ">
                <span className="text-2xl text-orange-300 bg-white rounded-full w-10 h-10 text-center flex items-center justify-center">{minutes}</span>
                <span className="md:text-xl text-base text-white">Minutos</span>
              </div>
              <div className="flex flex-col items-center md:w-1/12 ">
                <span className="text-2xl text-orange-300 bg-white rounded-full w-10 h-10 text-center flex items-center justify-center">{seconds}</span>
                <span className="md:text-xl text-base text-white">Segundos</span>
              </div>
          </div>
    </div>
    </div>
  );
};

export default Countdown;