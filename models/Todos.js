//몽구스 모델 가져오기
const mongoose = require("mongoose");

//몽구스 이용해서 스키마 생성
const todoSchema = mongoose.Schema({
  title: {
    type: String,
    maxlength: 50,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

//스키마 모델로 감싸주기
const Todo = mongoose.model("Todo", todoSchema);

//이 모델을 다른 파일에서도 쓰기위해 모듈화

module.exports = mongoose.model("Todo", todoSchema);
