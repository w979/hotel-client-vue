import axios from "axios";
export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:'登录' ,// 用户姓名
      address:'', //当前登录位置
      roomTypeItem:[], // 房间类型列表
      roomtype:'',

      intime:'', // 入住时间
      outtime:'', // 离开时间
    }
  },methods:{
    // 所有房间类型列表
    queryRoomType(){
      axios.get('api/subscribe/roomType',{params:{}}).then(res=>{
        this.roomTypeItem=res.data.data;
        console.log(this.roomTypeItem)
      }).catch(e=>{
        this.$message.error('服务器错误');
      })
    }
    ,btnOut(){
      window.localStorage.clear(); //清除缓存
      window.location.reload();
    }
    //登录按钮
    ,btnLogin(){
      if (this.username == '登录'){
        this.$router.push({path:'login'})
      }
    }
    // 预订按钮
    ,btnBooking(){
      let username =  localStorage.getItem('username');
      if (username == null){
        // 跳转到登录页面
        this.$router.push({path:'login'})
      }else {
        console.log(this.roomtype)
        if (this.roomtype == null || this.roomtype==''){
          this.$message.warning('请选择房型');
          return ;
        }
        localStorage.setItem('intime',this.intime);
        localStorage.setItem('outtime',this.outtime);
        localStorage.setItem('roomtype',this.roomtype);
        this.$router.push({path:'contact'})
      }
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
    this.username=localStorage.getItem('username');
    this.address=localStorage.getItem('ip');
    this.queryRoomType();

  }
}
import('../../assets/css/superfish.css')
import('../../assets/css/bootstrap-datepicker.min.css')
import('../../assets/css/cs-select.css')
import('../../assets/css/cs-skin-border.css')
import('../../assets/css/themify-icons.css')
import('../../assets/css/flaticon.css')
import('../../assets/css/icomoon.css')
import('../../assets/css/style.css')
import('../../assets/css/flexslider.css')
