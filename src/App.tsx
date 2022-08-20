import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {MainView} from "./pages/MainView";
import {BoardView} from "./pages/BoardView";
import GameDataProvider from "./context/GameDataContext";
// import {SaveResultView} from "./pages/SaveResultView";
import {ResultView} from "./pages/ResultView";
import {ResultDetailsView} from "./pages/ResultDetailsView";
import {ChakraProvider} from "@chakra-ui/react";
import {theme} from "./theme/theme";
import {LoginPage} from "./pages/LoginPage";
import {ProtectedPage} from "./pages/ProtectedPage";
import ProtectedRoute from "./components/ProtectedRoutes";
import {supabase} from "./supabase";

// const pss: string = 'd:"%!d(P*p3`!cjH'
const App: React.FC = () => {
    const [todosArray, setTodosArray] = useState([])

    const func = async () => {
        const data = await supabase.from("results").select();

        // const {data, error} = await supabase.from('results').insert([{
        //     id: 1,
        //     user_id: 'a55a7d6a-6b07-46ad-aaf8-c3e97de8f1c8',
        //     user_name: 'matti',
        //     result: 9
        // }])
        console.log(data)
        // console.log({error})
    }

    const fetchTodos = async () => {
        // let { data, error } = await supabase
        //     .from("results")
        //     .select()
        // if (error) console.log("error", error);
        // else { // @ts-ignore
        //     setTodosArray(results);
        // }
        let { data, error } = await supabase
            .from("results")
            .insert({ id: Date.now(),
                user_id:'a55a7d6a-6b07-46ad-aaf8-c3e97de8f1c8',
                user_name: 'matti',
                result: 9
            })
            .single();
        console.log({data})
        // console.log({error})
    };

    console.log(todosArray)

    // const [list, setList] = useState([])
    // const fetchData = async () => {
    //     const {data} = await supabase
    //         .from('post')
    //         .select()
    //     // @ts-ignore
    //     setList(data)
    //     console.log('data:', data)
    // }
    // const createRecord = async () => {
    //     await supabase
    //         .from('posts')
    //         .insert([{
    //             title, content
    //         }])
    //         .single()
    //     setList({title: '', content: ''})
    // }
    // useEffect(() => {
    //     fetchTodos()
    // }, [])
    return (
        <>
            <Router>
                <ChakraProvider theme={theme}>
                    <Switch>
                        <GameDataProvider>
                            <Route exact path="/" component={MainView}/>
                            <Route path="/game" component={BoardView}/>
                            <Route path="/results" component={ResultView}/>
                            <Route path="/signin" component={LoginPage}/>
                            <Route path="/playersresult/:id" component={ResultDetailsView}/>
                            <ProtectedRoute>
                                <Route path="/protected" component={ProtectedPage}/>
                            </ProtectedRoute>
                        </GameDataProvider>
                    </Switch>
                </ChakraProvider>
            </Router>
        </>
    )

}

export default App;
