import React from 'react';

class GameClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }


    // componentDidMount() {
    //     async () => {
    //         const response = await axios.get(`${BASE_URL}/users`);
    //         return response.data;

    //
    //     Users.getUsers()
    //         .then(users => this.setState({users}))
    //         .catch(error => console.log("Can not load data"));
    //     Equipy.getEquipy()
    //         .then(assets => this.setState({assets}))
    //         .catch(error => console.log("Can not load data"));
    //     // Assignment.getAssignment()
    //     //     .then(assignments => this.setState({assignments}))
    //     //     .catch(error => console.log("Can not load data"));
    // }

    render() {
        return (
            <div>
                <h1>Witaj, świecie!</h1>
                <h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default GameClass