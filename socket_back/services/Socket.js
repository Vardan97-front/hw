import socketIo from "socket.io";

class Socket {
    static init(server) {
        const io = socketIo(server,{
            cors: {
                origin: "*",
            }
        })

        io.on('connect', (client) => {
            client.on("send-message", (data) => {
                io.emit('new-message', data);
            })
            // setTimeout(()=>{
            //     client.emit("new-message", {data: "hello"})
            // }, 1500)
        })
    }
}

export default Socket;