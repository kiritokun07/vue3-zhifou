<template>
  <div>
    <el-container>
      <el-header>
        <div style="width: 400px">
          <p style="float:left">
            <el-icon color="#409EFF" :size="50">
              <ElmentPlus/>
            </el-icon>
          </p>
          <p style="float: left;font-size: 25px;font-weight: bold">
            欢迎来到桐人管理系统
          </p>
        </div>
      </el-header>

      <el-main>
        <el-card class="login_card">
          <el-form :model="form" :rules="rules" ref="ruleFormRef" label-width="80px">
            <el-form-item label="账号：" prop="username">
              <el-input v-model="form.username" placeholder="请输入账号"/>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
              <el-input v-model="form.password" placeholder="请输入密码" type="password"/>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit()">登录</el-button>
              <el-button type="primary" @click="resetForm()">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
      <el-footer>
        <p>关于我们 | 联系我们 | 人才招聘 | 广告服务</p>
        <p>Copyright ©9999 桐人科技
          <el-tag>公众号：桐人的小屋</el-tag>
        </p>
      </el-footer>
    </el-container>
  </div>
</template>
<script setup>
import userApi from "../api/user";
import {reactive, ref} from "vue";
import {ElMessage} from "element-plus";
import router from "../router/index.js";

const form = reactive({
  username: "",
  password: "",
})
const ruleFormRef = ref()
const rules = reactive({
  username: [{required: true, message: "账号不能为空", trigger: "blur"}],
  password: [{required: true, message: "密码不能为空", trigger: "blur"}]
})

const onSubmit = () => {
  if (!ruleFormRef) {
    return
  }
  ruleFormRef.value.validate(async (valid) => {
    if (!valid) {
      return false
    }
    const res = await userApi.testLogin(form);
    if (!res.data) {
      ElMessage.error("服务器内部错误")
    } else {
      if (res.data.code === 0) {
        sessionStorage.setItem('token', res.data.data)
        router.push("/home")
      } else {
        ElMessage.error(res.data.message)
      }
    }
  })
}

const resetForm = () => {
  if (!ruleFormRef) {
    return
  }
  ruleFormRef.value.resetFields();
}
</script>

<style scoped>
.el-container {
  height: 800px;
}

.el-header {
  height: 10%;
}

.el-main {
  height: 80%;
  background-image: url("../assets/img/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 120%;
  background-position-y: bottom;
}

.login_card {
  margin: 100px 200px;
  width: 20%;
  min-width: 300px;
  height: 200px;
  border-radius: 10px;
}

.el-footer {
  height: 10%;
  text-align: center;
}
</style>