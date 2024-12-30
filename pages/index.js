import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Container, Text, Center, Icon, useDisclosure, Image } from '@chakra-ui/react';
import React from "react";
import ColorText from '../components/ColorText';
import Experience from './experience';
import Projects from './projects';
import { motion } from 'framer-motion';
import EmailDrawer from '../components/EmailDrawer';
import { AiOutlineInstagram, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BiCode } from "react-icons/bi"


const images = [
  "1.jpeg",
  "2.jpg",
  "3.jpg"
]

export default function Home() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>Michael Li</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <EmailDrawer onClose={onClose} isOpen={isOpen} />

      <Center>
        <Box w={"100%"} maxW={"1350px"}>
          <Container maxW={"2xl"} mt={"12vh"}>
            <Box h={"100vh"}>
              <Text fontSize={{ base: "5xl", md: "6xl" }} className="title" id="nameTitle" color={"#c2b199"}>
                Hey, I&#39;m Michael Li
              </Text>
              <Text className={styles.description} mt={2}>
                I&#39;m a student, engineer, and design enthusiast.
              </Text>

              <Text className={styles.description} mt={4}>
                I appreciate good manga/anime{" "}
                <span style={{ textDecoration: "underline 2px" }} className={"hideText"} onClick={onOpen}>{'('}give me a rec!{')'}</span>
                {" "}and I love discovering new <span style={{ textDecoration: "underline 2px" }} className={"hideText"}><a href="https://open.spotify.com/user/yvymj5dyeqm16d6ndcf6quctp" rel={"noreferrer"} target={"_blank"}>music</a></span>! Some  artists I currently have on repeat are: <ColorText text="The Weeknd, d4vd, and Dominic Fike." />
              </Text>

              <Box lineHeight={4} py={2}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .4 }}>
                  <Text className={styles.subdescription} mt={4}>
                    📍 Rockville, MD → Philadelphia, PA
                  </Text>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .4, delay: .3 }}>
                  <Text className={styles.subdescription} mt={4}>
                    📚 BSE in Computer Science (w/ math)  @ UPenn
                  </Text>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .4, delay: .6 }}>
                  <Text className={styles.subdescription} mt={4}>
                    ✈️ US·CA·MX·BE·UK·FR·CN·KR·JP·VN·SG·TH
                  </Text>
                </motion.div>

                <Box display={"inline-list-item"} overflowX={{base: "scroll", md: "hidden"}} style={{scrollbarWidth:"thin", scrollbarColor:"white black"}} mt={5}>
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
                <a href="mailto:limichael909@gmail.com"><Icon as={AiOutlineMail} boxSize={7} aria-label={"Link to Email"} /></a>
                <a href="https://github.com/Michaell14/portfolioV3" target="_blank" rel="noreferrer" aria-label={"Link to Portfolio Code in Github"}><Icon as={BiCode} boxSize={7} ml={3} /></a>
              </Box>
            </Box>
            <Text className={"subjectTitle"} fontSize={"4xl"} color={"#  "} id={"experience"} mb={"1.5vh"}>#Experience</Text>
            <Experience />
          </Container>

          <Container maxW={"1400px"}>
            <Projects />
          </Container>
        </Box>
      </Center >
      <Box h={40} pos={"relative"} w={"100%"} alignContent={"flex-end"} textAlign={"center"}>
        <Text className={styles.description} mb={14} fontSize={"sm"}>Made with ☕ by Michael.</Text>
      </Box>

    </>
  )
}
