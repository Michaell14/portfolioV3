import React from 'react'
import { Box, Container, Text, Flex, Image, HStack, VStack } from '@chakra-ui/react';
import styles from "../styles/Experience.module.css"

function Experience() {
    return (
        <>
            <Container maxW={"2xl"} mt={"7vh"} mb={"1.5vh"}>
                <Text className={"subjectTitle"} color={"#88806b"} fontSize={"3xl"}>#Experience</Text>
            </Container>

            <Container maxW={"2xl"} pb={20}>
                <Flex gap={5}>
                    <Text className={styles.date} fontSize={"sm"}>July 2022 - <br/>Aug. 2022</Text>

                        
                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-9px"} left={-8}>1</Text>
                    </Box>
                    
                    
                    <Box>
                        <Text className={styles.title}>Verizon - Intern</Text>
                        <Text className={styles.description} fontSize={"15px"} mt={1.5}>Worked with an amazing team at Verizon during my summer internship in 2022. 
                        It was a great opportunity to interface with APIs and learn about business. 
                        </Text>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"}>
                    <Text className={styles.date} fontSize={"sm"}>July 2022 - <br/>Aug. 2022</Text>

                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-9px"} left={-8}>2</Text>
                    </Box>
                    
                    <Box>
                        <Text className={styles.title}>MCR-SGA - Webmaster</Text>
                        <Text className={styles.description} mt={1.5}>Maintaining <span style={{textDecoration: "underline 2px"}} className={"hideText"}><a href="https://www.mcrsga.com/" rel={"noreferrer"} target={"_blank"}>mcrsga.com</a></span> website and keeping social media updating with events and promotions.</Text>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"}>
                    <Text className={styles.date} fontSize={"sm"}>July 2022 - <br/>Aug. 2022</Text>

                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-9px"} left={-8}>3</Text>
                    </Box>
                    
                    <Box>
                        <Text className={styles.title}><span style={{textDecoration: "underline 2px"}} className={"hideText"}><a href="http://kidsforcode.org/" rel={"noreferrer"} target={"_blank"}>Kids For Code</a></span> - President/Teacher</Text>
                        <Text className={styles.description} mt={1.5}>Teaching children around the world the fundamentals of programming.
                        3000+ registered students and 30+ tutors.
                        </Text>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"}>
                    <Text className={styles.date} fontSize={"sm"}>July 2022 - <br/>Aug. 2022</Text>

                    <Box className={styles.line} position={"relative"}>
                        <Text className={styles.number} fontSize={"4xl"} position={"absolute"} bottom={"-9px"} left={-8}>4</Text>
                    </Box>
                    
                    <Box>
                        <Text className={styles.title}><span style={{textDecoration: "underline 2px"}} className={"hideText"}><a href="https://event.codeday.org/dc" rel={"noreferrer"} target={"_blank"}>CodeDay</a></span> - Regional Manager</Text>
                        <Text className={styles.description} mt={1.5}>Organized coding hackathon for students around the DC area. 
                        Supervise teams in looking for sponsorships/venues.</Text>
                    </Box>
                </Flex>
                
            </Container>
        </>
    )
}

export default Experience;
