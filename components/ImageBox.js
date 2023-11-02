import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import styles from "/styles/Projects.module.css";

export default function ImageBox({src, desc = ""}) {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "390px",
                    cover: "fill",
                    marginTop: "2.5rem",
                    borderRadius: 5,
                    background:`url(${src}) center/cover no-repeat`,
            }} borderRadius={"4px"}></Box>

            <Text className={styles.description} mt={2}>{desc}</Text>
        </>
    )
}
