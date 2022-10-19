import Image from "next/image"
import headerImg from '../img/couple-love.jpg'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion';
import Link from "next/link";
import {IoChevronDown} from "react-icons/io5";

const Header = () => {
  return (
    <div className="scroll-smooth">
        <div className="absolute top-0 w-full h-screen bg-center bg-cover">
        <Image
            src={headerImg}
            layout='fill'
            quality={100}
            objectFit='cover'
            objectPosition='50% 100%'
            placeholder="blur"
        />

<div className="w-full h-full flex container relative mx-auto">
    <div className=" w-full items-center justify-center flex flex-wrap">
      <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center">
        <div className="w-full">
        <motion.div initial='hidden' animate='visible' variants={{
            hidden:{
              scale: .95,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .5,
                duration: .9
              }
            },
          }} >
          <h2>NOS CASAMOS!</h2>
          <h1 className="text-6xl md:text-6xl text-gray-900  my-6">
            Agos & Lucas
          </h1>
          <h3 className="pb-24">22-03-2023</h3>
          </motion.div>
          <div className="flex w-full justify-center translate-y-40">
            <Link href="#aca" scroll={false}>
                <IoChevronDown className='animate-bounce text-4xl text-gray-900'/>
            </Link>

          </div>
          </div>
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Header