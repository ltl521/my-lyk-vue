/**
 * Created by wangxiang on 2017/11/9.
 */
/*获取本地储存的用户id*/
// var customerId=localStorage.getItem('customerId');
// console.log(customerId)
/*时间毫秒数转码*/
function Date1(str) {
    var date=new Date(parseInt(str));
    console.log(date)
    var mon=date.getMonth()+1;
    mon>9?mon=mon:mon="0"+mon
    var year=date.getFullYear();
    var hours=date.getHours();
    hours>9?hours=hours:hours='0'+hours
    var min=date.getMinutes();
    min>9?min=min:min="0"+min;
    var day=date.getDate();
    day>9?day=day:day="0"+day;
    var sec=date.getSeconds();
    sec>9?sec=sec:min="0"+sec;
    var time=year+'-'+mon+'-'+day
    /*console.log(s)*/
    return time
}
/*计算剩余天*/
function Remaining(b,a) {
    var day=parseInt((b-a)/1000/3600/24);

    day=Math.abs(day)
    return day
}

/*分转元 并且保留两位小数*/
function whole(str) {
   var a= parseFloat(str).toFixed(2);
   return a
}

/*判断是否逾期*/
function yuqi(num) {
    return parseInt(num)==3?'逾期天数':'剩余还款天数'
}

function days(date) {
  var now = new Date();
  var days = 7 - parseInt((now - date)/(1000*60*60*24));
  return days;
}


//验证手机号码
function vaidPhone(phone) {
  if (phone == '') {
    return 1;
  }
  if (!(/^1[34578][0-9]{9}$/.test(phone))) {
    return 2;
  }
  return 0;
}
//验证密码
function vaidPassword(password){
  if (password == '') {
    return 1;
  }
  if(!(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/.test(password))){
    return 2;
  }

  return 0;
}


/*

 //显示选择图片
 $('.file input').on('change',function () {
 var url;
 $(this).siblings('img').css('display','inline-block');
 /!* $(this).siblings('img').attr('src',url);*!/
 $(this).siblings('.offfile').remove();
 var Cnv =$(this).siblings('canvas')[0];
 var Cntx = Cnv.getContext('2d');//获取2d编辑容器
 var imgss =   new Image();
 var agoimg= $(this).siblings('img')[0];
 var tmpFile = this.files[0];
 var reader = new FileReader();
 reader.readAsDataURL(tmpFile);
 reader.onload = function (e) {
 url = e.target.result;
 imgss.src = url;
 agoimg.src=url;
 agoimg.onload = function () {
 //等比缩放
 var m = imgss.width / imgss.height;
 Cnv.height =300;//该值影响缩放后图片的大小
 Cnv.width= 300*m ;
 //img放入画布中
 //设置起始坐标，结束坐标
 Cntx.drawImage(agoimg, 0, 0,300*m,300);
 }
 }

 });


 /!*Blob兼容写法*!/
 function getBlob(buffer, format) {
 try {
 return new Blob(buffer, {type: format});
 } catch (e) {
 var bb = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder);
 buffer.forEach(function(buf) {
 bb.append(buf);
 });
 return bb.getBlob(format);
 }
 }



 /!*返货blob 对象*!/
 /!*
 * id 为 input type=file 的id
 * canvas 必须和该id同级
 *
 * *!/
 function  returnBold(id) {
 var Pic = $(document.getElementById(id)).siblings('canvas')[0].toDataURL("image/png");
 var text = window.atob(Pic.split(",")[1]);
 var buffer = new Uint8Array(text.length);
 for (var i = 0; i < text.length; i++) {
 buffer[i] = text.charCodeAt(i);
 }
 var type= document.getElementById(id).files.type;
 var blob = getBlob([buffer], type);
 return blob
 }
 */
