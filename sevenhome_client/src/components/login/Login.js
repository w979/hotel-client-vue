import axios from "axios";
import Vcode from "vue-puzzle-vcode";
export default {
  name: "Login",
  components:{
    Vcode
  },
  data(){
    return{
      isShow: false, // 验证码模态框是否出现
      imgCode: undefined,
      status: '',//状态
      ip:'',
      address:[],//地址数组

      country:'',//国
      regionName:'',//省
      city:'',//市
      area:'',//区

      users:{
        username:'',
        password:''
      },
      //表单校验
      rules:{
        username:[
          {required: true, message: '账号不能为空', trigger: 'blur'},
          {min: 3,max:6, message: '账号长度3~6位'}
        ],
        password:[
          { required: true, message: '密码不能为空', trigger: 'blur'},
          {min: 3,max:6, message: '密码长度3~6位'}
        ]
      }
    }
  },methods:{
    //获取当前登录人的位置信息
    getAddress(){
      axios.get('https://api.ip138.com/ip/?ip=&datatype=jsonp&token=3091bbb35074ef6822209a7d1e052413',{params:{}}).then(result=>{
        console.log(result.data)
        this.address=result.data.data;
        this.regionName=this.address[1];
        this.city=this.address[2];
        this.area=this.address[3];
        this.ip=this.regionName+'-'+this.city+'-'+this.area
      }).catch(e=>{
        console.log(e);
      })
    }
    , async success(){
      //异步登录
      axios.get('/api/login',{params:{username:this.users.username,password:this.users.password}}).then(result => {
       console.log(result.data)
       if(result.data.code == 200) {
          this.isShow=false;
          //将当前用户位置信息存储
          localStorage.setItem('ip',this.ip);
          //将token和用户信息存储带本地消息
          localStorage.setItem('user',JSON.stringify(result.data.data));
          localStorage.setItem('username',result.data.data.username)
          this.$notify({title: '登录成功', message: '欢迎您：'+result.data.data.username, type: 'success'});
          //跳转首页组件
          this.$router.push('/');
          window.location.reload();
        } else {
          this.$message.error(result.data.msg);
          this.isShow=false;
        }
      }).catch(e => {
        this.$message.error('服务器正忙...');
      });
    },
    btnLogin(userFrom){
      this.$refs[userFrom].validate((valid) => {
        if (!valid) {
          return ;
        } else {
          this.isShow = true
          //表单验证失败
          return false;
        }
      });
    },btnReset(userFrom){
      this.$refs[userFrom].resetFields();
    }
  },created() {
    this.getAddress()
  }
}
