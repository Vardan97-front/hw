import React, {Component} from 'react';
import socket from "socket.io-client";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
    }

    componentDidMount() {
        this.io = socket('http://localhost:5000');
        // io.on('connect', ()=>{
        //     io.on('new-message', (data) => {
        //         console.log(data)
        //     })
        // })
    }

    sendMessage = (ev) => {
        this.io.emit("send-message", {number: ev.target.innerHTML});
    }

    render() {
        return (
            <>
                <button type="submit" onClick={this.sendMessage}>1</button>
                <button type="submit" onClick={this.sendMessage}>2</button>
                <button type="submit" onClick={this.sendMessage}>3</button>
                <button type="submit" onClick={this.sendMessage}>4</button>
                <button type="submit" onClick={this.sendMessage}>5</button>
            </>
        )
    }
}

export default Home;