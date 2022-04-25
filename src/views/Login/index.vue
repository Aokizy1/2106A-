<template>
    <div class="login">
        <div class="login_box">
           <div class="img"><img src="@/assets/1.png" alt=""></div>
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
                <!-- 用户名 -->
            <el-form-item prop="username">
                <el-input 
                  placeholder="请输入用户名"
                  prefix-icon="el-icon-s-custom"
                  v-model="loginForm.username"></el-input>
            </el-form-item>
            <!-- 密码 -->
               <el-form-item prop="password">
                <el-input 
                  placeholder="请输入密码"
                  prefix-icon="el-icon-sugar"
                  v-model="loginForm.password"></el-input>
            </el-form-item>
            <!-- 按钮 -->
              <el-form-item class="login_form_btns">
                <el-button type="primary" @click="goLogin">登录</el-button>
            <el-button type="info">重置</el-button>
            </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { LoginApi } from '@/http/api'
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        username: [
          //判空处理
          { required: true, message: '请输入用户名', trigger: 'blur' },
          //字符长度处理
          {
            min: 5,
            max: 20,
            message: '输入的用户长度必需要5~20位之间',
            trigger: 'blur'
          }
        ],
        password: [
          //判空处理
          { required: true, message: '请输入密码', trigger: 'blur' },
          //字符长度处理
          {
            min: 5,
            max: 20,
            message: '输入的密码长度必需要5~20位之间',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    //登录
    goLogin() {
      this.$router.push('/home')
      console.log('login')
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return false
        const res = await LoginApi(this.loginForm)
        console.log('是否登录成功：', res)
      })
    }
  }
}
</script>
<style lang='scss' scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  // margin-top: 30px;
  background-color: #beb6b6;
}
.login_box {
  width: 40%;
  height: 250px;
  min-width: 400px;
  background: #ffffff;
  border-radius: 10px;
  padding: 0 30px;
  box-sizing: border-box;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.login_form_btns {
  display: flex;
  justify-content: flex-end;
}
.img {
  position: relative;
  left: 40%;
  top: -30px;
  width: 100px;
  height: 75px;
  border-radius: 60px;
  background: red;
  border: none;
  box-shadow: 5px 5px 5px #beb6b6;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 60px;
  border: none;
}
</style>


