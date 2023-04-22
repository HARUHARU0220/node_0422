import express, {response} from "express";
const router = express.Router()

// project 관련된 API를 이곳에 설계한다.
// project와 관련된 데이터를 불러오고 등록하고 수정하고 삭제하는 기능을 만든다.

// project를 가져오는 API
router.get("/new", (req, res) => {
    res.json({
        msg: "new project"
    })
})

//project를 등록하는 API
router.post("/create", (req, res) => {
    res.json({
        msg: "create project"
    })
})

//project를 수정하는 API
router.put("/update", (req, res) =>{
    res.json({
        msg: "update project"
    })
})

//project를 삭제하는 API
router.delete("/", (req, res) => {
    res.json({
        msg: "delete project"
    })
})

// API test 는 postman 사용한다.


export default router