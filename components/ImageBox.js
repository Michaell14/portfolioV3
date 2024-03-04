import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import styles from "/styles/Projects.module.css";
import Image from 'next/image';

export default function ImageBox({src, desc = "", height = "500"}) {
    return (
        <>
            <Box mt={5}>
                <Image height={height} width={"1000px"} objectFit={"cover"} src={src} style={{borderRadius:"5px"}}/>
            </Box>

            <Text className={styles.description} mt={2}>{desc}</Text>
        </>
    )
}
