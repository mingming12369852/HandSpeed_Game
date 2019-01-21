var speed;


var Detection = {
  hello: function() {
    console.log("hello!!");
  },

  collision: function(a) {
    // 檢測用工具
    // console.log(event.keyCode);
    switch (event.keyCode) {
      case 37:
        key_left();
        break;
      case 38:
        key_top();
        break;
        case 39:
        key_right();
        break;
        case 40:
        key_under();
        break;
      default:
      console.log("請使用鍵盤上的　上下左右　遊戲");

    }

    function key_left() {
      console.log("this ledt");
    }
    function key_top() {
      console.log("this top");
    }
    function key_right() {
      console.log("this right");
    }
    function key_under() {
      console.log("this under");
    }
  },


  start_key: function() {

    function keyFunction(a) {
      Detection.collision(a);

    }
    document.onkeydown = keyFunction;
  }



}



//鍵盤事件




//event.keyCode
// 37左
// 38上
// 39右
// 40下
