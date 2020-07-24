const promesa = new Promise((resolve, reject) => {
    function requestHandler(req, res) {
        User.findById(req.User);
        promesa.then(function (User) {
            res.send(User);
        });
        promesa.then(function (task) {
            task.completed = true;
            return task.save();
        })
        promesa.then(function (errors) {
            res.send('Task completed.');
        });
        promesa.catch(function (errors) {
            res.send(errors);
        });
    }
});