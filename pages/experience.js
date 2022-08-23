import React, { useEffect} from 'react'
import { Box, Container, Text, Flex, Image, HStack, VStack, calc } from '@chakra-ui/react';
import styles from "../styles/Experience.module.css";
import Head from "next/head";
import { motion } from 'framer-motion';
import anime from 'animejs';

function Experience() {

    useEffect(() => {
        if (typeof window !== "undefined"){
            for (let i=1; i<=4; i++){
                anime({
                    targets: `#experience${i}`,
                    translateY: -10,
                    duration: 800,
                    delay: 65 * (i-1),
                    easing: 'easeOutSine'
                  })
            }
        }
    }, [])

    
    return (
        <>
            <Head>
                <title>Experience - Michael Li</title>
            </Head>

            <Container maxW={"2xl"} mt={"7vh"} mb={"1.5vh"}>
                <motion.div
                    whileHover={{color:"#c2b199"}}
                    duration={.3}
                    style={{color:"#88806b"}}
                    >
                    <Text className={"subjectTitle"} fontSize={"3xl"}>#Experience</Text>
                </motion.div>
            </Container>

            <Container maxW={"2xl"} pb={20} mt={"20px"}>
                <Flex gap={5} id={"experience1"}>
                    <Text className={styles.date} fontSize={"sm"}>July 2022 - <br/>Aug. 2022</Text>

                        
                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-8px"} left={-8}>1</Text>
                    
                        <Box ml={5}>
                            <Text className={styles.title}>Verizon - Intern</Text>
                            <Text className={styles.description} fontSize={"15px"} mt={1.5}>Worked with an amazing team at Verizon during my summer internship in 2022. 
                            It was a great opportunity to interface with APIs and learn about business. 
                            </Text>
                        </Box>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"} id={"experience2"}>
                    <Text className={styles.date} fontSize={"sm"}>June 2022 - <br/>Present</Text>

                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-8px"} left={-8}>2</Text>
                    
                        <Box ml={5}>
                            <Text className={styles.title}>MCR-SGA - Webmaster</Text>
                            <Text className={styles.description} mt={1.5}>Maintaining <span style={{textDecoration: "underline 2px"}} className={"hideText"}><a href="https://www.mcrsga.com/" rel={"noreferrer"} target={"_blank"}>mcrsga.com</a></span> website and keeping social media updating with events and promotions.</Text>
                        </Box>
                    </Box>
                    
                    
                </Flex>

                <Flex gap={5} mt={"60px"} id={"experience3"}>
                    <Text className={styles.date} fontSize={"sm"}>Aug. 2021 - <br/>Present</Text>

                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-8px"} left={-8}>3</Text>
                    
                        <Box ml={5}>
                            <Text className={styles.title}><span style={{textDecoration: "underline 2px"}} className={"hideText"}><a href="http://kidsforcode.org/" rel={"noreferrer"} target={"_blank"}>Kids For Code</a></span> - President/Teacher</Text>
                            <Text className={styles.description} mt={1.5}>Teaching children around the world the fundamentals of programming.
                            3000+ registered students and 30+ tutors.
                            </Text>
                        </Box>
                    </Box>
                    
                    
                </Flex>

                <Flex gap={5} mt={"60px"} id={"experience4"}>
                    <Text className={styles.date}>Sept. 2021 - <br/>Present</Text>

                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-8px"} left={-8}>4</Text>
                    
                        <Box ml={5}>
                            <Text className={styles.title}><span style={{textDecoration: "underline 2px"}} className={"hideText"}><a href="https://event.codeday.org/dc" rel={"noreferrer"} target={"_blank"}>CodeDay</a></span> - Regional Manager</Text>
                            <Text className={styles.description} mt={1.5}>Organized coding hackathon for students around the DC area. 
                            Supervise teams in looking for sponsorships/venues.</Text>
                        </Box>
                    </Box>
                    
                    
                </Flex>
                
            </Container>
        </>
    )
}


export default Experience;
