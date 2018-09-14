<template>
 <div id="wapper">
   <form  id='uploadForm'>
     <div class="form">
       <div>
         <input type="text" placeholder="请输入法人姓名" name="legal_person" id="legal_person">
       </div>
       <div>
         <input type="text" placeholder="请输入法人身份证" name="legal_person_idcard" id="legal_person_idcard">
       </div>
       <div>
         <input type="text" placeholder="请输入营业执照名称" name="business_license" id="business_license">
       </div>
     </div>
     <div class="file-p">
       <div class="file file-pho sleft">
         <div class="offfile">
           <span></span>
           <div>拍摄上传</div>
           <div>法人身份证</div>
         </div>
         <img src="" alt="">
         <input type="file"  name="idcard_image" id="idcard_image" accept="image/*" capture="camera">
         <canvas style="display: none"></canvas>
       </div>
       <div class="file file-pho sleft">
         <div class="offfile">
           <span></span>
           <div>拍摄上传 <br>
             营业执照</div>
         </div>
         <img src="" alt="">
         <input type="file"  name="business_license_image" id="business_license_image" accept="image/*" capture="camera">
         <canvas style="display: none"></canvas>
       </div>
     </div>
     <div class="file-p">
       <div class="file file-pho sleft">
         <div class="offfile">
           <span></span>
           <div>拍摄上传 <br>
             经营场所照片1</div>
         </div>
         <img src="" alt="">
         <input type="file" name="business_place_image1" id="business_place_image1" accept="image/*" capture="camera">
         <canvas style="display: none"></canvas>
       </div>
       <div class="file file-pho sleft">
         <div class="offfile">
           <span></span>
           <div>
             拍摄上传 <br>
             经营场所照片2
           </div>
         </div>
         <img src="" alt="">
         <input type="file"  name="business_place_image2" id="business_place_image2" accept="image/*" capture="camera">
         <canvas style="display: none"></canvas>
       </div>
     </div>
     <input type="text" hidden name="merchant_id" id="merchant_id">
     <button class="sure btn" type="submit" id="sure">提交</button>
   </form>
   <div class="modal-loding">
     <img src="static/img/load.gif" alt="">
   </div>
   <section>
     <nav class="lyc-nav-boss">
       <ul class="nav-li-gj">
         <li><a class="active-nav-gj" href="card_payee_home"><i class="nav-tp1"></i><span>收款</span></a></li>
         <li><a href="setting_home"><i class="nav-tp3"></i><span>我的</span></a></li>
       </ul>
     </nav>
   </section>
 </div>

</template>

<script>
  import axios from 'axios'
  import modal from '@/pages/common/tips';
  var merchantId = sessionStorage.getItem('merchantId');
  export default{
    "name":'certification',
    components:{
      modal
    },
    data:function () {
      return {
        message:'',
        showMessage:false,
        isAuthenticationMsg:false,
        showAuthenticationMsg:false,
        verified:'未设置',
        IsVerified:'未认证',
        merchantName:"",
        IsVerified2:false,
        money:0,
        todayMoney:0,
        cardNo:""
      }
    },
    methods:{
      showModal:function (str) {
        this.showMessage=true;
        this.message=str
        var _this=this;
        setTimeout(function () {
          _this.showMessage=false;
        },1000)
      },
      isAuthentication:function () {
        var _this=this
        axios({
          method: 'get',
          url: '/static/mock/user_info.json?id=',
          dataType: 'json',
        }).then(function (data) {
          console.log(data)
          if(data.data.code==200){
            let isVerified = data.data.data.verified;
            if(isVerified != 0){
              _this.isAuthenticationMsg=true;
            }
            else if(isVerified == 0){
              _this.isAuthenticationMsg=false;
            }
          }
        });
      },
      hideAuthentication:function () {
        this.isAuthenticationMsg=false;
      },
      /*判断商户是否认证*/
      IsMearchantVerified:function () {
        var _this=this
        axios({
          method : 'get',
          url : 'merchant/info_id?id=' + merchantId,
        }).then(function (data) {
          if (data.code == 200) {
            _this.merchantName=data.data.data.name
            sessionStorage.setItem('verified',data.data.data.verified)
            //获取商户认证状态
            if (data.data.data.verified == 1) {
              _this.IsVerified='已认证';
              _this.IsVerified2=true;
            }else if (data.data.verified == 0) {
              _this.IsVerified='未认证';
              _this.IsVerified2=false;
            }else if (data.data.verified == 2) {
              _this.IsVerified="待认证"
            }
          }
        });
      },
      /*获取商户额度*/
      getMeanchantLycoin:function () {
        var _this=_this;
        axios({
          method : 'get',
          url :   'merchant/card_id?id=' + merchantId,
        }).then(function (data) {
          _this.money=(data.data.data.lyCoin / 100).toFixed(2);
          _this.todayMoney=((data.data.data.lyCoin / 100) * 0.05 / 365).toFixed(3);
          _this.cardNo=data.data.data.cardNo
        });
      }

    },
    mounted:function () {
      this.isAuthentication()
      this.IsMearchantVerified()
      this.getMeanchantLycoin()
    }
  }
</script>

<style scoped>
  @import '../../assets/css/forgetPwd.css';
  @import "../../assets/css/suresk.css";
  #wapper{
    width: 100%;
    height: 100%;
    background: #efefef;
    padding-top: 0.1rem;
    padding-bottom: 3rem;
  }
  #uploadForm{
    background: #efefef;
  }
</style>
