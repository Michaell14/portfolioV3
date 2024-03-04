import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';
import Head from "next/head";
import styles from "../../styles/Projects.module.css";
import ImageBox from '../../components/ImageBox';

export default function Unbeleafable() {
    return (
        <>
            <Head>
                <title>Projects - Unbe-leaf-able AI</title>
            </Head>

            <Container maxW={"3xl"} mt={"7vh"} mb={"1.5vh"}>
                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"5xl"}>#Unbe-leaf-able AI</Text>
                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>Introduction</Text>
            

                <Text fontSize={"xl"} className={styles.description} mt={2}>
                    Through the AI4All program at the University of Maryland (UMD), a team of UMD researchers, other students, and I developed a Python program utilizing the PyTorch library and Leafsnap Plant data. 
                    Our goal was to assess the accuracy of two machine learning models in identifying 185 species of leaves. 
                    <br/>
                    <br/>
                    Over the course of two months, I immersed myself in learning AI networks and then applied my knowledge into a hands-on project:
                </Text>


                <Box mt={10}>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRblQR59jj5sWuERpCp2QdSZB2HaJ6ouDOL9GNO8jBRs-A2mLR2KnCnED-in7fEVn8TnTZ_lzgEuJPf/embed?start=true&loop=true&delayms=3000" frameborder="0" width="720" height="448.5" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                </Box>
                
                      
                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>Process</Text>

                <Text fontSize={"xl"} className={styles.description} mt={2}>
                    <span style={{color: "#99c2b4"}}>Dataset class:</span> Reads image data from the hard disk, prepares the training data.<br/>
                    <br/>
                    <span style={{color: "#99c2b4"}}>Dataloader:</span> Gathers a set of images/data points from the dataset class and prepares a mini
                    batch that is given to the neural network model. Any data received from the dataset class is concatenated into a new dimension
                    which becomes the mini batch
                    <br/>
                    <br/>
                    <span style={{color: "#99c2b4"}}>Neural Network Model:</span> Takes mini batch as input from the data loader
                    <br/>
                    <br/>
                    <span style={{color: "#99c2b4"}}>Loss and Optimizer:</span> Optimizer updates the neural network and then determines how far the predictions are from the groundtruth (how accurate is the
                    neural network)
                </Text>

                <Text className={"subjectTitle"} color={"#c2b199"} fontSize={"3xl"} mt={10}>Additional Photos</Text>
                
                <ImageBox src={"/unbeleafable/test_predictions.png"} 
                    desc={"Grid of predictions done by the VGG11 Deep Convolutional model for image recognition"}/>

                <ImageBox src={"/unbeleafable/definitions.png"} 
                    desc={"List of definitions for AI model"}/>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </Container>
        </>
    )
}
