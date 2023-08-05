import usercontroller from '../controller/usercontroller.js';
import taskcontroller from '../controller/taskcontroller.js';
import express from 'express';
import bodyParser from 'body-parser';
import crypto from 'crypto';
import authmiddleware from '../middleware/userauth.js';
const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/register', async (req, res) => {
    const usr = req.body;
    console.log(usr);
    await usercontroller.adduser(usr).then(user => {
        //console.log("route log register", user)
        res.status(201).json(user)

    }).catch(error => {
        res.status(500).json(error)
    })
});

router.post('/login', async (req, res) => {
    const usr = req.body;
    await usercontroller.loginuser(usr).then(user => {
        console.log("route log", user.resp, user.usr)
        res.status(201).json(user)
    }).catch(error => {
        console.log("route error", error)
        res.status(500).json(error)
    })
});


router.post('/addtask', async (req, res) => {
    const usr = req.body;
    await taskcontroller.addtask(usr).then(user => {
        res.status(201).json(user)
    }).catch(error => {
        console.log("route error", error)
        res.status(500).json(error)
    })
});



router.get('/viewtasks', authmiddleware, async (req, res) => {
    await taskcontroller.gettask(req.query).then(tsk => {
        res.status(200).json(tsk)
    }).catch(error => {
        res.status(500).json(error)
    })
});


router.post('/deletetask', async (req, res) => {
    console.log("delete query", req.body)
    await taskcontroller.deletetask(req.body?.id).then(tsk => {
        res.status(200).json(tsk)
    }).catch(error => {
        res.status(500).json(error)
    })
});

router.post('/updatetask', async (req, res) => {
    console.log("Update querry", req.body)
    await taskcontroller.updatetask(req.body).then(tsk => {
        res.status(200).json(tsk)
    }).catch(error => {
        res.status(500).json(error)
    })
})

export default router;