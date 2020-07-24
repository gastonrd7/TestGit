 async function requestHandler(req, res) {
     try {
         const user = await User.findById(req.User);
         const task = await task.findById(req.task);
         task.completed = true;
         await task.save();
         res.send('Task completed.');
     } catch (error) {
         res.send(error);
     }
 }