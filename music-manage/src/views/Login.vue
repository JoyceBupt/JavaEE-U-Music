<template>
  <div class="login-container">
    <div class="title">{{ musicName }}</div>
    <div class="login">
      <el-form :model="ruleForm" :rules="rules">
        <el-form-item prop="username">
          <span>用户名</span>
          <el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <span>密码</span>
          <el-input type="password" placeholder="密码" v-model="ruleForm.password"
                    @keyup.enter="submitForm"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, getCurrentInstance, ref, reactive} from "vue";
import mixin from "@/mixins/mixin";
import {HttpManager} from "@/api";
import {RouterName, MUSICNAME} from "@/enums";

export default defineComponent({
  setup() {
    //解构赋值 { proxy }
    const {proxy} = getCurrentInstance();
    const {routerManager} = mixin();

    const musicName = ref(MUSICNAME);
    const ruleForm = reactive({
      username: "admin",
      password: "123",
    });
    const rules = reactive({
      username: [{required: true, message: "请输入用户名", trigger: "blur"}],
      password: [{required: true, message: "请输入密码", trigger: "blur"}],
    });

    async function submitForm() {
      let username = ruleForm.username;
      let password = ruleForm.password;
      const result = (await HttpManager.getLoginStatus({username, password})) as ResponseBody;
      (proxy as any).$message({
        message: result.message,
        type: result.type,
      });

      if (result.success) routerManager(RouterName.Info, {path: RouterName.Info});
    }

    return {
      musicName,
      ruleForm,
      rules,
      submitForm,
    };
  },
});
</script>

<style scoped>
.login-container {
  position: relative;
  background: url("../assets/images/background.jpg") fixed center;
  background-size: cover;
  width: 100%;
  height: 100%;
}

.title {
  position: absolute;
  top: 50%;
  width: 100%;
  margin-top: -230px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

span {
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
}

:deep(.el-input) {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  height: 35px;
  border-radius: 5px;
  transition: 0.2s;
  outline: none;
}

:deep(.el-input:focus) {
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  margin: -150px 0 0 -190px;
  padding: 35px 50px 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0.9;
}

.login-btn {
  width: 100%;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  margin-top: 5px;
}
</style>
