<template>
    <div class='login'>
        <p class="logo"></p>
        <h1>华为账号</h1>
        <h6>登录账号已使用云空间、应用市场及更多服务</h6>
        
            <main class="form">
                <van-form @submit="onSubmit">
                    <van-field
                    class="user"
                        v-model="username"
                        name="userName"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                    class="pass"
                        v-model="password"
                        type="password"
                        name="password"
                        placeholder="密码"
                        :label-height="3.25"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <div style="margin: 16px;" >
                        <van-button round block type="info" class="btn" native-type="submit">登录</van-button>
                    </div>
                    </van-form>
            </main>
            <h3 class="xxx">其他方式登录</h3>
            <p class="qq"><img src="https://id1.cloud.huawei.com/CAS/static_rss/rss_73/CAS/css/mobile/images/wap_qq_emui9.png?cas20191101" alt=""></p>
            <h6 class="foo"><span>遇见问题</span><span class="mid">|</span><span>隐私声明</span></h6>
        
    </div>
</template>

<script>
import '../../../public/css/reset.css';
import { Toast } from 'vant';
import { reqLogin } from "../../api/user";
import { setToken } from '../../utils/auth'
export default {
    
    components: {},
    data() {
        
        return {
             username: '',
             password: '',
        };
    },
    computed: {},
    watch: {},
    
    methods: {
    async onSubmit(values) {
         console.log('submit', values);
         const result =await reqLogin(values);
         console.log(result);
         if(result.status===200){
           Toast('登录成功')
           setToken(result.data.token)
           this.$router.push("/");
         }
    }
    },
    created() {
        
    },
    mounted() {
        
    },
    beforeCreate() {}, 
    beforeMount() {},
    beforeUpdate() {}, 
    updated() {}, 
    }
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.login{
     margin: auto;
}
.logo{
    margin: auto;
    width: 2.5rem;
    height: 2.5rem;
    background-image: url(https://id1.cloud.huawei.com/CAS/static_rss/rss_73/CAS/css/mobile/images/ic_huaweiid_security_logo40.png);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
    padding-top: 1.25rem;
    position: relative;
}
.form{
    margin-top: -5rem;
}
.imgs{
    position: relative;
    width: 5rem;
    height: 5rem;
    top: -5.5rem;
    left: 9.375rem;
}
.iiimg{
    width: 5rem;
    height: 5rem;
    position: relative;
    top: -5.75rem;
    left: 9.375rem;
   
}
h1{
    text-align: center;
    padding-top: 1rem;
    font-weight: 900;
}
h6{
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 4.125rem;
    margin-bottom: 4.5rem;

}

.form{
padding: 1.8rem 1.875rem;
}
.pass,.user,.usname{
    height: 2.8rem;
    border-bottom: solid 1px #CDCDCD;
    line-height: .7rem;
}
.btn{
    width: 100%;
    padding: 0 4rem;
    background-color: #9FCEFF;
    margin-top: 2.5rem;
}
.hhh{
    font-size: 1.2rem;
    font-weight: 900;
    text-align: center;
    color: #027DFF;
    margin-top: -1rem;
}
.xxx{
    font-size: .8rem;
    font-weight: 500;
    text-align: center;
    color: #7F7F7F;
    margin: .5rem 0;
}
.qq>img{
    width: 2.5rem;
    height: 2.5rem;
    margin: auto;
    border-radius: 50%;
    

}
.foo{
    color: #027DFF;
    font-size: 1rem;
    font-weight: 800;
}
.mid{
    margin: 1.9rem;
}

</style>