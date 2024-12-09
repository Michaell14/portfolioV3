import React from 'react'
import { Box, Text, Flex, SimpleGrid, HStack, GridItem, Tag } from '@chakra-ui/react';
import styles from "../../styles/Projects.module.css";
import { BiCode } from "react-icons/bi";
import { projectData } from '../../lib/projectData';
import Image from 'next/image'

function Projects() {

    const openLink = (link) => {
        window.open(link, "_newtab")
    }

    return (
        <>
            <SimpleGrid minChildWidth={"370px"} columns={2} gap={24}>
                {projectData && projectData.map((item, index) => (
                    <GridItem w='100%' key={index} mt={6}>
                        <Flex w={"100%"} position={"relative"} justify={"center"} key={index}>
                            <Image
                                src={item.image}
                                width={480}
                                height={282}
                                objectFit={"cover"}
                                alt="Picture of Design"
                                loading={"lazy"}
                                style={{ borderRadius: "6px", cursor: "pointer" }}
                                onClick={() => openLink(item.link)}
                                quality={100}
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
                    </GridItem>
                ))}
            </SimpleGrid>
        </>
    )
}

export default Projects
