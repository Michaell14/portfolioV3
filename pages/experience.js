import React from 'react'
import { Box, Container, Text, Flex } from '@chakra-ui/react';
import styles from "../styles/Experience.module.css";
import Head from "next/head";
import { motion } from 'framer-motion';

function Experience() {

    return (
        <>
            <Head>
                <title>Experience - Michael Li</title>
            </Head>

            <Container maxW={"3xl"} mt={"7vh"} mb={"1.5vh"}>
                <motion.div
                    whileHover={{color:"#c2b199"}}
                    duration={.3}
                    style={{color:"#88806b"}}
                    >
                    <Text className={"subjectTitle"} fontSize={"4xl"}>#Experience</Text>
                </motion.div>
            </Container>

            <Container maxW={"3xl"} pb={20}>
                <Flex gap={5} id={"experience1"}>
                    <Text className={styles.date} fontSize={"sm"}>July 2022 - <br/>Sept. 2022</Text>

                        
                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-8px"} left={-8}>1</Text>
                    
                        <Box ml={5}>
                            <Text className={styles.title}>Verizon - SWE Intern</Text>
                            <Text className={styles.description} fontSize={"15px"} mt={1.5}> 
                            Worked with a great team while learning how to interface with APIs and navigate the internals of a software development team. 
                            </Text>
                        </Box>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"} id={"experience2"}>
                    <Text className={styles.date} fontSize={"sm"}>Aug. 2021 - <br/>May 2023</Text>

                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-8px"} left={-8}>2</Text>
                    
                        <Box ml={5}>
                            <Text className={styles.title}><span style={{textDecoration: "underline 2px"}} className={"hideText"}><a href="https://kids4code.org/" rel={"noreferrer"} target={"_blank"}>Kids For Code</a></span> - President</Text>
                            <Text className={styles.description} mt={1.5}>Taught children around the world the fundamentals of programming in Python, Java, C++, and Web Dev.
                            3000+ registered students and 30+ tutors.
                            </Text>
                        </Box>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"} id={"experience3"}>
                    <Text className={styles.date}>Sept. 2021 - <br/>May 2023</Text>

                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-8px"} left={-8}>3</Text>
                    
                        <Box ml={5}>
                            <Text className={styles.title}><span style={{textDecoration: "underline 2px"}} className={"hideText"}><a href="https://www.instagram.com/codedaydc/" rel={"noreferrer"} target={"_blank"}>CodeDay DC</a></span> - Regional Manager</Text>
                            <Text className={styles.description} mt={1.5}>Organized coding hackathons for 300+ students around the DC area and beyond.
                            Obtained Sponsors from: Brave Browser, Vercel, Prefect.io, EastBanc Technologies, and more.</Text>
                        </Box>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"} id={"experience4"}>
                    <Text className={styles.date} fontSize={"sm"}>June 2022 - <br/>May 2023</Text>

                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-8px"} left={-8}>4</Text>
                    
                        <Box ml={5}>
                            <Text className={styles.title}>MCR-SGA - Webmaster</Text>
                            <Text className={styles.description} mt={1.5}>Maintained the <span style={{textDecoration: "underline 2px"}} className={"hideText"}><a href="https://www.mcrsga.com/" rel={"noreferrer"} target={"_blank"}>mcrsga.com</a></span> website and kept social media updated with events around the Montgomery County Public Schools area.</Text>
                        </Box>
                    </Box>
                </Flex>
                
            </Container>
        </>
    )
}


export default Experience;
