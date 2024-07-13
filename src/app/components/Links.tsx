import {motion} from 'framer-motion'



interface LinksProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const variants = {
  open: {
    transition:{
      staggerChildren: 0.1,
    },
  },
  closed:{
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}
const itemVariants = {
  open: {
    y:0,
    opacity:1,
  },
  closed:{
    y:50,
    opacity: 0,
  },
}

const Links:React.FC<LinksProps>=({setIsOpen}) => {
   const items =[
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
   ];
  return (
    <motion.div className="fixed w-[400px] h-full flex flex-col bg-white top-0 right-0 bottom-0 items-center justify-center gap-4" variants={variants}
   
    >
      {
        items.map((item)=>(
          
          <motion.a href={`#${item}`} 
          className='text-4xl font-bold font-Lora nav-link ' key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale: 0.5}}
          onClick={()=>setIsOpen(false)}
          >
            {item}
          </motion.a>
          
        ))
      }
      </motion.div>

  )
}

export default Links