import {Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react"
import React, {useState} from "react";
import AuthenticationService, {USER_NAME_SESSION_ATTRIBUTE_NAME} from "../components/AuthenticationService";
import {useHistory} from "react-router";
import axios from "axios";


export const LoginView2 = () => {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const API_URL = 'http://localhost:8081'

    const history = useHistory();

    const executeBasicAuthenticationService=(username, password) =>{
        return axios.get(`${API_URL}/basicauth`,
            { headers: { authorization: createBasicAuthToken(username, password) } })
    }

    const executeJwtAuthenticationService =(username, password) =>{
        console.log(username);
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
    }

    const createBasicAuthToken = (username, password) => {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    const registerSuccessfulLogin = (username, password) => {
        //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
        //console.log('registerSuccessfulLogin')
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }

    const registerSuccessfulLoginForJwt = (username, token) => {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    const createJWTToken=(token) =>{
        return 'Bearer ' + token
    }


    const logout=()=> {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    const isUserLoggedIn =()=> {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    const getLoggedInUserName=()=> {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    const setupAxiosInterceptors =(token) =>{
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }




    const clickLogin = (event) => {
        event.preventDefault();
        executeBasicAuthenticationService(email, password)
            .then(() => {
                registerSuccessfulLogin(email, password)
                history.push(`/admin`)
                console.log('ok')
            }).catch(() => {
            console.log('error')
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === "mati@mati.pl" && password === "xxx") {
            console.log("U are logged in")
        } else {
            console.log("No.")
        }
    }


    return (

        <Center h="100%">
            <Flex width="Full" align="center" justifyContent="center">
                <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
                    <Box textAlign="center">
                        <Heading> Login </Heading>
                    </Box>

                    <Box my={4} textAlign="left">
                        <form >
                            <FormControl isRequired>
                                <FormLabel> Email </FormLabel>
                                <Input type="email"
                                       placeholder="test@test.com"
                                       size="lg"
                                       value={email}
                                       onChange={event => setEmail(event.currentTarget.value)}
                                />
                            </FormControl>
                            <FormControl isRequired mt={6}>
                                <FormLabel> Password </FormLabel>
                                <Input type="password"
                                       placeholder="********"
                                       size="lg"
                                       value={password}
                                       onChange={event => setPassword(event.currentTarget.value)}
                                />
                            </FormControl>
                            <Button backgroundColor="primary"
                                    variant="outline" width="full" mt={4} type="submit"
                                    onClick={clickLogin}
                            >
                                'Sign In'
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </Center>
    )
}
