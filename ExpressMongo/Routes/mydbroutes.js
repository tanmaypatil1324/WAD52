const express= require('express')
const router=express.Router()
const mydb=require('../Models/mydb')

router.get('/',async(req,res)=>{

    const data=await mydb.find()
    res.json(data)
})

router.get('/:name',async(req,res)=>{

    const data=await mydb.findOne({name:req.params.name})
    res.json(data)
})

router.post('/',async(req,res)=>{

    const newdata=new mydb({
        name:req.body.name,
        addr:req.body.addr
    })

    const r=await newdata.save()
    res.json(r)
})

router.put('/:name', async (req, res) => {
    try {
        const data = await mydb.findOneAndUpdate(
            { name: req.params.name },
            { $set: { addr: req.body.addr } },
            { new: true }
        );
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/:name', async (req, res) => {
    try {
        const data = await mydb.findOneAndDelete({ name: req.params.name });
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;



module.exports = router
