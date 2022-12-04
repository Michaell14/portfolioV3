import React from 'react'
import { Box, Container, Text, Flex, } from '@chakra-ui/react';
import Head from "next/head"
import { motion } from 'framer-motion';
import styles from "../styles/Projects.module.css"
import $ from "jquery";
import {BiCode} from "react-icons/bi"


const projects=[
    {name: "Wootton Life", description: "A listing for students at Wootton to view upcoming clubs and activities. Creating in an effort to promote school spirit and club interactivity."
    , image: "/Wootton-Life.png", link: "https://woottonlife.vercel.app/", githubLink: "https://github.com/Michaell14/woottonlife"},
    {name: "Superlatives", description: "An online game to play with friends where you vote for the friend who best fits the description of the listed question."
    , image: "/Superlatives.png", link: "https://superlatives3.vercel.app/", githubLink: "https://github.com/Michaell14/superlatives3"},
    {name: "Encryptable", description: "A tool to help visualize popular text encryption ciphers. Created to make learning about ciphers easier for students to understand."
    , image: "/Encryptable.png", link: "https://encryption-visualizer.vercel.app/", githubLink: "https://github.com/Michaell14/encrypt-visualizer"},
    {name: "Codele", description: "A parody of Wordle, but using programming languages instead."
    , image: "/Codele.png", link: "https://codele.vercel.app/", githubLink: "https://github.com/Michaell14/codele"},   
]


function Projects() {

    //Opens a link in a new tab
    const openLink = (link) => {
        window.open(link, "_newtab")
    }

    return (
        <>
            <Head>
                <title>Projects - Michael Li</title>
            </Head>

            <Container maxW={"2xl"} mt={"7vh"} mb={"1.5vh"}>
                <motion.div
                whileHover={{color:"#c2b199"}}
                duration={.3}
                style={{color:"#88806b"}}
                >
                <Text className={"subjectTitle"} fontSize={"3xl"}>#Projects</Text>
            </motion.div>
                
            </Container>
            
            <Container maxW={"2xl"} centerContent>
                

                {projects.map((item, index) => (
                    <Flex w={"100%"} position={"relative"} justify={"center"} mb={"180px"} key={index}>
                        
                        <Box
                        className="projectImg"
                        sx={{
                            width: "100%",
                            height: "310px",
                            cover: "fill",
                            background:`url(${item.image}) center/cover no-repeat`,
                        }} borderRadius={"4px"} onClick={()=> openLink(item.link)} transition={".3s"} _hover={{filter:'hue-rotate(60deg) grayscale(80%)', cursor: "pointer"}}></Box>
                      
                        
                        <Box className={styles.box} id={`description${index}`} borderWidth={2.34} borderColor={"rgba(255, 255, 255, 0)"} position={"absolute"} borderRadius={"6px"} backgroundColor={"#353637"} p={3.5} h={"fit-content"} w={"70%"} mx={"auto"} bottom={0} transform={"translateY(50%)"}>
                            
                            <Flex justify={"space-between"}>
                                <Text color={"#c2b199"} className={styles.title} fontSize={'lg'} fontWeight={700} pb={1}>{item.name}</Text>
                                <a href={item.githubLink} target="_blank" rel="noreferrer"><BiCode size={"21px"} color={"#c2b199"}/></a>
                            </Flex>
                            
                            <Text color={"white"} className={styles.description} fontSize={"sm"}>{item.description}</Text>
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
