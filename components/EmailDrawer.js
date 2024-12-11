import React, { useRef, useState } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { GrSend } from "react-icons/gr";
import emailjs from '@emailjs/browser';
import { Input, HStack, FormLabel, IconButton } from '@chakra-ui/react';
import toast, { Toaster } from 'react-hot-toast';

export default function EmailDrawer({ onClose, isOpen }) {
    const form = useRef();
    const [disabled, setDisabled] = useState(false);

    function sendEmail(e) {
        e.preventDefault();
        setDisabled(true);

        emailjs.sendForm('service_82pnpd8', 'template_2rs2ghj', form.current, 'rID95kHXL6tC-6Opp')
            .then((result) => {
                toast('Received, Thank you!', {
                    icon: '💖',
                });
                setDisabled(false);
                onClose();
            }, (error) => {
                console.log(error.text);
                setDisabled(false);
            });
    }

    return (
        <>
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton color={"white"} />
                    <DrawerHeader borderBottomWidth='1px' borderColor={"#c2b199"} bgColor={"#88806b"} color={'#fffbf2'} className={"font"}>Send me a Rec!</DrawerHeader>
                    <DrawerBody bgColor={"#88806b"}>
                        <form ref={form} onSubmit={sendEmail} className="font">
                            <FormLabel color={"#fffbf2"}>Name</FormLabel>
                            <Input type="text" name="user_name" defaultValue={"anonymous"} color={'#fffbf2'} borderColor={"#c2b199"} focusBorderColor='#c2bf99' />
                            <FormLabel color={"#fffbf2"} mt={2}>Message</FormLabel>

                            <HStack>
                                <Input name="message" placeholder={"the rec"} _placeholder={{ color: '#fffbf2' }} color={'#fffbf2'} borderColor={"#c2b199"} focusBorderColor='#c2bf99' />
                                <IconButton disabled={disabled} type="submit" aria-label='Send Rec' icon={<GrSend />} bgColor={"#fff7e4"} borderWidth={"1.2px"} />
                            </HStack>

                        </form>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>

    )
}
