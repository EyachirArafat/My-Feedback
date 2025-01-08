import React, { useEffect } from 'react'
import Container from '../../common/Container'
import ComponentTitle from '../../common/ComponentTitle'
import { MdOutlineAccessTimeFilled, MdOutlinePhoneInTalk, MdOutlineRestaurant } from 'react-icons/md'
import { FaFacebook, FaLocationDot, FaPager, FaTiktok } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { RiDownload2Line, RiInstagramFill, RiWhatsappFill } from 'react-icons/ri'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const BIInformation = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  useEffect(()=>{
    const interval = setInterval(()=>{
      onOpen();
    }, 6000)

    return () => clearInterval(interval)
  }, [onOpen])

  return (
    <Container>
      <div className='grid sm:grid-cols-2 grid-cols-1 '>
        <div>
          <ComponentTitle
            className="md:text-xl font-semibold text-[18px] mb-10"
            children="More informations"
          />
          <div className='space-y-7 pb-5'>
            <div className='flex gap-4'>
              <MdOutlineRestaurant size={24}/>
              <button onClick={onOpen} className='border-b border-b-txtS text-txtS'>See the menu</button>
            </div>
            <div className='flex gap-4'>
              <MdOutlinePhoneInTalk size={24}/>
              <span className='text-txtS'>+847 87 37 29 01</span>
            </div>
            <div className='flex gap-4'>
              <FaLocationDot size={24}/>
              <span className='text-txtS'>Singapour, Bishan</span>
            </div>
            <div className='flex gap-4'>
              <MdOutlineAccessTimeFilled size={24}/>
              <span className='text-txtS'>7j/7, 08:00 - 22:00</span>
            </div>
            <div className='flex gap-4'>
              <FaPager size={24}/>
              <a 
              href="https://www.bellaitalia.com"
              target="_blank"
              rel="noopener noreferrer"
              className='border-b border-b-txtS text-txtS '>www.bellaitalia.com</a>
            </div>
            
            <div className='flex gap-4'>
              <NavLink><FaFacebook size={28}/></NavLink>
              <NavLink><RiInstagramFill size={28}/></NavLink>
              <NavLink><FaTiktok size={28}/></NavLink>
              <NavLink><RiWhatsappFill size={28}/></NavLink>
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <img className='max-w-[579px] w-full max-h-[432px] object-cover' src="/map-1.png" alt="" />
        </div>
      </div>

    {/* menu modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='2xl'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Menu</ModalHeader>
              <ModalBody className='mb-4'>
                <img src="/foodList.png" alt="" />
                <h1 className='font-lexend font-semibold text-txtP text-2xl text-center'>Menu Bella Italia</h1>
                <a className='text-center' href="/foodList.png" download="foodList.png">
                  <Button variant='bordered' download='foodList.png'>
                  <RiDownload2Line size={28}/>
                  Download this menu</Button>
                </a>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
  
    </Container>
  )
}

export default BIInformation
