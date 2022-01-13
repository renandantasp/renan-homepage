import {
  Box,
  Image,
  Button,
  useDisclosure,
  Lorem,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  setSize,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import React from 'react'

export const ModalImage = ({src, alt}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return(
    <Box>
      <Image 
        my={8}
        cursor="pointer"
        src={src} 
        alt={alt}
        key="full"
        onClick={onOpen}
        // borderStyle="solid"
        // borderColor={useColorModeValue("#1d2021","#fbf1c7")}
        // borderWidth={2}
        borderRadius={5}
        w="full" 
      />


      <Modal isOpen={isOpen} allowPinchZoom={true} onClose={onClose} >
        <ModalOverlay />
        <ModalContent maxW="56rem" >
          {/* <ModalHeader>{alt}</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody >
          <Image 
            my={8} 
            src={src} 
            alt={alt}
            borderRadius={5}
            w="full" />
          </ModalBody>
          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </Box>
  )
}
      // <Button>

      // </Button>