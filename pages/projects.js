import React from 'react'
import { Box, Container, Text, Flex, Image, HStack } from '@chakra-ui/react';
import Link from "next/link"
import { motion } from 'framer-motion';
import styles from "../styles/Projects.module.css"
import $ from "jquery"

const names=["Wootton Life", "Superlatives", "Encryptable", "Codele"];
const descriptions=["A listing for students at Wootton to view upcoming clubs and activities. Creating in an effort to promote school spirit and club interactivity.",
    "An online game to play with friends where you vote for the friend who best fits the description of the listed question.",
    "A tool to help visualize popular text encryption ciphers. Created to make learning about ciphers easier for students to understand.",
    "A parody of Wordle, but using programming languages instead."]
const images=["/Wootton-Life.png", "/Superlatives.png", "Encryptable.png", "Codele.png"]
const links=["https://github.com/Michaell14/woottonlife", "https://github.com/Michaell14/superlatives3",
"https://github.com/Michaell14/encrypt-visualizer", "https://github.com/Michaell14/codele"];

function Projects() {

    //Opens a link in a new tab
    const openLink = (link) => {
        window.open(link, "_newtab")
    }

    

    return (
        <>
            <Container maxW={"2xl"} mt={"7vh"} mb={"1.5vh"}>
                <Text className={"subjectTitle"} color={"#88806b"} fontSize={"3xl"}>#Projects</Text>
            </Container>
            
            <Container maxW={"2xl"} centerContent>
                

                {names.map((item, index) => (
                    <Flex w={"100%"} position={"relative"} justify={"center"} mb={"180px"} key={index}>
                        
                        <Box
                        className="projectImg"
                        sx={{
                            width: "100%",
                            height: "310px",
                            cover: "fill",
                            background:`url(${images[index]}) center/cover no-repeat`,
                        }} borderRadius={"4px"} onClick={()=> openLink(links[index])} transition={".3s"} _hover={{filter:'hue-rotate(60deg) grayscale(80%)', cursor: "pointer"}}></Box>
                      
                        
                        <Box className={styles.box} id={`description${index}`} borderWidth={2.34} borderColor={"rgba(255, 255, 255, 0)"} position={"absolute"} borderRadius={"6px"} backgroundColor={"#353637"} p={3.5} h={"fit-content"} w={"70%"} mx={"auto"} bottom={0} transform={"translateY(50%)"}>
                            <Text color={"#c2b199"} className={styles.title} fontSize={'lg'} fontWeight={700}>{item}</Text>
                            <Text color={"white"} className={styles.description} fontSize={"sm"}>{descriptions[index]}</Text>
                        </Box>
                    </Flex>
                ))}
                
                
            </Container>
        </>
    )
}

if (typeof window !== "undefined") {
    $(".projectImg" ).hover(function(e) {
        console.log(e)
    });
}


export default Projects
