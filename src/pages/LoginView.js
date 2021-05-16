import {Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Center,
    CircularProgress } from "@chakra-ui/react"
import React from "react";

export const LoginView = () => (
    <Center h="100%">
        <Flex width="Full" align="center" justifyContent="center">
        <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
            <Box textAlign="center">
                <Heading> Login </Heading>
            </Box>
            <Box my={4} textAlign="left">
                {/*<form onSubmit={handleSubmit}>*/}
                <form>
                    <FormControl isRequired>
                        <FormLabel> Email </FormLabel>
                        <Input type="email"
                               placeholder="test@test.com"
                               size="lg"
                               // onChange = {event => setEmail(event.currentTarget.value)}
                        />
                    </FormControl>
                    <FormControl isRequired mt={6}>
                        <FormLabel> Password </FormLabel>
                        <Input type="password"
                               placeholder="********"
                               size="lg"
                               // onChange={event => setPassword(event.currentTarget.value)}
                        />
                    </FormControl>
                    <Button backgroundColor="primary"
                            variant="outline" width="full" mt={4} type="submit">
                            'Sign In'
                    </Button>
                </form>
            </Box>
        </Box>
        </Flex>
    </Center>
);