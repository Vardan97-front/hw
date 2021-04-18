import React, {Component} from 'react';
import socket from "socket.io-client";

class View extends Component{
    constructor(props) {
        super(props);
        this.state={
            list: {
                one: 0,
                two: 0,
                three: 0,
                four: 0,
                five: 0,
            },
        }
    }

    componentDidMount() {
        this.io = socket('http://localhost:5000');
        // io.on('connect', ()=>{
        //     io.on('new-message', (data) => {
        //         console.log(data)
        //     })
        // })
        this.io.on('new-message', this.handleAddToList)
    }

    _myFilter = (number, list) => {
        let arr = [true]
        for (let num in list ) {
            if (list[num] === number) {
                list[num] = 0;
                arr[0] = false;
                break;
            }
        }
        arr.push(list);
        return arr;
    }

    _addNumber = (number, list) => {
        for (let num in list ) {
            if (list[num] === 0) {
                list[num] = number;
                break;
            }
        }

        return list;
    }

    handleAddToList = (data) => {
        let { list } = this.state;
        const number = +data.number;

        list =  this._myFilter(number, list);

        if (list[0]) {
            list = this._addNumber(number, list[1]);
            this.setState({
                list,
            })
        } else {
            this.setState({
                list: list[1],
            })
        }
    }

    render() {
        const { list } = this.state;
        const item  = [];

        for (let num in list) {
            item.push(<li key={num}>{num} ----- {list[num]}</li>)
        }

        return (
            <div>
                <ul style={{listStyleType:"none"}}>
                    {item}
                </ul>
            </div>
        );
    }
}

export default View;