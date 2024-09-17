import React from 'react'
import { Box, Container, Text, Flex, SimpleGrid, HStack, GridItem, Tag } from '@chakra-ui/react';
import Head from "next/head"
import { motion } from 'framer-motion';
import styles from "../../styles/Projects.module.css";
import {BiCode} from "react-icons/bi";
import { projectData } from '../../public/projectData';
import Image from 'next/image'

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

            <Container maxW={"5xl"} mt={"7vh"} mb={"1.5vh"}>
                <motion.div
                whileHover={{color:"#c2b199"}}
                duration={.3}
                style={{color:"#88806b"}}
                >
                <Text className={"subjectTitle"} fontSize={"4xl"}>#Projects</Text>
            </motion.div>
                
            </Container>
            
            <Container maxW={"5xl"}>
                <SimpleGrid minChildWidth={"340px"} gap={10}>
                    {projectData && projectData.map((item, index) => (
                        <GridItem w='100%' key={index}>
                            <Flex w={"100%"} position={"relative"} justify={"center"} mb={"130px"} key={index}>
                                <Image
                                    src={item.image}
                                    width={480}
                                    height={282}
                                    objectFit={"cover"}
                                    alt="Picture of Design"
                                    loading={"lazy"}
                                    style={{borderRadius: "4px", cursor: "pointer"}}
                                    onClick={()=> openLink(item.link)}
                                    quality={100}
                                />
                            
                                <Box id={`description${index}`} position={"absolute"} borderRadius={"6px"} backgroundColor={"#353637"} p={3} h={"fit-content"} w={"78%"} mx={"auto"} bottom={0} transform={"translateY(60%)"}>
                                    <Flex justify={"space-between"}>
                                        <Text color={"#c2b199"} className={styles.title} fontWeight={700}>{item.name}</Text>
                                        <a href={item.githubLink} target="_blank" rel="noreferrer"><BiCode size={"21px"} color={"#c2b199"}/></a>
                                    </Flex>
                                    
                                    <Text color={"whiteAlpha.800"} className={styles.description} fontSize={"xs"}>{item.description}</Text>
                                    <HStack mt={1.5}>
                                        {item.tags?.map((tag, index2) => (
                                            <Tag key={index2} size={"sm"} color={"black"} className={styles.description} 
                                            bgColor={tag === "In Development" ? "#7bb09e" :
                                            tag === "Artificial Intelligence" ? "#A6C198" : 
                                            tag === "Article" ? "#C198A6" : "#98A6C1"} variant='solid'>
                                                {tag}
                                            </Tag>
                                        ))}
                                    </HStack>
                                </Box>
                            </Flex>
                        </GridItem>
                    ))}
                </SimpleGrid>
            </Container>
        </>
    )
}

export default Projects
