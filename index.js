const express = require("express");
//express 모듈을 가져옴
const app = express();
//express() 펑션을 이용해서 express앱을 만듦

var httpProxy = require("http-proxy");
// var apiForwardingUrl = 'http://api.open-notify.org/astros.json?';

// var apiProxy = httpProxy.createProxyServer ();
// "/ space /"를 사용하여 서버에 대한 모든 요청을 가져옵니다.
app.all("/ space / *", function (req, res) {
  console.log("/ space /에 대한 요청");
});
app.listen(app.get("port"), function () {
  console.log("포트에서 수신 대기하는 Express 서버 + app.get (port)");
});

const port = 5000;
//포트 설정
const config = require("./config/dev");

const Todo = require("./models/Todos");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

//express앱의 루트 디렉토리로 오면 hello world 출력되게 해줌

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
//이 앱의 포트 5000번에서 실행함
app.get("/list", function (req, res) {
  //res.send("Hello World!"));
  Todo.find(function (err, datas) {
    if (err) return res.status(500).send({ error: "fail" });
    res.json(datas);
  });
});

app.post("/add", (req, res) => {
  const todo = new Todo(req.body);

  todo.save((err, content) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});
