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
                    whileHover={{ color: "#c2b199" }}
                    duration={.3}
                    style={{ color: "#88806b" }}
                >
                    <Text className={"subjectTitle"} fontSize={"4xl"}>#Experience</Text>
                </motion.div>
            </Container>

            <Container maxW={"3xl"}>
                <Flex gap={5}>
                    <Text className={styles.date} fontSize={"sm"}>Feb. 2024 - <br />Present</Text>
                    <Box className={styles.line} position={"relative"}>
                        <Box ml={5}>
                            <Text className={styles.title}><span style={{ textDecoration: "underline 2px" }} className={"hideText"}><a href="https://pennapps.com/" rel={"noreferrer"} target={"_blank"}>PennApps</a></span> - Logistics Manager</Text>
                            <Text className={styles.description} fontSize={"15px"} mt={1.5}>
                                Organize the logistics of UPenn&apos;s premier hackathon by coordinating venue logistics, sponsorships, accommodations, and resource allocation to ensure a smooth event.
                            </Text>
                        </Box>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"}>
                    <Text className={styles.date} fontSize={"sm"}>Jan. 2024 - <br />Present</Text>
                    <Box className={styles.line} position={"relative"}>
                        <Box ml={5}>
                            <Text className={styles.title}>Penn <span style={{ textDecoration: "underline 2px" }} className={"hideText"}><a href="https://community.pennspark.org/" rel={"noreferrer"} target={"_blank"}>SPARK</a></span> - Red Developer</Text>
                            <Text className={styles.description} fontSize={"15px"} mt={1.5}>
                                Working in a team to develop a centralized application for all University of Pennsylvania Students.
                                Using tools like NextJS, Firebase, Tailwind, and more.
                            </Text>
                        </Box>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"}>
                    <Text className={styles.date} fontSize={"sm"}>July 2022 - <br />Sept. 2022</Text>
                    <Box className={styles.line} position={"relative"}>
                        <Box ml={5}>
                            <Text className={styles.title}>Verizon - SWE Intern</Text>
                            <Text className={styles.description} fontSize={"15px"} mt={1.5}>
                            During my internship at Verizon, I collaborated with a skilled team to integrate APIs, while gaining hands-on experience with the software development lifecycle, team dynamics, and project workflows in a large-scale tech environment.
                            </Text>
                        </Box>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"}>
                    <Text className={styles.date}>Sept. 2021 - <br />May 2023</Text>

                    <Box className={styles.line} position={"relative"}>
                        <Box ml={5}>
                            <Text className={styles.title}><span style={{ textDecoration: "underline 2px" }} className={"hideText"}><a href="https://www.instagram.com/codedaydc/" rel={"noreferrer"} target={"_blank"}>CodeDay DC</a></span> - Regional Manager</Text>
                            <Text className={styles.description} mt={1.5}>Organized coding hackathons for 300+ students around the DC area and beyond.
                                Obtained Sponsors from: Brave Browser, Vercel, Prefect.io, EastBanc Technologies, and more.</Text>
                        </Box>
                    </Box>
                </Flex>
            </Container>

            <Container maxW={"3xl"} mt={"7vh"} mb={"1.5vh"}>
                <motion.div
                    whileHover={{ color: "#c2b199" }}
                    duration={.3}
                    style={{ color: "#88806b" }}
                >
                    <Text className={"subjectTitle"} fontSize={"4xl"}>#Community</Text>
                </motion.div>
            </Container>

            <Container maxW={"3xl"} pb={20}>
                <Flex gap={5}>
                    <Text className={styles.date} fontSize={"sm"}>Feb. 2024 - <br />Present</Text>
                    <Box className={styles.line} position={"relative"}>
                        <Box ml={5}>
                            <Text className={styles.title}><span style={{ textDecoration: "underline 2px" }} className={"hideText"}><a href="https://www.pclassic.org/organizers" rel={"noreferrer"} target={"_blank"}>PClassic</a></span> - Organizer</Text>
                            <Text className={styles.description} mt={1.5}>
                                Helped organize Philadelphia&apos;s largest high school competitive programming competition by designing programming problems,
                                locating sponsorships, and maintaining the pclassic.org website.
                            </Text>
                        </Box>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"}>
                    <Text className={styles.date} fontSize={"sm"}>Aug. 2021 - <br />May 2023</Text>
                    <Box className={styles.line} position={"relative"}>
                        <Box ml={5}>
                            <Text className={styles.title}><span style={{ textDecoration: "underline 2px" }} className={"hideText"}><a href="https://kids4code.org/" rel={"noreferrer"} target={"_blank"}>Kids For Code</a></span> - President</Text>
                            <Text className={styles.description} mt={1.5}>
                                Organized a team of 30+ tutors. Taught 3000+ children around the world the fundamentals of programming in Python, Java, Web Dev, and C++.
                                &quot;Best Free Education Resource 2021&quot; by Mom Blog Society</Text>
                        </Box>
                    </Box>
                </Flex>

                <Flex gap={5} mt={"60px"}>
                    <Text className={styles.date} fontSize={"sm"}>June 2022 - <br />May 2023</Text>
                    <Box className={styles.line} position={"relative"}>
                        <Box ml={5}>
                            <Text className={styles.title}>MCR-SGA - Webmaster</Text>
                            <Text className={styles.description} mt={1.5}>Maintained the <span style={{ textDecoration: "underline 2px" }} className={"hideText"}><a href="https://www.mcrsga.com/" rel={"noreferrer"} target={"_blank"}>mcrsga.com</a></span> website and kept social media updated with events around the Montgomery County Public Schools area.</Text>
                        </Box>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}


export default Experience;
