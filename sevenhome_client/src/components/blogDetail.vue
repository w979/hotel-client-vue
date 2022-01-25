<template>
<div>
  <div id="fh5co-wrapper">
    <div id="fh5co-page">
      <div id="fh5co-header">
        <header id="fh5co-header-section">
          <div class="container">
            <div class="nav-header">
              <a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
              <h1 id="fh5co-logo"><a href="index.html">hotel</a></h1>
              <nav id="fh5co-menu-wrap" role="navigation">
                <ul class="sf-menu" id="fh5co-primary-menu">
                  <li><a class="active" @click="jumpIndexPage">网站首页</a></li>
                  <li><a @click="jumpHotelPage">房间介绍</a></li>
                  <li><a @click="jumpServicePage">服务介绍</a></li>
                  <li><a @click="jumpBlogPage">新闻中心</a></li>
                  <li><a @click="jumpContactPage">联系我们</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

      </div>
      <!-- end:fh5co-header -->
      <div class="fh5co-parallax" style="background-image: url('./static/images/slider1.jpg');" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
              <div class="fh5co-intro fh5co-table-cell">
                <h1 class="text-center">新闻中心</h1>
                <p>关注我们的新闻，了解最新活动和优惠</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="news-content container">
        <h2>听说一种深海珍宝游到了彩蝶谷</h2>
        <p class="news-time"><i class="icon icon-calendar"></i>2017/6/1</p>
        <img src="../assets/images/image-1.jpg"/>
        <p>
          都说龙趸全身是宝，不同部位适合烹制不同菜式，彩蝶谷美食廊素来以出品风味混搭、菜式做法多样而闻名，这次的龙趸系列当然也不会让老饕们失望，大厨以“焖炖焗蒸”等多种烹饪方式，为您带来十多款龙趸菜式，深海珍宝好多美味？小编近水楼台先尝味，您就暂时要“望梅止渴”，看着小编上图啦！
        </p>
        <p>
          粤语常说“饮头啖汤”，注重食补健康的岭南人，尤其重视正式上菜前的暖场汤水，这道“天麻炖龙趸头”，用的是最为营养滋补的龙趸头，斩件加上天麻和其它配料入瓮慢火炖煮，将鱼头丰富的胶原和鲜味释放，加上淡淡的药材汤料的清香，味道清甜不油腻，最适合这种炎热的天气。
        </p>
        <p>
          对美味的追求不只是大人的权利，这道“芙蓉蛋白蒸龙趸肉”特别适合小孩子，师傅以精湛刀法加工龙趸鱼，片片均匀，没有一丝骨头；蛋白加入龙趸骨熬制的鱼汤打匀，放入鱼片同蒸。火候控制要恰到好处，鱼片刚熟，芙蓉蛋白嫩滑，每一口都是鲜美鱼肉和蛋白，绝对是小孩子下饭的好选择。
        </p>
      </div>
      <footer id="footer" class="fh5co-bg-color">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="copyright">
                <p>&copy; 2020  All Rights Reserved.
                </p>
                <img src="../assets/images/gw.jpg" />
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="col-md-3">
                  <h3>快速链接</h3>
                  <ul class="link">
                    <li><a href="index.html">网站首页</a></li>
                    <li><a href="#">房间介绍</a></li>
                    <li><a href="#">服务介绍</a></li>
                    <li><a href="#">新闻中心</a></li>
                    <li><a href="#">联系我们</a></li>
                  </ul>
                </div>
                <div class="col-md-3">
                  <h3>特色服务</h3>
                  <ul class="link">
                    <li><a>餐厅、酒吧</a></li>
                    <li><a>接送、泳池</a></li>
                    <li><a>Spa、健身</a></li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <h3>订阅</h3>
                  <p>
                    特色服务和齐全的设施等着你的到来
                  </p>
                  <form action="#" id="form-subscribe">
                    <div class="form-field">
                      <input type="email" placeholder="邮箱" id="email">
                      <input type="submit" id="submit" value="发送">
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
    <!-- END fh5co-page -->

  </div>
  <!-- END fh5co-wrapper -->
</div>
</template>

<script>
export default {
  name: "blogDetail"
  ,methods:{
    jumpBlogDetailPage(){
      this.$router.push("/blogDetail");
    },jumpHotelPage(){
      this.$router.push("/hotel");
    },jumpServicePage(){
      this.$router.push("/services");
    },jumpIndexPage(){
      this.$router.push("/");
      window.location.reload();
    },jumpBlogPage(){
      this.$router.push("/blog");
    },jumpContactPage(){
      this.$router.push("/contact");
    }
  }
}


</script>

<style scoped>

</style>
