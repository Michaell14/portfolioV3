import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Container, Text, Center, Input, Flex, HStack, FormLabel, Icon, IconButton, useDisclosure, SimpleGrid, Image } from '@chakra-ui/react';
import React, { useRef, useState } from "react";
import ColorText from '../components/ColorText';
import Experience from './experience';
import Projects from './projects';
import { motion } from 'framer-motion';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import emailjs from '@emailjs/browser';
import { GrSend } from "react-icons/gr";
import { AiOutlineInstagram, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BiCode } from "react-icons/bi"
import toast, { Toaster } from 'react-hot-toast';

const images = [
  "1.jpeg",
  "2.jpg",
  "3.jpg"
]

export default function Home() {
  const form = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [disabled, setDisabled] = useState(false);

  function sendEmail(e) {
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

  const mediaContext = require.context("../public/photobook/", false, /\.(jpg|JPG|jpeg|png|gif|webp|mp4|webm|ogg)$/);
  const mediaFiles = mediaContext.keys().map((file) => mediaContext(file));

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
          <DrawerCloseButton color={"white"} />
          <DrawerHeader borderBottomWidth='1px' borderColor={"#c2b199"} bgColor={"#88806b"} color={'#fffbf2'} className={"font"}>Send me a Rec!</DrawerHeader>
          <DrawerBody bgColor={"#88806b"}>
            <form ref={form} onSubmit={sendEmail} className="font">
              <FormLabel color={"#fffbf2"}>Name</FormLabel>
              <Input type="text" name="user_name" defaultValue={"anonymous"} color={'#fffbf2'} borderColor={"#c2b199"} focusBorderColor='#c2bf99' />
              <FormLabel color={"#fffbf2"} mt={2}>Message</FormLabel>

              <HStack>
                <Input name="message" placeholder={"the rec"} _placeholder={{ color: '#fffbf2' }} color={'#fffbf2'} borderColor={"#c2b199"} focusBorderColor='#c2bf99' />
                <IconButton disabled={disabled} type="submit" aria-label='Send Rec' icon={<GrSend />} bgColor={"#fff7e4"} borderWidth={"1.2px"} />
              </HStack>

            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Center>
        <Box w={"100%"} maxW={"1350px"}>
          {/* <SimpleGrid minChildWidth={"600px"} columns={2} gap={0} position={"relative"}> */}
          <Container maxW={"2xl"} mt={"12vh"}>
            <Box >
              <Text fontSize={{base: "5xl", md: "6xl"}} className="title" id="nameTitle" color={"#c2b199"}>
                Hey, I&#39;m Michael Li
              </Text>
              <Box>

                <Text className={styles.description} mt={2}>
                  I&#39;m a student attending the University of Pennsylvania majoring in <ColorText text="computer science" /> and minoring in <ColorText text="mathematics" />.
                  {/* My work centers around creating engaging user experiences that are driven by design and focused on functionality. */}
                </Text>

                <Text className={styles.description} mt={4}>
                  I appreciate good manga/anime{" "}

                  <span style={{ textDecoration: "underline 2px" }} className={"hideText"} onClick={onOpen}>{'('}give me a rec!{')'}</span>

                  {" "}and I love discovering new <span style={{ textDecoration: "underline 2px" }} className={"hideText"}><a href="https://open.spotify.com/user/yvymj5dyeqm16d6ndcf6quctp" rel={"noreferrer"} target={"_blank"}>music</a></span>! Some  artists I currently have on repeat are: <ColorText text="The Weeknd, d4vd, and Dominic Fike." />
                </Text>

                <Box lineHeight={4} py={2}>
                  <Text className={styles.subdescription} mt={4}>
                    📍 Rockville, MD → Philadelphia, PA
                  </Text>
                  <Text className={styles.subdescription} mt={4}>
                    📚 BSE in Computer Science (w/ math)
                  </Text>
                  <Text className={styles.subdescription} mt={4}>
                    ✈️ US·CA·MX·BE·FR·CN·KR·JP·VN·SG·TH
                  </Text>
                </Box>
                <Box display={"inline-list-item"} overflowX={"scroll"} mt={5}>
                  {images.map((image, index) => {
                    return (
                      <Image key={index} alt={"Image of Michael"} src={`/photobook/${image}`} boxSize="12em" objectFit={"cover"} borderRadius={10} boxShadow={"lg"} mr={5} className={styles.image} />
                    );
                  })}
                </Box>
              </Box>

              <Box mt={4}>
                <a href="https://github.com/Michaell14" target="_blank" rel="noreferrer" aria-label={"Link to Github"}><Icon as={AiFillGithub} boxSize={7} /></a>
                <a href="https://www.instagram.com/michaells19/" target="_blank" rel="noreferrer" aria-label={"Link to Instagram"}><Icon as={AiOutlineInstagram} boxSize={7} mx={3} /></a>
                <a href="mailto:limichael909@gmail.com"><Icon as={AiOutlineMail} boxSize={7} aria-label={"Link to Email"}/></a>
                <a href="https://github.com/Michaell14/portfolioV3" target="_blank" rel="noreferrer" aria-label={"Link to Portfolio Code in Github"}><Icon as={BiCode} boxSize={7} ml={3} /></a>
              </Box>
            </Box>
          </Container>
          <Container maxW={"2xl"} mt={"12vh"}>
            <Text mt={"0"} className={"subjectTitle"} fontSize={"4xl"} color={"#c2b199"} id={"experience"}>#Experience</Text>
            <Experience />
          </Container>
          {/* </SimpleGrid> */}

          <Container maxW={"5xl"}>
            <Text className={"subjectTitle"} fontSize={"4xl"} id={"projects"} mb={1.5}>#Projects</Text>
            <Projects />
          </Container>
        </Box>
      </Center >
      <Box h={40}></Box>
    </>
  )
}
