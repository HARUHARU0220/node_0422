import express from "express";
const router = express.Router()

router.get("/all", (req,res) =>{
    res.json({
        msg: "order all"
    })
})

router.post("/create",(req,res) => {
    res.json({
        msg:"create order"
    })
})

router.put("/upload",(req, res)=>{
    res.json({
        msg:"upload order"
    })
})

router.delete("/delete",(req, res) =>{
    res.json({
        msg:"delete order"
    })
})
export default router
