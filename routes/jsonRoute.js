const express = require('express');
const router = express.Router()
const fs = require('fs/promises')

router.post('/new', async (req, res) => {
    const data = await fs.readFile('./db/db.json', 'utf8')
    console.log('parsing...', req.body)
    let newData = JSON.parse(data)
    console.log(newData)
    newData[new Date().getTime()] = req.body
   

    await fs.writeFile(`./db/db.json`, JSON.stringify(newData))
    res.send(JSON.stringify(newData))
    
})

router.delete(`/delete/:postId`, async(req,res)=>{
    console.log(`deleting...`, req.params);
    const data = JSON.parse(await fs.readFile(`./db/db.json`, `utf8`))
    let el = 0
    for(let i of data){
        if(i.id == req.params.postId){
            data.splice(el, 1)
        }else{
            el++
        }
    }
    await fs.writeFile(`./db/db.json`, JSON.stringify(data))
    res.sendStatus(200)
})
module.exports = router