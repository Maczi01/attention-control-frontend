import React from "react";
import Clock from "./Clock";

class CurrentTimebox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaused: false,
            isRunning: false,
            pausesCount: 0,
            elapsedTime: 0,
        };
        this.handleStart = this.handleStart.bind(this);
        this.handlePause = this.handlePause.bind(this);
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

    handlePause() {
        this.setState(
            function (prevState) {
                const isPaused = !prevState.isPaused;
                isPaused ? this.stopCounting() : this.startCounting();
                return {
                    isPaused,
                    pausesCount: isPaused ? prevState.pausesCount + 1 : prevState.pausesCount
                }
            }
        )
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
        const {isRunning, isPaused, elapsedTime} = this.state;
        const {totalTimeInMinutes, onEdit, isEditable} = this.props;
        let playVisible = "button__play"
        const totalTimeInSeconds = totalTimeInMinutes * 60;
        const timeToLeftInSeconds = totalTimeInSeconds - elapsedTime;
        const progress = (timeToLeftInSeconds / totalTimeInSeconds) * 100;
        if (timeToLeftInSeconds === 0) this.stopCounting();
        return (
            <>
                <div>
                    <Clock second={timeToLeftInSeconds}/>
                    <button onClick={this.handleStart} disabled={isRunning}>Start</button>
                    <button onClick={this.handlePause} disabled={!isRunning}>{isPaused ? "Wznów" : "Pauzuj"}</button>
                    <button onClick={this.handleStop} disabled={!isRunning}>Stop</button>
                    <button onClick={onEdit} disabled={isEditable}>Edytuj</button>
                </div>
            </>
        )
    }
}

export default CurrentTimebox