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
                <h1 class="text-center">我们的服务</h1>
                <p>最好的服务带给最爱的你们</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="fh5co-services-section">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="services">
                <span><i class="ti-location-pin"></i></span>
                <div class="desc">
                  <h3>可接受的酒店位置</h3>
                  <p>
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="services">
                <span><i class="ti-alarm-clock"></i></span>
                <div class="desc">
                  <h3>全年开放</h3>
                  <p>
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="services">
                <span><i class="ti-calendar"></i></span>
                <div class="desc">
                  <h3>可以预定</h3>
                  <p>
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="services">
                <span><i class="ti-user"></i></span>
                <div class="desc">
                  <h3>服务热心</h3>
                  <p>
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="services">
                <span><i class="ti-signal"></i></span>
                <div class="desc">
                  <h3>免费wifi</h3>
                  <p>
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="services">
                <span><i class="ti-location-arrow"></i></span>
                <div class="desc">
                  <h3>免费接送</h3>
                  <p>
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                    这里是该条的介绍这里是该条的介绍这里是该条的介绍这里是该条的介绍
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <li><a class="active" @click="jumpIndexPage">网站首页</a></li>
                    <li><a @click="jumpHotelPage">房间介绍</a></li>
                    <li><a @click="jumpServicePage">服务介绍</a></li>
                    <li><a @click="jumpBlogPage">新闻中心</a></li>
                    <li><a @click="jumpContactPage">联系我们</a></li>
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
  name: "services"
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
