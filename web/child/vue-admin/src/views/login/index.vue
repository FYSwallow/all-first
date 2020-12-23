<template>
  <div class="login-container">
    <el-card class="box-card login-form">
      <div slot="header" class="clearfix">
        <span>用户登录</span>
      </div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="userName"
            v-model="ruleForm.username"
            autocomplete="off"
            placeholder="admin"
          >
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            :type="passwordType"
            v-model="ruleForm.password"
            autocomplete="off"
            ref="password"
          >
            <i
              slot="suffix"
              class="el-input__icon"
              :class="
                passwordType === 'password'
                  ? 'el-icon-turn-off'
                  : 'el-icon-open'
              "
              @click="showPwd"
            ></i>
            <i
              slot="prefix"
              class="el-input__icon el-icon-lock"
              @click="showPwd"
            ></i>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            class="login-btn"
            @click="submitForm('ruleForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate.js";
export default {
  data() {
    const validateName = (rule, value, callback) => {
      if (!validUsername(value)) {
        return callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      },
      passwordType: "password"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store
            .dispatch("user/login", this.ruleForm)
            .then(() => {
              console.log(123);
            })
            .catch(() => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  .login-form {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .el-input__icon {
      font-size: 20px;
      &.el-icon-open {
        color: #46bd87;
      }
    }
  }
}
</style>