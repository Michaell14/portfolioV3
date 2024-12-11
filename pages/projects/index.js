import React, { useState } from 'react'
import { Box, Text, Flex, SimpleGrid, HStack, GridItem, Tag, VStack } from '@chakra-ui/react';
import styles from "../../styles/Projects.module.css";
import { BiCode } from "react-icons/bi";
import { projectData, selectedData } from '../../lib/projectData';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Projects() {

    const openLink = (link) => {
        window.open(link, "_newtab")
    }

    const [len, setLen] = useState(6);

    return (
        <>
            <SimpleGrid minChildWidth={"370px"} columns={2} gap={10}>
                {selectedData && selectedData.map((item, index) => (
                    <motion.div key={index} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ amount: .4, once: true }} transition={{ duration: .6 }}>
                        <Flex w={"100%"} position={"relative"} justify={"center"} mt={6} mb={40}>
                            <Image
                                src={item.image}
                                width={720}
                                height={423}
                                objectFit={"cover"}
                                alt="Picture of Design"
                                style={{ borderRadius: "6px", cursor: "pointer" }}
                                onClick={() => openLink(item.link)}
                                quality={90}
                                aria-label={"Link to Project"}
                            />

                            <Box id={`description${index}`} position={"absolute"} borderRadius={10} backgroundColor={"#353637"} p={3.5} h={"fit-content"} w={"78%"} mx={"auto"} bottom={0} transform={"translateY(60%)"}>
                                <Flex justify={"space-between"}>
                                    <Text color={"#c2b199"} className={styles.title} fontWeight={700}>{item.name}</Text>
                                    <a href={item.githubLink} target="_blank" rel="noreferrer"><BiCode size={"21px"} color={"#c2b199"} /></a>
                                </Flex>

                                <Text mt={.5} color={"whiteAlpha.800"} className={styles.description} fontSize={"xs"}>{item.description}</Text>
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
                    </motion.div>
                ))}
            </SimpleGrid>
            <Text className={"subjectTitle"} fontSize={"4xl"} id={"projects"} mb={1.5}>#Archived Projects</Text>
            <SimpleGrid minChildWidth={"300px"} columns={2} gap={10}>

                {projectData && projectData.slice(0, len).map((item, index) => (
                    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ amount: .3, once: true }} transition={{ duration: .6 }}>
                        <GridItem w='100%' key={index} mt={6}>
                            <VStack w={"100%"} position={"relative"} key={index}>
                                <Image
                                    src={item.image}
                                    width={480}
                                    height={282}
                                    objectFit={"cover"}
                                    alt="Picture of Design"
                                    style={{ borderRadius: "6px", cursor: "pointer" }}
                                    onClick={() => openLink(item.link)}
                                    quality={90}
                                    aria-label={"Link to Project"}
                                />

                                <Box id={`description${index}`} borderRadius={10} backgroundColor={"#353637"} p={3.5} h={"fit-content"}>
                                    <Flex justify={"space-between"}>
                                        <Text color={"#c2b199"} className={styles.title} fontWeight={700}>{item.name}</Text>
                                        <a href={item.githubLink} target="_blank" rel="noreferrer"><BiCode size={"21px"} color={"#c2b199"} /></a>
                                    </Flex>

                                    <Text mt={.5} color={"whiteAlpha.800"} className={styles.description} fontSize={"xs"}>{item.description}</Text>
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
                            </VStack>
                        </GridItem>
                    </motion.div>
                ))}


            </SimpleGrid>
            <Box textAlign={"right"} mt={10}>
                {(len == 6) && (
                    <Text className={styles.description} fontSize={"lg"} right={0}><span onClick={() => { setLen(projectData.length) }} style={{ cursor: "pointer" }}>View All</span></Text>
                )}
            </Box>
        </>
    )
}

export default Projects
