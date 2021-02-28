import React from "react";
import Clock from "./Clock";
import {Button, ButtonGroup, Grid, Flex,} from "@chakra-ui/react"
import StartWindow from "./StartWindow";

class CurrentTimebox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaused: false,
            isRunning: false,
            elapsedTime: 0,
        };
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
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
        this.props.getResults();
    }

    handleStop() {
        this.setState({
                isRunning: false,
                isPaused: false,
                elapsedTime: 0,
                pausesCount: 0,
            }
        )
        this.stopCounting()
    }

    render() {
        const {isRunning, elapsedTime} = this.state;
        const {totalTimeInMinutes, onEdit, isEditable, isOpen, onClose} = this.props;
        const totalTimeInSeconds = totalTimeInMinutes * 60;
        const timeToLeftInSeconds = totalTimeInSeconds - elapsedTime;
        if (timeToLeftInSeconds === 0) {
            this.getResults();
            this.stopCounting();
        }
        console.log(timeToLeftInSeconds)
        return (
            <>
                <div>
                    <StartWindow isOpen={isOpen}
                           onClose={onClose}
                           handleStart={this.handleStart}/>
                </div>
            </>
        )
    }
}

export default CurrentTimebox