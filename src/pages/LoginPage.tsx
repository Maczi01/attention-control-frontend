import {Button, Center, Flex} from "@chakra-ui/react"
import React from "react";
import {Link} from "react-router-dom";
import {FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/react";
import {supabase} from "../supabase";
import {Text} from '@chakra-ui/react'
import {useAuth} from "../auth/Auth";

export const LoginPage: React.FC = () => {

    const [email, setEmail] = React.useState<string>("")
    const [message, setMessage] = React.useState<string>("")
    const auth = useAuth()
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // @ts-ignore
        const signIn = await auth.login(email)
        // @ts-ignore
        if (signIn.error) {
            // @ts-ignore
            setMessage(signIn.error.message)
        } else {
            setMessage("Successfully sent link")
        }
        setEmail('')
    }

    function handleChange(target: EventTarget | (EventTarget & HTMLInputElement)) {
        const {value} = target as HTMLInputElement;
        setEmail(value)
    }

    return (
        <Center h="100%">
            <Flex direction="column" align="center" justify="space-around" width="80%" height="100%"
                  backgroundColor="background"
                  py="20%" my="auto"
                  mx="auto">
                <Text>Sign in</Text>

                <FormControl>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email' onChange={e => handleChange(e.target)}/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    <Button
                        mt={4}
                        colorScheme='teal'
                        type='submit'
                    >
                        Submit
                    </Button>
                </FormControl>
            </Flex>
        </Center>
    )
};
