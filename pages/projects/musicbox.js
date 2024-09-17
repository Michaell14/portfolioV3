import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import Head from "next/head"
import styles from "../../styles/Projects.module.css";
import ImageBox from '../../components/ImageBox';

export default function musicbox() {
    return (
        <>
            <Head>
                <title>Projects - Spotify API Music Box </title>
            </Head>

            <Container maxW={"3xl"} mt={"7vh"} mb={"1.5vh"}>
                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"5xl"}>#RFID Music Player</Text>
                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>Introduction</Text>
            

                <Text fontSize={"xl"} className={styles.description} mt={2}>
                    This project integrates Raspberry Pi 4, RFID technology, and the Spotify API to create an interactive music player. 
                    By placing RFID scanners in physical album covers, users can trigger the Pi to access the Spotify API and play specific songs associated with each card.
                    The project involves a speaker, a Raspberry Pi, an RFID reader module, RFID cards/tags, and an internet-connected device with Spotify.
                </Text>

                <ImageBox src={"/musicbox/final_setup.webp"} 
                    desc={"Final setup of Spotify Music box and speaker on my table"}/>
                      
                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>Components</Text>

                <Text fontSize={"xl"} className={styles.description} mt={2}>
                    <span style={{color: "#99c2b4"}}>Raspberry Pi 4:</span> Serves as the core controller to read RFID card information and interact with the Spotify API.
                    <br/>
                    <span style={{color: "#99c2b4"}}>RFID Reader Module:</span> Scans RFID cards or tags to retrieve unique identifiers for each album/song.
                    <br/>
                    <span style={{color: "#99c2b4"}}>Speaker:</span> Plays the selected music from Spotify.
                    <br/>
                </Text>

                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>How it Works</Text>
                <Text fontSize={"xl"} className={styles.description} mt={2}>
                    <span style={{color: "#99c2b4"}}>RFID Setup:</span> Each album card has an RFID tag which is associated with a specific album/song on Spotify. The Raspberry Pi is pre-programmed to recognize the unique IDs of these cards and associate them with corresponding Spotify tracks.
                    <br/><br/>
                    <span style={{color: "#99c2b4"}}>RFID Scanning:</span> When a user places an album card near the RFID reader, the reader identifies the unique code on the card.
                    <br/><br/>
                    <span style={{color: "#99c2b4"}}>Raspberry Pi-Spotify Interaction:</span> The Raspberry Pi processes the scanned RFID code and uses it to make a request to the Spotify API, which identifies the associated song or playlist.
                    <br/><br/>
                    <span style={{color: "#99c2b4"}}>Music Playback:</span> The Spotify API responds to the request by instructing the Raspberry Pi to play the selected track through the connected speaker.
                </Text>


                <ImageBox src={"/musicbox/rfid_values.webp"} 
                    desc={"RFID values are associated with their spotify track id"}/>
               

                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>Conclusion</Text>
              
                <Text fontSize={"xl"} className={styles.description} mt={2}>
                Through the process of building this RFID-based music player, I&apos;ve learned skills that have significantly enriched my understanding of Raspberry Pi technology and more.
                <br/><br/>
                <span style={{color: "#99c2b4"}}>Hardware-Software Integration:</span> I&apos;ve gained a deep appreciation for the integration of hardware and software. Understanding how the RFID reader interacts with the Arduino/Raspberry Pi and how these devices communicate with Spotify&apos;s API was a fascinating learning curve. This has expanded my understanding of how different technologies can work together seamlessly.
                <br/><br/>
                <span style={{color: "#99c2b4"}}>API Integration and Internet of Things (IoT):</span> I delved into the world of APIs and IoT by connecting the Arduino/Raspberry Pi to an external service like Spotify. This exposed me to the power and potential of integrating various devices and online services to create innovative applications.
                <br/><br/>
                <span style={{color: "#99c2b4"}}>RFID Technology:</span> The intricacies of RFID technology, its functionality, and practical applications have been an eye-opening experience. I learned how RFID cards and tags can be used for identification and how they interact with electronic systems. 
                </Text>

                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>Additional Photos</Text>

                <Box mt={"2.5rem"}>
                    <video width="750" height="500" controls>
                        <source src="/musicbox/working_demo.mov" type="video/mp4"/>
                    </video>

                    <Text className={styles.description} mt={2}>Shows how the music changes when a different album card is tapped</Text>
                </Box>

                <ImageBox src={"/musicbox/michael_soldering.webp"} 
                    desc={"I am soldering the RFID reader to the Raspberry Pi 4"}/>

                <ImageBox src={"/musicbox/accelerometer_soldered.webp"}
                    desc={"Close-up of soldering work on the RFID reader"}
                    height={"440px"}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Container>
        </>
    )
}
