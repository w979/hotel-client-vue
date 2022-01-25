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
                <h1 class="text-center">选择我们的酒店</h1>
                <p>最便利的活动送给你们，最艰难的工作留给我们</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fh5co-hotel-section">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="hotel-content">
                <div class="hotel-grid" style="background-image: url('./static/images/image-1.jpg');">
                  <div class="price"><small>最低</small><span>￥199/天</span></div>
                  <a class="book-now text-center" href="#"><i class="ti-calendar"></i> 立即预定</a>
                </div>
                <div class="desc">
                  <h3><a href="#">商务单人大床房</a></h3>
                  <p>
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="hotel-content">
                <div class="hotel-grid" style="background-image: url('./static/images/image-2.jpg');">
                  <div class="price"><small>最低</small><span>￥199/天</span></div>
                  <a class="book-now text-center" href="#"><i class="ti-calendar"></i> 立即预定</a>
                </div>
                <div class="desc">
                  <h3><a href="#">商务双人标间</a></h3>
                  <p>
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="hotel-content">
                <div class="hotel-grid" style="background-image: url('./static/images/image-3.jpg');">
                  <div class="price"><small>最低</small><span>￥199/天</span></div>
                  <a class="book-now text-center" href="#"><i class="ti-calendar"></i> 立即预定</a>
                </div>
                <div class="desc">
                  <h3><a href="#">精品家庭套间</a></h3>
                  <p>
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="hotel-content">
                <div class="hotel-grid" style="background-image: url('./static/images/image-4.jpg');">
                  <div class="price"><small>最低</small><span>￥199/天</span></div>
                  <a class="book-now text-center" href="#"><i class="ti-calendar"></i> 立即预定</a>
                </div>
                <div class="desc">
                  <h3><a href="#">温馨情侣套间</a></h3>
                  <p>
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="hotel-content">
                <div class="hotel-grid" style="background-image: url('./static/images/image-5.jpg');">
                  <div class="price"><small>最低</small><span>￥199/天</span></div>
                  <a class="book-now text-center" href="#"><i class="ti-calendar"></i> 立即预定</a>
                </div>
                <div class="desc">
                  <h3><a href="#">单人标间</a></h3>
                  <p>
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="hotel-content">
                <div class="hotel-grid" style="background-image: url('./static/images/image-6.jpg');">
                  <div class="price"><small>最低</small><span>￥199/天</span></div>
                  <a class="book-now text-center" href="#"><i class="ti-calendar"></i> 立即预定</a>
                </div>
                <div class="desc">
                  <h3><a href="#">双人标间</a></h3>
                  <p>
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
                    这是套间的介绍这是套间的介绍这是套间的介绍这是套间的介绍
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
  name: "hotel"
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

import('../assets/css/superfish.css')
import('../assets/css/bootstrap-datepicker.min.css')
import('../assets/css/cs-select.css')
import('../assets/css/cs-skin-border.css')
import('../assets/css/themify-icons.css')
import('../assets/css/flaticon.css')
import('../assets/css/icomoon.css')
import('../assets/css/style.css')
import('../assets/css/flexslider.css')
</script>

<style scoped>

</style>
