class Messages {
    static send = (req, res, next) => {
        res.json({
            status : 'ok',
        })
    }
}

export default Messages;