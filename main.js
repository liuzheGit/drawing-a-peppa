let code = `
/* 
* 小猪佩奇身上纹，掌声送给社会人
* 今天就用CSS画小猪佩奇，送给你啦
* 好，我的表演即将开始！你准备好了吗？go
*/

/*
* 先画佩奇的头
*/
.head{
  border-radius: 50% 44% 50% 50%;
  border: 2px solid #f6a3c4;
  background: #ffbddb;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  z-index: 5;
}

.head::before{
  border: 2px solid #f6a3c4;
  transform: rotate(16deg);
  top: -9px;
  left: -41px;
  border-radius: 200px 210px 80px 100px;
  background: #ffbddb;
}
.head::after{
  transform: rotate(18deg);
  top: 1px;
  right: 2px;
  border-radius: 10px 40px 30px 0;
  background-color: #ffbddb;
}
/*
* 然后再画佩奇的大鼻子
*/
.head .nose{
  border: 2px solid #f6a3c4;
  left: -38px;
  top: -20px;
  border-radius: 50% 60%;
  transform: rotate(45deg);
}
/*
* 接着帮佩奇画上两个鼻孔吧
*/
.nose::after,.nose::before{
  background: #e47b9c;
}
.nose:before{
  left: 2px;
  top: 19px;
}
.nose:after{
  right: 5px;
  top: 10px;
}
/*
* 画佩奇的耳朵
*/
.ear{
  border: 2px solid #f6a3c4;
  background: #ffbddb;
  transform: rotate(20deg);
}
/*
* 把佩奇的耳朵放到正确的位置上
*/
.ear-left{
  top: -35px;
  left: 30px;
  border-radius: 50% / 35% 40% 50% 50%;
}
.ear-right{
  right: 15px;
  top: -26px;
  border-radius: 50% / 40% 40% 50% 50%;
}
/*
* 紧接着画佩奇的眼睛
*/
.eye{
  border: 2px solid #f6a3c4;
  border-radius: 50%;
  background: #fff;
}
.eye::after{
  border-radius: 50%;
  background: #000;
  left: 0;
  top: 1px
}
.eye-left{
  left: 16px;
  top: -5px;
}
.eye-right{
  right: 40px;
  top: 2px;
}
/*
* 再接着画一下佩奇的嘴巴
*/
.mouse{
  border: 4px solid #dd5b80;
  border-radius: 50% 60%;
  bottom: 20px;
  left: 15px;
  transform: rotate(10deg)
  background: #000;
}
.mouse::after{
  position: absolute;
  border-bottom: 4px solid;
  border-radius: 50% 60%;
  top: -8px;
  left: -4px;
  background: #ffbddb;
  color: #dd5b80;
}
/*
* 接着画一下佩奇的脸颊
*/
.face{
  border-radius: 50%;
  right: 6px;
  top: 30px;
  transform: rotate(20deg);
  background: #ffa4d0;
}
/*
* 终于，可以画佩奇的身体啦
*/
#peiqi .body{
  bottom: 165px;
  left: 50%;
  border: 3px solid #ef4c2f;
  transform: translateX(-50%);
  border-radius: 50% / 100%  100% 0 0;
  background: #f8694f;
}

/*
* 然后画佩奇的胳膊
*/

.hand{
  border-radius: 50% / 100% 50% 50% 50%;
  z-index: -2;
  background: #ffc4e2;
}
.hand-left{
  transform: rotate(55deg);
  left: -13px;
  top: 30px
}
/*
* 左手
*/
.hand-left::before{
  left: 0;
  top: 30px;
  border-radius: 50% / 100% 50% 60% 30%;
  transform: rotate(50deg);
  background: #ffc4e2;
}
/*
* 右手
*/
.hand-left::after{
  left: -10px;
  top: 32px;
  border-radius: 50% / 100% 50% 60% 30%;
  transform: rotate(-50deg);
  background: #ffc4e2;
}
.hand-right{
  transform: rotate(-60deg);
  right: -11px;
  top: 21px;
}
.hand-right::before{
  left: 0;
  top: 30px;
  border-radius: 50% / 100% 50% 60% 30%;
  transform: rotate(50deg);
  background: #ffc4e2;
}
.hand-right::after{
  left: -10px;
  top: 32px;
  border-radius: 50% / 100% 50% 60% 30%;
  transform: rotate(-50deg);
  background: #ffc4e2;
}
/*
* 看我巧妙地画佩奇的尾巴
*/

.tail{
  border: 4px solid #ffc3e0;
  border-radius: 50%;
  top: 74px;
  right: -22px;
  transform: rotate(90deg)
  background-color: transparent;
}
.tail::after,.tail::before{
  border-radius: 50% / 100% 0 0 100%;
  background: #ffc3e0;
}
.tail::before{
  right: -4px;
  top: -8px;
  transform: rotate(60deg);
}
/*
* 然后画佩奇的小腿
*/
.leg{
  bottom: 135px;
  background: #ffc3df;
}
/*
* 给佩奇穿上鞋子
*/
.leg::after{
  bottom: -4px;
  right: 0;
  background: #000;
  border-radius: 60% 100% 60% 60%;
}
`;
$(function(){
  let player = $('#player')[0];
  $('.mask-btn').click(function(){
    $('.mask').hide();
    writeCode('', code);
    player.load();
    player.play();
  });
  $('.mute-btn').click(function(){
    player.volume > 0 ? player.volume = 0.0 : player.volume = 1.0;
  });
  // $('#styleTag').html(code);
  // $('#code').html(code);
  let speed = null;
  let timer = null;
  $('.btn-wrap .btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    let name = $(this).data('speed');
    switch (name) {
      case 'topSpeed':
        speed = 1;
        break;
      case 'fast':
        speed = 10;
        break;
      case 'slow':
        speed = 40;
        break;
      default:
        speed = 20;
    }
  });
  function writeCode(prefix, code){
    let styleTag = $('#styleTag');
    let codeContainer = $('#code');
    let n = 0;
    timer = setTimeout(function run(){
      n += 1;
      codeContainer.html(Prism.highlight(prefix + code.substring(0, n), Prism.languages.css));
      styleTag.html(code.substring(0, n));
      let scrollHeight = codeContainer.prop("scrollHeight");
      // console.log(codeContainer.scrollTop());

      $('#code-wrapper').scrollTop(scrollHeight);
      if (n < code.length){
        id = setTimeout(run, speed);
      } else {
        window.clearTimeout(timer);
      }
    }, speed);
  }
});