<template>
  <div id="index" class="container-fluid" style="width: 100%;">
    <!--导航-->
    <div class="header clearfix">
      <img class="indexlogo fl" src="../../assets/images/index/logo.svg" @click="loga" style="cursor:pointer"/>
      <ul class="fr clearfix nav">
        <!--<li> <a class="activeLi">首页</a> </li>-->
        <!--<li> <a @click="toLod('lod2')">公司介绍</a> </li>-->
        <!--<li> <a @click="toLod('lod3')">产品&服务</a> </li>-->
        <!--<li> <a @click="toLod('lod7')">团队介绍</a> </li>-->
        <!--<li> <a @click="toLod('lod8')">合作伙伴</a> </li>-->
        <li> <a @click="fanhuishouye">返回首页</a></li>
      </ul>
      <!--<img class="fenlei" src="../../assets/images/index/fenlei.svg"/>-->
      <div class="fenlei1" @click="fenlei">
        返回首页
      </div>
    </div>
    <!--内容-->
    <main>

      <section id="history">

        <!-- Section title -->
        <h1 class="sr-only">History section</h1>

        <div class="container">

          <div class="row">

            <div class="col-md-12">

              <div class="history-content">

                <h2 class="section-title" align="center">免责声明</h2>
                <p>凡进入、访问或使用北京知帆科技有限公司网站（chaindigg.com），即表明已经同意接受以下免责声明的约束，请仔细阅读以下免责声明：</p><p>
                1、本网站所载信息、资料以及北京知帆科技有限公司（以下简称“我公司”）发布的数据和服务，包括但不限于交易所币流数据,仅代表我公司观点，供一般性参考，除法律法规另有规定外，我公司对上述内容的真实性、准确性、完整性不作任何承诺和保证。<br>
                2、我公司保证相关数据获取源自公开渠道，系根据国际和行业通行的准则以合法渠道获取上述信息，并尽可能保证可靠、准确和完整，但并不保证数据所述信息的准确性和完整性。<br>
                3、本网站所载信息和资料，特别是我公司发布的有关数据信息，不应被视为投资研究决策的依据，不能作为道义的、责任的和法律的依据或者凭证，无论是否已经明示或者暗示。<br>
                4、我公司将随时补充、更正和修订有关信息，但不保证及时发布。我公司对本网站所载或所涉及的信息和资料的及时性不作任何承诺和保证。本公司有权无需事先通知而删除或修改本网站信息。对于我公司所提供信息所导致的任何直接的或者间接的投资盈亏后果不承担任何责任。<br>
                5、本公司就本网站各项服务的安全、不中断不作任何承诺和保证。对于因技术故障（如传输错误、技术缺陷、第三者侵入等）而导致的任何数据缺失，无法进入、访问或使用本网站而可能导致的任何直接或间接损失，本公司不承担任何法律责任。<br>
                6、本公司具有法律法规规定的其它有关免责规定项下所享有的一切权利，本公司没有主张或迟延主张该等权利并不视为本公司放弃该等权利。<br>
                7、我公司发布的数据及服务版权仅为本公司所有，未经书面许可，任何机构和个人不得以任何形式翻版、复制和发布。如引用发布，需注明出处为“北京知帆科技有限公司”或“Chaindigg”，且不得对发布的数据及服务进行有悖原意的引用、删节和修改。  <br>
                8、我公司对于本免责声明条款具有修改权和最终解释权。<br></p><p>
                我公司在此郑重提醒，以上各条款均为免责条款，我公司不承担与此相关的任何损失和法律责任。</p>
              </div>

            </div>

          </div>

        </div>

      </section>




    </main>
    <!-- 尾部 -->
    <div class="footer">
      <div class="clearfix">
        <ul class="fl icon-logo clearfix">
          <li class="fl codeBy1">
            <img src="../../assets/images/index/weixin.png"/>
            <img class="codeImg1" src="../../assets/images/index/weixincode.png"/>
          </li>
          <li class="fl ">
            <a target="_blank" href="https://twitter.com/chaindigg">
              <img src="../../assets/images/index/Twitter.png"/>
            </a>
          </li>
          <li class="fl codeBy2">
            <img src="../../assets/images/index/qq.jpg"/>
            <img class="codeImg2" src="../../assets/images/index/qqcode.png"/>
          </li>
          <li class="fl">
            <a  target="_blank"  href="https://weibo.com/p/1006066624170357/home?from=page_100606&mod=TAB&is_all=1#place">
              <img src="../../assets/images/index/weibo.png"/>
            </a>
          </li>
        </ul>
        <p class="fr xxinxi">
          <span>电话: 400-6988-698 &emsp;邮箱: info@chaindigg.com</span>  &emsp;公司地址: 中国北京市海淀区上地三街9号金隅嘉华大厦C座408
        </p>
      </div>
      <div class="lines"></div>
      <div class="bottom-main">
        <span>Copyright © 2017-2018 北京知帆科技有限公司 版权所有</span>&emsp;免责声明
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "disclaimer",
        methods:{
          indexlogo (){
            this.$router.push('/')
          },
          fanhuishouye (){
            this.$router.push('/')
          },
          loga () {
            this.$router.push('/')
          },
          fenlei () {
            this.$router.push('/')
          }
        }
    }
