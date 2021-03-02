import React from "react";
import Clock from "./Clock";
import {Button, ButtonGroup, Grid, Flex,} from "@chakra-ui/react"
import StartWindow from "./StartWindow";
import ResultWindow from "./ResultWindow";

class CurrentTimebox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaused: false,
            isRunning: false,
            elapsedTime: 0,
            result: 0
        };
        this.handleStart = this.handleStart.bind(this);
        this.stopCounting = this.stopCounting.bind(this);
        this.startCounting = this.startCounting.bind(this);
        this.interval = null;
    }

    componentWillUnmount() {
        this.stopCounting()
    }

    handleStart() {
        this.setState({
            isRunning: true
        })
        this.startCounting();
    }

    // showResultModal() {
    //     this.setState({
    //         resultModal: true
    //     })
    // }

    startCounting() {
        if (this.interval === null) {
            this.interval = window.setInterval((() => {
                this.setState(
                    (prevState) =>
                        ({elapsedTime: prevState.elapsedTime + 1}))
            }), 1000)
        }
    }

    stopCounting() {
        window.clearInterval(this.interval)
        this.interval = null;
    }

    getResults() {
        this.props.getResults()
    }dominium

    // handleStop() {
    //     this.setState({
    //             isRunning: false,
    //             isPaused: false,
    //             elapsedTime: 0,
    //             pausesCount: 0,
    //         }
    //     )
    //     this.stopCounting()
    // }

    render() {
        const {isRunning, elapsedTime, resultModal, result} = this.state;
        const {totalTimeInMinutes, onEdit, isEditable, isOpen, onClose, isOpenReportModal, onOpenReportModal, onCloseReportModal} = this.props;
        const totalTimeInSeconds = totalTimeInMinutes * 60;
        const timeToLeftInSeconds = totalTimeInSeconds - elapsedTime;
        if (timeToLeftInSeconds === 0) {
            this.getResults();
            this.stopCounting();
            onOpenReportModal();
        }
        console.log(timeToLeftInSeconds)
        return (
            <>
                <div>
                    <StartWindow
                        isOpen={isOpen}
                        onClose={onClose}
                        handleStart={this.handleStart}/>
                    <ResultWindow
                        isOpen={isOpenReportModal}
                        result={result}
                    />

                </div>
            </>
        )
    }
}

export default CurrentTimebox