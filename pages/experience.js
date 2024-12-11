import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react';
import styles from "../styles/Experience.module.css";
import { motion } from 'framer-motion';
import { experiences, community } from '../lib/experienceData';


function Experience() {
    const handleClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <>
            {experiences.map((experience, index) => (
                <motion.div
                    whileHover={{ backgroundColor: "#3f3f46", color: "#a1a1aa", shadow: "2xl", cursor: "pointer" }}
                    duration={.15}
                    style={{ padding: 10, borderRadius: 10, color: "#747578", marginTop: (index == 0) ? "0px" : "10px" }}
                    onClick={() => { handleClick(experience["url"]) }}
                    key={index}
                    initial={{ opacity: .45 }}
                    whileInView={{ opacity: 1, transition: { duration: .3 } }}
                    viewport={{ amount: .9 }}
                >
                    <Flex gap={5}>
                        <Text className={styles.date} fontSize={"sm"}>{experience["date_start"]} - <br />{experience["date_end"]}</Text>
                        <Box ml={5} position={"relative"}>
                            <Text className={styles.title}><span style={{ color: "#c2b199" }} className={"hideText"}>{experience["org"]}</span> - <span style={{ color: "#99c2b4" }}>{experience["role"]}</span></Text>
                            <Text className={styles.description} fontSize={"15px"} mt={1.5}>
                                {experience["description"]}
                            </Text>
                        </Box>
                    </Flex>
                </motion.div>
            ))}

            <Box mt={"6vh"} mb={"1.5vh"}>
                <Text className={"subjectTitle"} fontSize={"4xl"} color={"#c2b199"}>#Community</Text>
            </Box>

            <Box pb={20}>
                {community.map((experience, index) => (
                    <motion.div
                        whileHover={{ backgroundColor: "#3f3f46", color: "#a1a1aa", shadow: "2xl", cursor: "pointer" }}
                        duration={.15}
                        style={{ padding: 10, borderRadius: 10, color: "#747578", marginTop: (index == 0) ? "0px" : "20px" }}
                        key={index}
                        initial={{ opacity: .45 }}
                        whileInView={{ opacity: 1, transition: { duration: .4 } }}
                        viewport={{ amount: .9 }}
                    >
                        <Flex gap={5}>
                            <Text className={styles.date} fontSize={"sm"}>{experience["date_start"]} - <br />{experience["date_end"]}</Text>
                            <Box ml={5} position={"relative"}>
                                <Text className={styles.title}><span style={{ color: "#c2b199" }} className={"hideText"}>{experience["org"]}</span> - <span style={{ color: "#99c2b4" }}>{experience["role"]}</span></Text>
                                <Text className={styles.description} fontSize={"15px"} mt={1.5}>
                                    {experience["description"]}
                                </Text>
                            </Box>
                        </Flex>
                    </motion.div>
                ))}
            </Box>
        </>
    )
}


export default Experience;
