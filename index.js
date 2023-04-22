import express from "express"
const app = express ()

//method - get(데이터 불러오는 것), post (데이터를 등록하는 것),put (데이터를 수정),delete (데이터를 삭제)/ 다음에 test 는 주소 (URL path)를 의미함
app.get("/test", (req, res) => {
    res.json({
        msg: "data get all"
    })
})


const port = 1000
app.listen(port, console.log("server start"))
