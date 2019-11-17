exports.controller = (req, res) => {
    console.log("Get Frequency By Id Request");
    res.send(req.params);
}