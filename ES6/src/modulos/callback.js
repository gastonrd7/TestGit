//Callback
function requestHandler(req, res) {
    User.findById(req.User, function (err, user) {
        if (err) {
            res.send(err);
        } else {
            Tasks.findById(user.Tasks, function (err, tasks) {
                if (err) {
                    return res.send(error);
                } else {
                    Tasks.completed = true;
                    Tasks.save(function (err) {
                        if (err) {
                            return res.send(error);
                        } else {
                            return res.send('Task completed.');
                        }
                    });
                }
            });
        }
    });

}