import React, { useEffect, useState } from 'react'
import { RiMenuFill as Menu , RiMenuFoldFill as Close } from 'react-icons/all'

export default function Header() {

  const [ toggle , setToggle ] = useState(true);
  const [stick , setStick ] = useState("")

  const menuClick = () => {
    setToggle(!toggle)
  }

  useEffect(()=>{
    window.onscroll = () =>{
      window.scrollY > 10 ? setStick(" py-3 , top-0 ") : setStick("py-2");
      setToggle(true);
    }
  },[])

  return (
    <header className={`bg-black  w-[100%]  fixed duration-200 ${stick}`} >
        <div className="wrap">
            <nav className='flex justify-between items-center'>
                <a href="#" className="logo text-white font-bebas text-[2em] ">PetMax</a>

                <div className="sm:flex menu gap-5 flex none ">
                    <a className="font-semibold text-white" href="#"> HOME </a>
                    <a className="font-semibold text-white" href="#"> SERVICE </a>
                    <a className="font-semibold text-white" href="#"> PRODUCTS </a>
                    <a className="font-semibold text-white" href="#"> BOOK </a>
                    <a className="font-semibold text-white" href="#"> CONTACT </a>
                </div>

     <button className="block sm:hidden menu w-[30px] h-[30px]" onClick={menuClick} >
        {
          toggle ? <Menu className=" text-white w-[100%] text-[2em]"  /> : <Close className=" text-white w-[100%] text-[2em]"  />
        }
     </button>

     {/* Mobile Menu bar */}

            <div className={` sm:hidden overflow-hidden ${toggle ? "max-h-0" : "max-h-full " } menu gap-5 flex fixed w-[100%] flex-col top-[60px] left-0 bg-black duration-300`} >
                    <a onClick={menuClick} className="mx-5 mt-5 font-semibold text-white" href="#"> HOME </a>
                    <a onClick={menuClick} className="mx-5 font-semibold text-white" href="#"> SERVICE </a>
                    <a onClick={menuClick} className="mx-5 font-semibold text-white" href="#"> PRODUCTS </a>
                    <a onClick={menuClick} className="mx-5 font-semibold text-white" href="#"> BOOK </a>
                    <a onClick={menuClick} className="mx-5 mb-5 font-semibold text-white" href="#"> CONTACT </a>
           </div>


            </nav>
        </div>
    </header>
  )
}
