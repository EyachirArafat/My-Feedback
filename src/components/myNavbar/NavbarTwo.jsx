import React, { useState } from 'react'
import Container from '../common/Container'
import { NavTwoItem } from '../../lib/data/apiData'
import { Navbar } from '@nextui-org/react';

const NavbarTwo = () => {
  const [isActive, SetIsActive] = useState(null);

  const handleClick = (index)=>{
    SetIsActive(index);
  };
  return (
    <Navbar shouldHideOnScroll className='mx-auto pb-6'>
      <Container>
        <div className='flex gap-14 px-2 overflow-x-scroll sm:pt-[42px] pt-5 pb-2'>
          {NavTwoItem.map((item, id)=>(
            <button key={id} className={`flex flex-col justify-center items-center  text-nowrap  font-roboto ${isActive === id ? "text-bgP border-b-2 border-b-bgP" : "text-txtS"}`} onClick={()=> handleClick(id)}>
              <p>{item.icon}</p>
              <h3>{item.name}</h3>
            </button>
          ))}
        </div>
      </Container>
    </Navbar>
  )
}

export default NavbarTwo
