import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Container, Text, Button, Input, HStack, FormLabel, Textarea, Icon, IconButton } from '@chakra-ui/react';
import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import $ from "jquery";
import emailjs from '@emailjs/browser';
import {GrSend} from "react-icons/gr";
import {AiOutlineInstagram, AiFillGithub, AiOutlineMail} from "react-icons/ai";
import {BiCode} from "react-icons/bi"

export default function Home() {
  const form = useRef();
  const [rec, setRec] = useState("");

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_82pnpd8', 'template_2rs2ghj', form.current, 'rID95kHXL6tC-6Opp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
        <Head>
          <title>Michael Li</title>
        </Head>
        
        <Container className="container" maxW={"2xl"} mt={"10vh"}>

          <Box>
            <motion.div
              whileHover={{color:"#c2b199"}}
              duration={.3}
              style={{color:"#88806b"}}
            >
              <Text fontSize={"5xl"} className="title">
                Hey, I&#39;m Michael Li
              </Text>
            </motion.div>
            

            <Text fontSize={"xl"} className={styles.description} mt={2}>I'm a high school student from Maryland who loves to code and listen to music. I currently have a focus on <span style={{color: "#c2b199"}}>web development</span>, <span style={{color: "#c2b199"}}>artifical intelligence</span>, and <span style={{color: "#c2b199"}}>competitive programming.</span></Text>
            
            
            <Popover placement={"right"}>
            
              <Text fontSize={"xl"} className={styles.description} mt={4}>
                I like {' '}
                
                <PopoverTrigger>
                <span style={{textDecoration: "underline 2px"}} className={"hideText"}>manga/anime</span>
                </PopoverTrigger>
                
                {' '}(give me a rec!) and doing other stuff with my friends. 
                Some <span style={{textDecoration: "underline 2px"}} className={"hideText"}><a href="https://open.spotify.com/user/yvymj5dyeqm16d6ndcf6quctp" rel={"noreferrer"} target={"_blank"}>music</a></span> artists I currently have on repeat are: Kid Cudi, Kanye, J. Cole
              </Text>
            
              <PopoverContent backgroundColor={"#88806b"} borderColor={"#88806b"}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Text mb={2} color={"#fffbf2"}>Send Me a Recommendation!</Text>
                    <form ref={form} onSubmit={sendEmail}>
                      <FormLabel color={"#fffbf2"}>Name</FormLabel>
                      <Input type="text" name="user_name" defaultValue={"anonymous"} color={'#fffbf2'} borderColor={"#c2b199"} focusBorderColor='#c2bf99'/>
                      <FormLabel color={"#fffbf2"}>Email</FormLabel>
                      <Input type="email" name="user_email" defaultValue={"limichael909@gmail.com"} color={'#fffbf2'} borderColor={"#c2b199"} focusBorderColor='#c2bf99'/>
                      <FormLabel color={"#fffbf2"}>Message</FormLabel>
                      
                      <HStack>
                        <Input name="message" placeholder={"the rec"} _placeholder={{ color: '#fffbf2' }} color={'#fffbf2'} borderColor={"#c2b199"} focusBorderColor='#c2bf99'/>
                        <IconButton type="submit" aria-label='Send Rec' icon={<GrSend />}  bgColor={"#fff7e4"} borderWidth={"1.2px"}/>
                      </HStack>
                      
                    </form>
                  </PopoverBody>
                </PopoverContent>
              </Popover>

            <Text fontSize={"xl"} className={styles.description} mt={4}>
              Now, I have the opportunity to share my love for tech through organizations like CodeDay, Kids For Code, and many more. </Text>
          </Box>
          
          <Box className={styles.description} mt={5}>
            <a href="https://github.com/Michaell14" target="_blank" rel="noreferrer"><Icon as={AiFillGithub} boxSize={7}/></a>
            <a href="https://www.instagram.com/michaells19/" target="_blank" rel="noreferrer"><Icon as={AiOutlineInstagram} boxSize={7} mx={3}/></a>
            <a href="mailto:limichael909@gmail.com"><Icon as={AiOutlineMail} boxSize={7}/></a>
            <a href="mailto:limichael909@gmail.com"><Icon as={BiCode} boxSize={7} ml={3}/></a>
          </Box>


        </Container>
    </>
  )
}
