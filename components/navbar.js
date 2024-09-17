import React from 'react';
import { Box, Container, Text, Image, HStack } from '@chakra-ui/react';
import Link from "next/link";
import { useRouter } from "next/router"
import styles from "./Navbar.module.css";

const navigation = [
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" }
]

function Navbar() {
    const router = useRouter();

    return (
        <>
            <Container maxW={"3xl"} mt={10}>
                <HStack justify={"space-between"}>

                    <Link passHref href="/">
                        <Image src="/me.jpg" width={"100px"} objectFit={"cover"} height={"96px"} borderRadius={"full"} borderWidth={"2px"} borderColor={"green"} _hover={{ cursor: "pointer" }} alt="Picture of Michael" />
                    </Link>

                    <Box display={"inline-flex"} gap={7}>
                        {navigation.map((item, index) => (
                            <Text key={index} className={router.route === item.href ? styles.completedTitle : styles.navTitle} fontSize={"lg"} color={router.route === item.href ? "#DDB176" : "#747578"}><Link href={item.href} passHref>{item.name}</Link></Text>
                        ))}
                    </Box>
                </HStack>

            </Container>

        </>
    )
}

export default Navbar;