</script>

<style type="text/css" scoped>
  #index{
    width: 100%;
  }
  a,a:hover,a:active,a:visited,a:link,a:focus{
    text-decoration: none;
  }
  ul{
    padding: 0;
  }
  p{
    margin: 0;
  }
  ul li{
    list-style: none;
  }
  .fl{
    float: left;
  }
  body{
    font-family: 'Crimson Text', serif;
    font-size: 15px;
    color: #637988;
    line-height: 1.7;
  }
  .fr{
    float: right;
  }
  .header{
    background: url("../../assets/images/index/headBg.jpg") no-repeat;
    background-size: 100% 100%;
    line-height: 68px;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999999;
  }
  .indexlogo{
    width: 200px;
    margin-left: 48px;
    margin-top: 17px;
  }
  .nav li{
    float: left;
    margin-right: 48px;
  }
  .nav li a{
    opacity: 0.6;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #FFFFFF;
    text-decoration: none;
    padding: 0;
    cursor: pointer;
  }
  .nav .activeLi{
    opacity: 1;
    cursor: pointer;
  }
  .nav>li>a:hover, .nav>li>a:focus{
    background: transparent;
    opacity: 1;
    cursor: pointer;
  }

#history{
  padding: 40px 20px 50px;
  margin-top: 68px;

}
section:nth-child(odd) {
  background-color: #ffffff;
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
.history-content {
  text-align: left;
}
h2.section-title{
  color:#008acf;
}
.history-content p{
  margin-top: 42px;
  font-family: 'Crimson Text', serif;
}


  .footer{
    background: #21243F;
    margin-top: 40px;
  }
  .icon-logo{
    margin-left: 48px;
    height: 69px;
  }
  .xxinxi{
    margin-right: 48px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 69px;
  }
  .icon-logo img{
    margin-right: 20px;
    margin-top: 26px;
  }
  .icon-logo li{
    float: left;
    list-style: none;
  }
  .list1 a{
    cursor:default;
  }
  .list2 a{
    cursor:default;
  }
  .bottom-main{
    width: 100%;
    height: 56px;
    color: #fff;
    font-size: 10px;
    line-height: 56px;
    cursor:pointer;
  }
  .bottom-main span{
    opacity: 0.3;
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #FFFFFF;
  }
  .lines{
    width: 100%;
    height: 1px;
    opacity: 0.2;
    background: #FFFFFF;
  }
  .fenlei{
    position: absolute;
    width: 70px;
    right: 70px;
    top: 30px;
    display: none;
  }
  .codeBy1{
    position: relative;
  }
  .codeBy2{
    position: relative;
  }
  .codeImg1{
    position: absolute;
    top: -180px;
    display: none;
  }
  .codeImg2{
    position: absolute;
    top: -180px;
    display: none;
    left: -75px;
  }
  .codeBy1:hover .codeImg1{
    display: block;
  }
  .codeBy2:hover .codeImg2{
    display: block;
  }
  .losTxt h3{
    color: #2C8BFF;
    font-size: 24px;
  }
  .losTxt p{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #222;
    text-align: center;
    line-height: 20px;
    font-weight: normal;
    margin-top: 10px;
    text-align: center;
  }
  .FriendLogo img{
    width: 14%;
    margin-left: 2.5%;
    margin-right: 2.5%;
    padding-bottom: 80px;
  }
  .lod02-div-o1 p{
    width: 450px;
    margin: 0 auto;
    font-size: 18px;
    color: #666;
  }
  .lod2-div  h3{
    color: #2C8BFF;
    font-size: 24px;
    text-align: left;
  }
  .lod2-div .lod02-div-o1 h3{
    color: #2C8BFF;
    font-size: 30px;
    text-align: center;
  }
  .lod2-div li{
    list-style: disc;
    font-size: 20px;
    margin-left: 22px;
    text-align: left;
    color: #2C8BFF;
  }
  .lod2-div li span{
    font-size: 20px;
    color: #666666;
  }
  .FriendLogo .list2 a img{
    margin-left: 3.5%;
    margin-right: 3.5%;
  }
  .index-warp>p{
    font-size: 18px;
    padding: 0 20px;
  }







  @media (max-width: 700px){
    .index-warp>p{
      font-size: 14px;
      padding: 0 20px;
    }
    .index-warp .moileNone{
      display: block;
    }
    .index-warp .pcNone{
      display: none;
    }
    .fenlei{
      display: block;
    }
    .lod2 .img{
      width: 100%;
    }
    .lod3 .img{
      width: 84%;
      margin: 56px auto 49px;
    }
    .lod3-div{
      width: 100%;
      text-align: center;
      margin: 0 auto 58px;
    }
    .lod4-div{
      width: 100%;
      text-align: center;
      margin: 0 auto 58px;
    }
    .lod4 .img{
      width: 88%;
      margin: 56px auto;
    }
    .lod5 .img{
      width: 88%;
      margin: 59px auto 42px;
    }
    .lod5-div {
      width: 100%;
      text-align: center;
      margin: 0 auto 58px;
    }
    .lod6-div{
      width: 100%;
      margin: 0px  auto 56px;
      text-align: center;
    }
    .lod6 .img{
      width: 88%;
      margin: 32px auto 30px;
    }
    .FriendLogo .list1 li{
      width: 33.3%;
    }
    .FriendLogo li img{
      width: 100%;
    }
    .nav li{
      margin: 0;
      width: 33%;
    }
    .nav{
      float: none;
      padding: 10px;
      display: none;
    }
    .nav li a{
      font-size: 16px;
      line-height: 38px;
    }
    .indexlogo{
      width: 114px;
      margin-top: 12px;
      margin-left: 16px;
      float: none;
      display: block;
      padding-bottom: 20px;
    }
    .fenlei1{
      position: absolute;
      width: 67px;
      right: 30px;
      top: -6px;
      color: #ffffff;
    }
    .index-warp{
      padding: 50px 0 0 0;
    }
    .lod1 p{
      font-size: 18px;
    }
    .lod3-div h3{
      font-size: 18px;
    }
    .lod4-div h3{
      font-size: 18px;
    }
    .lod5-div h3{
      font-size: 18px;
    }
    .lod6-div h3{
      font-size: 18px;
    }
    .lod3-div p{
      font-size: 14px;
      padding-bottom:14px;
    }
    .lod4-div p{
      font-size: 14px;
      padding-bottom:14px;
    }
    .lod5-div p{
      font-size: 14px;
      padding-bottom:14px;
    }
    .lod6-div p{
      font-size: 14px;
      padding-bottom:14px;
    }
    .lod3-div li span{
      font-size: 14px;
      line-height: 24px;
    }
    .lod4-div li span{
      font-size: 14px;
      line-height: 24px;
    }
    .lod5-div li span{
      font-size: 14px;
      line-height: 24px;
    }
    .lod6-div li span{
      font-size: 14px;
      line-height: 24px;
    }
    .lod3-div ul{
      width: 140px;
      margin: 0 auto;
    }
    .lod4-div ul{
      width: 140px;
      margin: 0 auto;
    }
    .lod5-div ul{
      width: 140px;
      margin: 0 auto;
    }
    .lod6-div ul{
      width: 140px;
      margin: 0 auto;
    }
    .lod3-div li{
      font-size: 16px;
      line-height: 16px;
    }
    .lod4-div li{
      font-size: 16px;
      line-height: 16px;
    }
    .lod5-div li{
      font-size: 16px;
      line-height: 16px;
    }
    .lod6-div li{
      font-size: 16px;
      line-height: 16px;
    }
    .goto{
      display: block;
      width: 120px;
      height: 36px;
      background: #00A0E9;
      border-radius: 4px;
      text-align: center;
      line-height: 36px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      cursor:pointer;
      margin: 0 auto;
      margin-top: 25px;
    }
    .lod7 h3{
      padding: 56px 0 40px 0;
      font-size: 20px;
      line-height: 20px;
    }
    .man{
      width: 110px;
      float: left;
      margin: 0;
    }
    .meaasgeDiv{
      float: right;
      width: calc(100% - 130px);
    }
    .manName{
      padding-bottom: 0;
    }
    .manName b{
      font-size:16px;
    }
    .manName span{
      font-size:12px;
    }
    .manMain{
      font-size: 12px;
    }
    .lod7 .row{
      width: 98%;
    }
    .lod8 h3{
      padding: 57px 0 40px 0;
      font-size: 20px;
    }
    .xxinxi{
      line-height: 22px;
      font-size: 10px;
      padding-bottom: 22px;
      margin: 0;
      text-align: center;
      float: none;
    }
    .xxinxi span{
      display: block;
    }
    .bottom-main{
      font-size: 10px;
    }
    .icon-logo{
      /*margin: 0 auto;*/
      /*width: 65%;*/
      /*float: none;*/
      margin: 0 auto;
      width: 65%;
      float: none;
      padding: 0;
    }
    .icon-logo li{
      width: 25%;
      float: left;
    }
    .icon-logo li img{
      margin-right: 0;
    }
    .losImg{
      width:100%;
      margin: 22px auto 61px;
    }
    .man2{
      float: right;
    }
    .lod7{
      padding-bottom: 30px;
    }
    .FriendLogo img{
      width: 26%;
      margin-left: 2.5%;
      margin-right: 2.5%;
      padding-bottom: 30px;
    }
    .manNameRight{
      text-align: right;
      overflow: hidden;
    }
    .lod2-div{
      width: 300px;
    }
    .lod2-div h3{
      font-size: 17px;
      padding-bottom: 0;
      margin-bottom: 6px;
      font-family: PingFangSC-Regular;
    }
    .lod2-div li span{
      font-size: 14px;
      color: #333;
      font-family: PingFangSC-Regular;
    }
    .lod2-div li{
      line-height: 18px;
      font-size: 14px;
    }
    .lod02-div-o3{
      position: absolute;
      top: 15px;
      left: 11px;
    }
    .lod02-div-o2 {
      position: absolute;
      top: 120px;
      left: 125px;
      /* right: 11px; */
      width: 165px;
    }
    .lod02-div-o5 {
      position: absolute;
      top: 205px;
      left: 11px;
    }
    .lod02-div-o4 {
      position: absolute;
      top: 300px;
      left: 140px;
    }
    .FriendLogo .fImg01{
      width: 51px;
    }
    .FriendLogo .fImg02{
      width: 83px;
    }
    .FriendLogo .fImg03{
      width: 69px;
    }
    .FriendLogo .fImg04{
      width: 53px;
    }
    .FriendLogo .fImg05{
      width: 91px;
    }
    .FriendLogo .fImg06{
      width: 53px;
    }
    .FriendLogo .fImg07{
      width: 63px;
    }
    .FriendLogo .fImg08{
      width: 75px;
    }
    .FriendLogo .fImg09{
      width: 74px;
    }
    .FriendLogo img{
      margin-left: 6%;
      margin-right: 6%;
    }
    .man001 .meaasgeDiv,.man003 .meaasgeDiv{
      float: left;
      margin-left: 15px;
    }
    .man002 .meaasgeDiv,.man004 .meaasgeDiv{
      margin-right: 15px;
    }
    .man001 .meaasgeDiv .manName span{
      margin-left: 8px;
    }
    .man003 .meaasgeDiv .manName span{
      margin-left: 8px;
    }
    .man002 .manName  b{
      float: right;
    }
    .man002 .manName  span{
      float: right;
      margin-right: 8px;
      margin-top: 3px;
    }
    .man004 .manName  b{
      float: right;
    }
    .man004 .manName  span{
      float: right;
      margin-right: 8px;
      margin-top: 3px;
    }
    .FriendLogo{
      width: 100%;
    }
  }
</style>
