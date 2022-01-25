<template xmlns:cursor="http://www.w3.org/1999/xhtml">
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

              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="padding-top: 50px">
        <div class="row">
          <div class="col-md-6">
            <div class="map">
              <!-- 地图插件-->
              <iframe src="./static/map/map.html"></iframe>
            </div>
          </div>
          <div class="col-md-6">
            <div class="col-md-12">
            <h3><a style="cursor: pointer;" @click="btnSubmit">柒家-金融港店</a></h3>
              <p>
                交通便利，地铁2号线
              </p>
              <ul class="contact-info">
                <li><i class="ti-map"></i>湖北省 武汉市 金融港北 A3栋6楼 柒家-金融港店</li>
                <li><i class="ti-mobile"></i>15671496068 鸡经理</li>
                <li><i class="ti-envelope"></i><a>15671496068@163.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div style="padding-top: 50px">
        <div class="row">
          <div class="col-md-6">
            <div class="map">
              <!-- 地图插件-->
              <iframe src="./static/map/map2.html"></iframe>
            </div>
          </div>
          <div class="col-md-6">
            <div class="col-md-12">
              <h3><a style="cursor: pointer;" @click="btnSubmit">柒家-江汉路店</a></h3>
              <p>
                交通便利，地铁2号线
              </p>
              <ul class="contact-info">
                <li><i class="ti-map"></i>湖北省 武汉市 江汉路 66号 柒家-江汉路店</li>
                <li><i class="ti-mobile"></i>15671496068</li>
                <li><i class="ti-envelope"></i><a>15671496068@163.com</a></li>
              </ul>
            </div>
            <div>
              <span><svg t="1642863525918" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4306" width="30" height="30"><path d="M753.457796 479.70855c-0.008186-0.01228-0.096191-0.12996-0.096191-0.12996L753.457796 479.70855zM514.417561 61.691037c-247.362784 0-447.889867 200.527083-447.889867 447.889867s200.527083 447.888843 447.889867 447.888843c247.362784 0 447.888843-200.526059 447.888843-447.888843S761.781368 61.691037 514.417561 61.691037zM511.558443 726.097146c-24.275893 0-43.955094-19.678178-43.955094-43.955094 0-24.27487 19.678178-43.954071 43.955094-43.954071 24.275893 0 43.954071 19.679202 43.954071 43.954071C555.512515 706.417945 535.834336 726.097146 511.558443 726.097146zM662.90543 605.076862c-11.922541 0-22.49534-5.773494-29.083385-14.674211l-0.016373 0.013303 0.177032 0.237407c-0.106424-0.141216-11.028171-14.260795-31.868825-27.991518-27.030633-17.809621-57.643861-26.840298-90.989317-26.840298-33.275871 0-63.696718 8.994861-90.419336 26.734898-16.294105 10.816347-26.39209 21.8701-29.951149 26.085098-6.453992 9.890254-17.609053 16.434298-30.300097 16.434298-19.971867 0-36.161594-16.190751-36.161594-36.162618 0-7.884574 2.53166-15.174608 6.815219-21.11797l-0.174985-0.127913c2.495844-3.437286 62.4841-84.201727 180.192965-84.201727 117.529787 0 178.354084 80.537268 180.886767 83.965343l-0.013303 0.010233c4.440126 6.004761 7.067976 13.431917 7.067976 21.472034C699.067025 588.886111 682.875251 605.076862 662.90543 605.076862zM804.600593 487.363903c-6.4192 4.66116-13.855566 6.903224-21.224394 6.903224-11.192923 0-22.840194-4.809539-29.918403-14.558577-0.208754-0.279363-21.37789-28.097942-62.052265-55.341423-53.273321-35.68371-113.628944-53.876048-179.406043-54.098105-65.778122 0.222057-126.134769 18.414395-179.407066 54.098105-40.673351 27.243481-61.842487 55.06206-62.052265 55.341423l0.096191-0.12996c-0.055259 0.072655-0.025583 0.033769-0.00921 0.011256-7.079232 9.741875-18.818601 14.677281-30.005384 14.677281-7.369851 0-14.805194-2.242064-21.225417-6.903224-16.169261-11.739369-19.761066-34.361599-8.022721-50.53086 1.068332-1.471514 26.722618-36.417421 76.284407-70.545706 28.838815-19.859303 60.181661-35.685757 93.15668-47.038316 41.142026-14.164604 84.869946-21.346167 129.96705-21.346167 0.405229 0 0.810459 0.005117 1.215688 0.007163 0.405229-0.002047 0.810459-0.007163 1.215688-0.007163 45.097104 0 88.825025 7.181563 129.96705 21.346167 32.976042 11.352559 64.317864 27.179013 93.15668 47.038316 49.562812 34.128285 75.216076 69.074192 76.284407 70.545706C824.361659 453.002304 820.769854 475.624535 804.600593 487.363903z" p-id="4307"></path></svg>
              wifi
              </span>
              <span>
                <svg t="1642863579347" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5211" width="30" height="30"><path d="M512 65.290005c-246.708891 0-446.708971 200.00008-446.708971 446.708972S265.291109 958.707948 512 958.707948c246.712985 0 446.708971-200.00008 446.708971-446.708971S758.712985 65.290005 512 65.290005zM457.033108 462.759529v281.296641c0 12.81077-10.395768 23.206538-23.206538 23.206538-12.806677 0-23.202445-10.395768-23.202445-23.206538V462.735993c-34.973536-12.927427-57.178257-54.094012-51.67901-101.68696 6.656607-57.576323 40.164768-102.734826 74.881455-102.780875 34.715663 0.047072 68.224848 45.205575 74.885547 102.780875 5.500271 47.616484-16.705474 88.783069-51.679009 101.710496z m139.235134 304.503179h-46.413076l23.206538-510.525416h23.206538v510.525416z m23.206538 0V256.737292h23.206538l23.206538 510.525416h-46.413076z" fill="#040000" p-id="5212"></path></svg>
                含早
              </span>
            </div>
              </div>
        </div>
      </div>

      <div style="padding-top: 50px">
        <div class="row">
          <div class="col-md-6">
            <div class="map">
              <!-- 地图插件-->
              <iframe src="./static/map/map3.html"></iframe>
            </div>
          </div>
          <div class="col-md-6">
            <div class="col-md-12">
              <h3><a style="cursor: pointer;" @click="btnSubmit"> 柒家-藏龙岛店</a></h3>
              <p>
                交通便利，地铁2号线
              </p>
              <ul class="contact-info">
                <li><i class="ti-map"></i>湖北省 武汉市 藏龙岛 88号 柒家-藏龙岛店</li>
                <li><i class="ti-mobile"></i>15671496068</li>
                <li><i class="ti-envelope"></i><a>15671496068@163.com</a></li>
              </ul>
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
  <div>
    <el-drawer
      title="预约确认"
      :before-close="handleClose"
      :visible.sync="dialog"
      :direction="direction"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form">
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="押金" :label-width="formLabelWidth">
            <el-input disabled v-model="form.deposit" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="会员类型" :label-width="formLabelWidth">
            <el-input disabled v-model="form.typeName" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="房费(会员折扣*房费)" :label-width="formLabelWidth">
            <el-input v-model="form.roomrate" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="入住时间" :label-width="formLabelWidth">
            <el-date-picker
              value-format="yyyy-MM-dd HH:mm:ss"
              v-model="form.intime"
              type="datetime"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="离开时间" :label-width="formLabelWidth">
            <el-date-picker
              value-format="yyyy-MM-dd HH:mm:ss"
              v-model="form.leavetime"
              type="datetime"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="身份证" :label-width="formLabelWidth">
            <el-input v-model="form.idcard" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="房间类型" :label-width="formLabelWidth">
            <el-select v-model="form.roomtype" placeholder="房型">
              <el-option
                v-for="item in roomTypeItem"
                :label="item.roomtypeName"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="最终费用" :label-width="formLabelWidth">
            <el-input disabled v-model="finalMoney" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="支付方式" :label-width="formLabelWidth">
            <el-radio v-model="form.paytype" label="1"> <el-tag>支付宝</el-tag></el-radio>
            <el-radio v-model="form.paytype" label="2">  <el-tag type="success">微信</el-tag></el-radio>
          </el-form-item>

        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm">取 消</el-button>
          <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '预约并支付' }}</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</div>

