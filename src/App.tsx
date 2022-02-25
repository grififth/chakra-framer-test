import * as React from "react"
import {
  ChakraProvider,
  Box,
  Center,
  Icon
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

import { AiOutlinePlayCircle } from "react-icons/ai";

import theme from './theme';

import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const App = () => {

  const [isAnim, setIsAnim] = React.useState<boolean>(false);

  return (
  <ChakraProvider theme={theme}>
    <Center w="100vw" h="100vh" >
      <MotionBox bg='#63ACFF' w="100px" h="100px" borderRadius="20px" whileHover={ isAnim ? {} : {scale: 1.2}}
      animate={ isAnim ? {
        scale: [1.2, 0.5, 7],
        rotate: [0, 30, 1440],
        background: ["#63ACFF", "#63ACFF", "#FF6363"],
        transition: {
          duration: 2,
        }
      } : {}} in={isAnim}
      transition={{duration: 0.5}}
      onClick={() => setIsAnim(true)}>
        <Center w="100%" h="100%">
          <Icon w="75%" h="75%" as={AiOutlinePlayCircle} />
        </Center>
      </MotionBox>
    </Center>
  </ChakraProvider>
  )
}