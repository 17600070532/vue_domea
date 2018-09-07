<template>
  <div id="index" class="container-fluid" style="width: 100%;">
    <!--导航-->
    <div class="header clearfix">
      <img class="indexlogo fl" src="../assets/images/index/logo.svg"/>
      <ul class="fr clearfix nav">
        <li> <a class="activeLi" @click="toLod('lod1')">首页</a> </li><!---->
        <li> <a @click="toLod('lod2')">公司介绍</a> </li><!---->
        <li> <a @click="toLod('lod3')">产品&服务</a> </li><!---->
        <li> <a @click="toLod('lod7')">团队介绍</a> </li><!---->
        <li> <a @click="toLod('lod8')">合作伙伴</a> </li><!---->
        <li> <a @click="toLod('footer')">联系我们</a></li><!---->
      </ul>
      <img class="fenlei" @click="showNav()" src="../assets/images/index/fenlei.svg"/>
    </div>
    <!-- 内容 -->
    <div class="index-warp">
      <!-- 1 -->
      <div class="lod lod1">
        <p class="animated fadeInLeft">CHAINDIGG-用数据为区块链护航</p>
        <img class="img" src="../assets/images/index/lod01.png"/>
      </div>
      <!-- 2 -->
      <div class="lod lod2">
        <div class="moileNone losTxt">
          <h3>CHAINDIGG</h3>
          <p>全球领先的区块链大数据服务公司。我们致力于将区块链价值带给每个人，构建全球区块链数据生态价值平台。</p>
        </div>
        <div class="moileNone lod2-div">
          <img class="losImg " src="../assets/images/index/lod02.png"/>
          <div class="lod02-div-1 lod02-div-o2">
            <h3>数字货币交易所</h3>
            <ul>
              <li> <span>高风险地址库</span></li>
              <li> <span>异常交易动态监控预警</span></li>
            </ul>
          </div>
          <div class="lod02-div-1 lod02-div-o3">
            <h3>监管机构</h3>
            <ul>
              <li> <span>可疑交易风险预警</span></li>
              <li> <span>数字货币可疑资金流向追踪</span></li>
              <li> <span>可疑地址动向监控</span></li>
            </ul>
          </div>
          <div class="lod02-div-1 lod02-div-o4">
            <h3>投资者</h3>
            <ul>
              <li> <span>大额资金流向监控</span></li>
              <li> <span>Token安全评级数据</span></li>
              <li> <span>多维度数据分析服务</span></li>
            </ul>
          </div>
          <div class="lod02-div-1 lod02-div-o5">
            <h3>数字货币钱包</h3>
            <ul>
              <li> <span>一站式多币种区块浏览器</span></li>
              <li> <span>钱包交易安全提醒</span></li>
            </ul>
          </div>
        </div>

        <div class="pcNone lod2-div">
          <img class="img " src="../assets/images/index/kkmm02.png"/>
          <div class="lod02-div-1 lod02-div-o1">
            <h3>CHAINDIGG</h3>
            <p>全球领先的区块链大数据服务公司。我们致力于将区块链价值带给每个人，构建全球区块链数据生态价值平台。</p>
          </div>
          <div class="lod02-div-1 lod02-div-o2">
            <h3>数字货币交易所</h3>
            <ul>
              <li> <span>高风险地址库</span></li>
              <li> <span>异常交易动态监控预警</span></li>
            </ul>
          </div>
          <div class="lod02-div-1 lod02-div-o3">
            <h3>监管机构</h3>
            <ul>
              <li> <span>可疑交易风险预警</span></li>
              <li> <span>数字货币可疑资金流向追踪</span></li>
              <li> <span>可疑地址动向监控</span></li>
            </ul>
          </div>
          <div class="lod02-div-1 lod02-div-o4">
            <h3>投资者</h3>
            <ul>
              <li> <span>大额资金流向监控</span></li>
              <li> <span>Token安全评级数据</span></li>
              <li> <span>多维度数据分析服务</span></li>
            </ul>
          </div>
          <div class="lod02-div-1 lod02-div-o5">
            <h3>数字货币钱包</h3>
            <ul>
              <li> <span>一站式多币种区块浏览器</span></li>
              <li> <span>钱包交易安全提醒</span></li>
            </ul>
          </div>
        </div>

      </div>
      <!-- 3 -->
      <div class="lod lod3">
        <div class="row">
          <div class="col-lg-7 col-md-7 col-ms-12">
            <img class="img" src="../assets/images/index/lod03.png"/>
          </div>
          <div class="col-lg-5 col-md-5 col-ms-12">
            <div class="lod3-div">
              <h3>数字货币追踪监控系统</h3>
              <p>追踪数字货币每一个地址的资金来源及去向</p>
              <ul>
                <li> <span>亿万地址标注信息</span></li>
                <li> <span>可疑动向实时预警</span></li>
                <li> <span>高危地址精准监控</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 4 -->
      <div class="lod lod4">
        <div class="row pcNone">
          <div class="col-lg-6 col-md-6 col-ms-12">
            <div class="lod4-div">
              <h3>交易所实时币流数据</h3>
              <p>实时监控交易所每一笔数字货币充值、提现交易数据</p>
              <ul>
                <li> <span>主流交易所全覆盖</span></li>
                <li> <span>币流异动实时提醒</span></li>
                <li> <span>大户动向随时掌握</span></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-ms-12">
            <img class="img" src="../assets/images/index/lod04.png"/>

          </div>
        </div>
        <div class="row moileNone">
          <div class="col-lg-6 col-md-6 col-ms-12">
            <img class="img" src="../assets/images/index/lod04.svg"/>

          </div>
          <div class="col-lg-6 col-md-6 col-ms-12">
            <div class="lod4-div">
              <h3>交易所实时币流数据</h3>
              <p>实时监控交易所每一笔数字货币充值、提现交易数据</p>
              <ul>
                <li> <span>主流交易所全覆盖</span></li>
                <li> <span>币流异动实时提醒</span></li>
                <li> <span>大户动向随时掌握</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 5 -->
      <div class="lod lod5">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-ms-12">
            <img class="img" src="../assets/images/index/lod05.png"/>
          </div>
          <div class="col-lg-6 col-md-6 col-ms-12">
            <div class="lod5-div">
              <h3>多币种区块浏览器</h3>
              <p>解析各币种每一个区块、交易、地址详细信息</p>
              <ul>
                <li> <span>主流币种全部囊括</span></li>
                <li> <span>区块信息实时解析</span></li>
                <li> <span>关联亿万地址标注</span></li>
              </ul>
              <a class="goto" target="_blank" href="https://info.chaindigg.cn/">前往体验</a>
            </div>
          </div>
        </div>
      </div>
      <!-- 6 -->
      <div class="lod lod6">
        <div class="row pcNone">
          <div class="col-lg-5 col-md-5 col-ms-12">
            <div class="lod6-div">
              <h3>区块链大数据平台</h3>
              <p>统计分析项目、区块、行情中每一个维度的指标数据</p>
              <ul>
                <li> <span>百种维度数据分析</span></li>
                <li> <span>多种方向交叉统计</span></li>
                <li> <span>数据图表可视展示</span></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-ms-12">
            <img class="img" src="../assets/images/index/lod06.png"/>
          </div>
        </div>
        <div class="row moileNone">
          <div class="col-lg-7 col-md-7 col-ms-12">
            <img class="img" src="../assets/images/index/lod06.png"/>
          </div>
          <div class="col-lg-5 col-md-5 col-ms-12">
            <div class="lod6-div">
              <h3>区块链大数据平台</h3>
              <p>统计分析项目、区块、行情中每一个维度的指标数据</p>
              <ul>
                <li> <span>百种维度数据分析</span></li>
                <li> <span>多种方向交叉统计</span></li>
                <li> <span>数据图表可视展示</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <!-- 7 -->
      <div class="lod lod7">
        <h3>团队介绍</h3>
        <div class="row clearfix">
          <div class="col-lg-3 col-md-6 col-ms-6 clearfix man001">
            <img class="man" src="../assets/images/index/man01.png"/>
            <div class="meaasgeDiv">
              <p class="manName">
                <b>叶茂</b>
                <span>创始人/CEO</span>
              </p>
              <p class="manMain">
                连续创业者，北京大学计算机专业博士后，曾就职于Oracle及方正集团，并联合创办了中国第二大独立团购搜索网站“人人折”，在人工智能、自然语言处理及区块链领域有丰富的经验。
              </p>
            </div>

          </div>
          <div class="col-lg-3 col-md-6 col-ms-6 clearfix man002">
            <img class="man man2" src="../assets/images/index/man02.png"/>
            <div class="meaasgeDiv">
              <p class="manName manNameRight">
                <b>陈忠亮</b>
                <span>技术合伙人</span>
              </p>
              <p class="manMain">
                连续创业者，拥有十余年软件研发和技术管理经验，曾就职于Oracle和印象笔记，并联合创办了中国第二大独立团购搜索网站“人人折”。在嵌入式软件、大型网站开发和大数据处理方面都有丰富的经验。
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-ms-6 clearfix man003">
            <img class="man" src="../assets/images/index/man03.png"/>
            <div class="meaasgeDiv">
              <p class="manName">
                <b>杨亮</b>
                <span>产品合伙人</span>
              </p>
              <p class="manMain">
                具有丰富的产品设计、产品运营、知识库构建、自然语言处理及数据分析经验，十年教育培训及人工智能产品经验，曾就职于方正集团及国内顶尖人工智能公司。
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-ms-6 clearfix man004">
            <img class="man man2" src="../assets/images/index/man04.png"/>
            <div class="meaasgeDiv">
              <p class="manName manNameRight">
                <b>朱亚军</b>
                <span>市场负责人</span>
              </p>
              <p class="manMain">
                丰富的市场活动、宣传经验，善于提炼用户需求，把握市场机会，合理调配内外部关系,曾就职于方正集团，并拥有三年创业公司工作经验。
              </p>
            </div>
          </div>

        </div>
      </div>
      <!-- 8 -->
      <div class="lod lod8">
        <h3>合作伙伴</h3>
        <div class="FriendLogo">
          <div class="pcNone">
            <ul class="list1 clearfix ">

              <a href="javascript:;"><img  class="fImg01" src="../assets/images/index/kushen.png"/> </a>
              <a href="javascript:;"><img class="fImg02" src="../assets/images/index/jiedianziben.png"/> </a>
              <a href="javascript:;"><img class="fImg03" src="../assets/images/index/chuangshiziben.png"/> </a>
              <a href="javascript:;"><img class="fImg04" src="../assets/images/index/fengwo.png"/> </a>
              <a href="javascript:;"><img class="fImg05" src="../assets/images/index/jinsecaijing.png"/> </a>
            </ul>
            <ul class="list2">
              <a href="javascript:;"><img class="fImg06" src="../assets/images/index/xiaocong.png"/> </a>
              <a href="javascript:;"><img class="fImg07" src="../assets/images/index/bishijie.png"/> </a>
              <a href="javascript:;"><img class="fImg08" src="../assets/images/index/AToken.png"/> </a>
              <a href="javascript:;"><img class="fImg09" src="../assets/images/index/buluoke.png"/> </a>

            </ul>
          </div>
          <div class="moileNone">
            <a href="javascript:;"><img class="fImg01" src="../assets/images/index/kushen.png"/> </a>
            <a href="javascript:;"><img class="fImg02" src="../assets/images/index/jiedianziben.png"/> </a>
            <a href="javascript:;"><img class="fImg03" src="../assets/images/index/chuangshiziben.png"/> </a>
            <a href="javascript:;"><img class="fImg04" src="../assets/images/index/fengwo.png"/> </a>
            <a href="javascript:;"><img class="fImg05" src="../assets/images/index/jinsecaijing.png"/> </a>

            <a href="javascript:;"><img class="fImg06" src="../assets/images/index/xiaocong.png"/> </a>
            <a href="javascript:;"><img class="fImg07" src="../assets/images/index/bishijie.png"/> </a>
            <a href="javascript:;"><img class="fImg08" src="../assets/images/index/AToken.png"/> </a>
            <a href="javascript:;"><img class="fImg09" src="../assets/images/index/buluoke.png"/> </a>

          </div>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <div class="footer">
      <div class="clearfix">
        <ul class="fl icon-logo clearfix">
          <li class="fl codeBy1">
            <img src="../assets/images/index/weixin.png"/>
            <img class="codeImg1" src="../assets/images/index/weixincode.png"/>
          </li>
          <li class="fl ">
            <a target="_blank" href="https://twitter.com/chaindigg">
              <img src="../assets/images/index/Twitter.png"/>
            </a>
          </li>
          <li class="fl codeBy2">
            <img src="../assets/images/index/qq.jpg"/>
            <img class="codeImg2" src="../assets/images/index/qqcode.png"/>
          </li>
          <li class="fl">
            <a  target="_blank"  href="https://weibo.com/p/1006066624170357/home?from=page_100606&mod=TAB&is_all=1#place">
              <img src="../assets/images/index/weibo.png"/>
            </a>
          </li>
        </ul>
        <p class="fr xxinxi">
          <span>电话: 400-6988-698 &emsp;邮箱: info@chaindigg.com</span>  &emsp;公司地址: 中国北京市海淀区上地三街9号金隅嘉华大厦C座408
        </p>
      </div>
      <div class="lines"></div>
      <div class="bottom-main" @click="bottom_main">
        <span>Copyright © 2017-2018 北京知帆科技有限公司 版权所有</span>&emsp;免责声明
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "index",
    data(){
      return{
        name:"index"
      }
    },
    methods:{
      showNav:function(){

        if($(".nav").css("display") == "none"){
          $(".nav").css("display","block");
        }else{
          $(".nav").css("display","none");
        }
      },
      toLod:function (obj) {
        var that = this;
        var Height = $(window).height();
        var thisClick = "."+obj;
        var Top1 = $(thisClick).offset().top;
        //console.log(Height)
        //console.log(Top1)
        if(obj == "lod8"){
          Top1 = Top1 - 180;
        }
        if(obj == "footer"){
          Top1 = Top1 - 180;
        }
        $('body,html').animate({scrollTop:Top1-55},800);
        //console.log(that.isFalg())
        if(that.isFalg() == "mobile"){
          $(".nav").css("display","none");
        }
      },
      menu() {
          if (this.$route.name !== 'index')
              return;
        var that = this;
        var Height = $(window).height();
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
        //console.log(this.scroll)
        // 第一屏
        // var Top1 = $(".lod1").offset().top;
        // if(Top1 - Height - that.scroll <= -200){
        //   $(".lod1 p").addClass("animated fadeInLeft");
        // }
        // 第二屏
        var Top1 = $(".lod2").offset().top;
        if(Top1 - Height - that.scroll <= -200){
          if(that.isFalg() != "mobile"){
            $(".lod2-div").addClass("animated fadeInRight");
          }

        }
        // 第三屏
        var Top1 = $(".lod3").offset().top;
        if(Top1 - Height - that.scroll <= -202){
          if(that.isFalg() != "mobile"){
            $(".lod3-div").addClass("animated fadeInRight");
            $(".lod3 .img").addClass("animated fadeInLeft");
          }

        }
        // 第四屏
        var Top1 = $(".lod4").offset().top;
        if(Top1 - Height - that.scroll <= -200){
          if(that.isFalg() != "mobile"){
            $(".lod4-div").addClass("animated fadeInLeft");
            $(".lod4 .img").addClass("animated fadeInRight");
          }

        }
        // 第五屏
        var Top1 = $(".lod5").offset().top;
        if(Top1 - Height - that.scroll <= -200){
          if(that.isFalg() != "mobile"){
            $(".lod5-div").addClass("animated fadeInRight");
            $(".lod5 .img").addClass("animated fadeInLeft ");
          }

        }
        // 第六屏
        var Top1 = $(".lod6").offset().top;
        if(Top1 - Height - that.scroll <= -200){
          if(that.isFalg() != "mobile"){
            $(".lod6-div").addClass("animated fadeInLeft ");
            $(".lod6 .img").addClass("animated fadeInRight ");
          }

        }
        // 第七屏
        var Top1 = $(".lod7").offset().top;
        if(Top1 - Height - that.scroll <= -200){
          if(that.isFalg() != "mobile"){
            $(".lod7 .row").addClass("animated fadeInRight ");
          }
        }

        //console.log(Top1 - Height - that.scroll <= -1600)
        //第八屏
        var Top1 = $(".lod8").offset().top;
        if(Top1 - Height - that.scroll <= -1600){
          if(that.isFalg() != "mobile"){
            $(".FriendLogo").addClass("animated lightSpeedIn ");
          }

        }
        var lod1 = $(".lod1").offset().top;
        var lod2 = $(".lod2").offset().top;
        var lod3 = $(".lod3").offset().top;
        var lod7 = $(".lod7").offset().top;
        var lod8 = $(".lod8").offset().top;
        var footer = $(".footer").offset().top;
        if(lod1 - Height - that.scroll <= 0){
          $(".nav li").find("a").removeClass("activeLi");
          $(".nav li").eq(0).find("a").addClass("activeLi");
        }

        if(lod2 - Height - that.scroll <= -200){
          $(".nav li").find("a").removeClass("activeLi");
          $(".nav li").eq(1).find("a").addClass("activeLi");
        }

        if(lod3 - Height - that.scroll <= -200){
          $(".nav li").find("a").removeClass("activeLi");
          $(".nav li").eq(2).find("a").addClass("activeLi");
        }

        if(lod7 - Height - that.scroll <= -200){
          $(".nav li").find("a").removeClass("activeLi");
          $(".nav li").eq(3).find("a").addClass("activeLi");
        }
        console.log(lod8 - Height - that.scroll)
        if(lod8 - Height - that.scroll <= -590){
          $(".nav li").find("a").removeClass("activeLi");
          $(".nav li").eq(4).find("a").addClass("activeLi");
        }

        console.log(footer)
        console.log(Height)
        console.log(that.scroll)
        if(footer - Height - that.scroll <= -120){
          $(".nav li").find("a").removeClass("activeLi");
          $(".nav li").eq(5).find("a").addClass("activeLi");
        }
      },
      hideMoileNav:function () {
        var that = this;
        //console.log($(".nav").css("display"))
        if($(".nav").css("display") == "block"){
          $(".nav").css("display","none")
        }
      },
      isFalg:function (){
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {

          //alert("mobile")
          return "mobile"
        }
        else {

          //alert("pc")
          return "pc"
        }
      },
      //点击免责声明
      bottom_main :function (){
       //window.location.href = 'https://info.chaindigg.cn/announcement'
        this.$router.push('/disclaimer')
      }
    },
    mounted(){

      window.addEventListener('scroll', this.menu);
      window.addEventListener('touchmove', this.hideMoileNav)
    }
  }
</script>

<style src="../assets/css/index.css" scoped>

</style>
