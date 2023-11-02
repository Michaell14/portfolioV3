import React from 'react';
import { Box, Container, Text, Image, } from '@chakra-ui/react';
import Head from "next/head"
import { motion } from 'framer-motion';
import styles from "../../styles/Projects.module.css";
import ImageBox from '../../components/ImageBox';

export default function bitcamp() {
    return (
        <>
            <Head>
                <title>Projects - Hotdog Game </title>
            </Head>

            <Container maxW={"3xl"} mt={"7vh"} mb={"1.5vh"}>
                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"5xl"}>#Hotdog Game</Text>
                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>Introduction</Text>
            

                <Text fontSize={"xl"} className={styles.description} mt={2}>
                    Enter your own endless hotdog eating competition with &quot;Eat the Hotdog&quot;, an innovative microcontroller game designed at University of Maryland&apos;s Bitcamp Hackathon 2023. 
                    In this hands-on experience, players immerse themselves in an interactive gaming experience, where a controller becomes the hotdog and the objective is to feed the hotdog to the hungry customer.
                </Text>

                <ImageBox src={"/bitcamp/circuit_model.jpg"} 
                    desc={"Wire diagram of Arduino and accelerometer circuit"}/>
                      
                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>Process</Text>

                <Text fontSize={"xl"} className={styles.description} mt={2}>
                The game utilizes an Arduino-based microcontroller attached to an accelerometer. Players maneuver the &quot;virtual hotdog&quot; on the screen by turning and tilting the physical controller. 
                The main objective is to skillfully rotate the controller to cook the hotdog perfectly before the hungry customer takes a bite.
                <br/><br/>
                
                <span style={{color: "#99c2b4"}}>Design:</span> This game was designed in Unity in C# and in Tinkercad for the 3D component.<br/>
                <br/>
                <span style={{color: "#99c2b4"}}>Prototyping:</span> Over 8 different 3D models were created throughout the hackathon duration.
                The main problem that we faced was the 3D printing film limit because our models would use more filament
                than what was allowed.<br/>
                <br/>
                <span style={{color: "#99c2b4"}}>Post-Processing:</span> We removed unnecessary structures that would make our controller physically lighter
                and would not impact its structural integrity. We assembled the microcontroller onto the 
                printed controller to test for fit.<br/>
                <br/>
                <span style={{color: "#99c2b4"}}>Finalization:</span> After smoothing out some edges, we came up with our final design that allowed
                players to easily grip the controller while ensuring a strong structure that would not break.
                </Text>

                <ImageBox src={"/bitcamp/accelerometer.jpg"} 
                    desc={"Accelerometer shows x, y, and z angles based on real life orientation"}/>
               

                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>Conclusion</Text>
              
                <Text fontSize={"xl"} className={styles.description} mt={2}>
                In reflection, the experience of creating &quot;Eat the Hotdog&quot; and building this 3D printed controller taught me lessons in design and user experience.
                Throughout the hours of designing, modeling, and printing stages, I learned the significance of attention to detail in crafting functional components. 
                This project combined 3D printing technology in enhancing the gaming experience to make it more physically interactive.
                Although we have completed the production of this project, I have learned how to combine game development with 3D design, which is a combination that I will continue to use in future projects.
                </Text>

                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>Additional Photos</Text>

                <ImageBox src={"/bitcamp/nick_painting.jpg"} 
                    desc={"Nick painting nature on the collaborative painting board at Bitcamp 2023!"}/>

                <ImageBox src={"/bitcamp/red_test_playing.jpg"}
                    desc={"Player loses when the hotdog does not align with the mouth"}/>

                <ImageBox src={"/bitcamp/participants.jpg"}
                    desc={"High view of all the participants at Bitcamp 2023"}/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Container>
        </>
    )
}