</template>

<script>
import axios from "axios";

export default {
  name: "contact",
  data(){
    return{
      user:{},
      discount:'', // 折扣
      drawer: false,
      direction: 'ltr',
      dialog: false,
      loading: false,

      roomTypeItem:[],

      finalMoney:'', //最终金额

      flag:0,

      form: {
        typeName:'',
        name:'',
        phone:'',
        intime:'',
        leavetime:'',
        origin:'1',// 线上
        deposit:'100',//押金
        roomrate:'', //房费
        roomtype:'',
        employee:'4',
        idcard:'',
        vipid:'',
        paytype:'1', // 支付方式
        status:'1', //已支付
        price:'', //价格
      },
      formLabelWidth: '80px',
      timer: null,
    }
  }
  ,methods:{
  //支付宝支付
  zfbPay() {
    let orderno = Math.ceil(Math.random() * 90000000) + 1000;
    let money = this.finalMoney;
    let name = '客人订房费用';
    axios.get('api/Alipay/PayPage',
      {params:{orderno:orderno,money:money,name:name},}).then(result=>{
      console.log(result.data)
      document.querySelector('body').innerHTML = result.data;//查找到当前页面的body，将后台返回的form替换掉他的内容
      document.forms[0].submit();
      console.log(result.data);
    }).catch(e=>{
      console.log(e)
    });
  }
    //查询当前用户的VIP类型
    ,getVip(){
      axios.get('api/subscribe/vip',{params:{id:this.user.id}}).then(res=>{
        this.discount=res.data.data.vipType.viptypeDiscount; // 折扣
        this.form.vipid=res.data.data.vipType.id; // vip id
        this.form.typeName=res.data.data.vipType.viptypeName;
       console.log(res.data)
      }).catch(e=>{
        this.$message.error('服务器错误');
      })
    }
    // 所有房间类型列表
    ,queryRoomType(){
      axios.get('api/subscribe/roomType',{params:{}}).then(res=>{
        this.roomTypeItem=res.data.data;
        console.log(this.roomTypeItem)
      }).catch(e=>{
        this.$message.error('服务器错误');
      });
    }
    ,handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定预约吗？')
        .then(_ => {
          this.loading = true;
          let subscribeFo = {
            subscribeName:this.form.name,
            subscribePhone:this.form.phone,
            subscribeIntime:this.form.intime,
            subscribeLeavetime:this.form.leavetime,
            subscribeOrigin:this.form.origin,
            subscribeDeposit:this.form.deposit,
            subscribeRoomrate:this.form.roomrate,
            vipId:this.form.vipid,
            roomtypeId:this.form.roomtype,
            employeeId:this.form.employee,
            subscribePaytype:this.form.paytype,
            subscribeStatus:this.form.status,
          }
          axios.post('api/subscribe/add',subscribeFo).then(res=>{
            if (res.data.code == 200){
              this.flag=1;
              this.$message.success("订单已生成,请完成支付");

            }else {
              this.$message.warning(res.data.msg);
            }
          }).catch(e=>{
            this.$message.error('服务器错误');
          });
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false;
              this.zfbPay();
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    }
    ,cancelForm() {
      this.loading = false;
      this.dialog = false;
      clearTimeout(this.timer);
    }
    //获取当前房间类型价格
    ,getRoomPrice(){
      axios.get('api/subscribe/price',{params:{id:this.form.roomtype}}).then(res=>{
        this.form.price=res.data.data.onlinePrice;
      }).catch(e=>{
        this.$message.error('服务器错误');
      })
    }
  //提交预约
  ,btnSubmit(){
      this.form.roomrate = parseFloat(this.form.price)*parseFloat(this.discount); // 房费
      this.finalMoney = parseInt(this.form.roomrate)+parseInt(this.form.deposit); //提交预约

      this.dialog=true;
  }
    ,jumpBlogDetailPage(){
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

  },created() {
    this.queryRoomType();
    this.user=JSON.parse(localStorage.getItem("user"));
    this.form.name=this.user.username;
    this.form.phone=this.user.useronlinePhone;
    this.form.leavetime=localStorage.getItem('outtime');
    this.form.idcard=this.user.useronlineIdcard;
    this.form.intime=localStorage.getItem('intime');
    this.form.leavetime=localStorage.getItem('outtime');
    this.form.roomtype=localStorage.getItem('roomtype');
    this.getRoomPrice();
    this.getVip();
  }
}
</script>

<style scoped>

</style>
