import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react"
import {AuthProvider} from './auth/Auth';

ReactDOM.render(
    <AuthProvider>
        <ChakraProvider>
            <App/>
        </ChakraProvider>
    </AuthProvider>,
    document.getElementById('root')
)
;
