import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Container, Text, Input, HStack, FormLabel, Icon, IconButton, useDisclosure } from '@chakra-ui/react';
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import ColorText from '../components/ColorText';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import {GrSend} from "react-icons/gr";
import {AiOutlineInstagram, AiFillGithub, AiOutlineMail} from "react-icons/ai";
import {BiCode} from "react-icons/bi"
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const form = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ disabled, setDisabled ] = useState(false);

  function sendEmail(e){
    e.preventDefault();
    setDisabled(true);

    emailjs.sendForm('service_82pnpd8', 'template_2rs2ghj', form.current, 'rID95kHXL6tC-6Opp')
      .then((result) => {
        toast('Received, Thank you!', {
          icon: '💖',
        });
        setDisabled(false);
        onClose();
      }, (error) => {
          console.log(error.text);
          setDisabled(false);
      });
  }

  return (
    <>
        <Head>
          <title>Michael Li</title>
          <link rel="icon" href="/favicon.ico"></link>
        </Head>
          <Toaster
            position="bottom-left"
            reverseOrder={false}
          />
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color={"white"}/>
            <DrawerHeader borderBottomWidth='1px' borderColor={"#c2b199"} bgColor={"#88806b"} color={'#fffbf2'} className={"font"}>Send me a Rec!</DrawerHeader>
            <DrawerBody bgColor={"#88806b"}>

            <form ref={form} onSubmit={sendEmail} className="font">
              <FormLabel color={"#fffbf2"}>Name</FormLabel>
              <Input type="text" name="user_name" defaultValue={"anonymous"} color={'#fffbf2'} borderColor={"#c2b199"} focusBorderColor='#c2bf99'/>
              <FormLabel color={"#fffbf2"} mt={2}>Message</FormLabel>
              
              <HStack>
                <Input name="message" placeholder={"the rec"} _placeholder={{ color: '#fffbf2' }} color={'#fffbf2'} borderColor={"#c2b199"} focusBorderColor='#c2bf99'/>
                <IconButton disabled={disabled} type="submit" aria-label='Send Rec' icon={<GrSend />}  bgColor={"#fff7e4"} borderWidth={"1.2px"}/>
              </HStack>
              
            </form>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        
        <Container className="container" maxW={"3xl"} mt={"10vh"}>

          <Box>
            <motion.div
              whileHover={{color:"#c2b199"}}
              duration={.3}
              style={{color:"#88806b"}}
            >
              <Text fontSize={"5xl"} className="title" id="nameTitle">
                Hey, I&#39;m Michael Li
              </Text>
            </motion.div>
            

            <Text fontSize={"xl"} className={styles.description} mt={2}>I&#39;m a student attending the University of Pennsylvania who currently has a focus on <ColorText text="full stack web development"/> and <ColorText text="software development"/>.</Text>
            
              <Text fontSize={"xl"} className={styles.description} mt={4}>
                I appreciate good manga/anime{' ('}
                
                <span style={{textDecoration: "underline 2px"}} className={"hideText"} onClick={onOpen}>give me a rec!</span>
          
                {") "}and I love discovering new <span style={{textDecoration: "underline 2px"}} className={"hideText"}><a href="https://open.spotify.com/user/yvymj5dyeqm16d6ndcf6quctp" rel={"noreferrer"} target={"_blank"}>music</a></span>! Some  artists I currently have on repeat are: <ColorText text="Daniel Caesar, Rocco, and Jeremy Zucker."/>
              </Text>

            <Text fontSize={"xl"} className={styles.description} mt={4}>
              Now, I have the opportunity to share my love for tech through my projects and Penn club involvements like 
              {" "}<ColorText text="Spark" link="https://pennspark.org/community/"/>, 
              {" "}<ColorText text="REACH" link="https://www.instagram.com/upennreach/"/>, 
              {" "}<ColorText text="PennApps" link="https://pennapps.com/"/>, and 
              {" "}<ColorText text="PClassic!" link="https://www.pclassic.org/"/>
              </Text>
          </Box>
          
          <Box className={styles.description} mt={5} mb={10}>
            <a href="https://github.com/Michaell14" target="_blank" rel="noreferrer"><Icon as={AiFillGithub} boxSize={7}/></a>
            <a href="https://www.instagram.com/michaells19/" target="_blank" rel="noreferrer"><Icon as={AiOutlineInstagram} boxSize={7} mx={3}/></a>
            <a href="mailto:limichael909@gmail.com"><Icon as={AiOutlineMail} boxSize={7}/></a>
            <a href="https://github.com/Michaell14/portfolioV3" target="_blank" rel="noreferrer"><Icon as={BiCode} boxSize={7} ml={3}/></a>
          </Box>
        </Container>
    </>
  )
}
