import { ChakraProvider } from '@chakra-ui/react';
import { FC } from 'react';
import { Routes } from 'react-router';
import { Route } from 'react-router-dom';

import { BoardView } from './pages/BoardView';
import { MainView } from './pages/MainView';
import { ProtectedPage } from './pages/ProtectedPage';
import { ResultView } from './pages/ResultView';
import { theme } from './theme/theme';
// import {LoginPage} from "./pages/LoginPage";

const App: FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/game" element={<BoardView />} />
        <Route path="/results" element={<ResultView />} />
        {/*<Route path="/signin" element={LoginPage}/>*/}
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
