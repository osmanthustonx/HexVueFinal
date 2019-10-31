<template>
  <div class="d-flex content container">
    <div class="paymentWrap">
      <div class="paymentBorder">
        <div class="my-5 row justify-content-center">
          <form class="col-md-6" @submit.prevent="createOrder">
            <div class="form-group">
              <label for="useremail">Email</label>
              <input type="email" class="form-control" name="email" id="useremail"
                v-model="form.user.email"
                v-validate="'required|email'"
                :class="{'is-invalid':errors.has('email')}"
                placeholder="請輸入 Email">
              <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
            </div>

            <div class="form-group">
              <label for="username">收件人姓名</label>
              <input type="text" class="form-control" name="name" id="username"
                v-model="form.user.name"
                v-validate="'required'"
                :class="{'is-invalid':errors.has('name')}"
                placeholder="輸入姓名" />
                <span class="text-danger" v-if="errors.has('name')">必須輸入姓名</span>
            </div>

            <div class="form-group">
              <label for="usertel">收件人電話</label>
              <input type="tel" class="form-control" id="usertel" name="tel"
                v-model="form.user.tel"
                :class="{'is-invalid':errors.has('tel')}"
                v-validate="'required|digits:10'"
                placeholder="請輸入電話">
              <span class="text-danger" v-if="errors.has('tel')">必須輸入電話</span>
            </div>

            <div class="form-group">
              <label for="useraddress">收件人地址</label>
              <input type="text" class="form-control" name="address" id="useraddress"
                v-model="form.user.address"
                v-validate="'required'"
                :class="{'is-invalid':errors.has('address')}"
                placeholder="請輸入地址">
              <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
            </div>

            <div class="form-group">
              <label for="comment">留言</label>
              <textarea name="" id="comment"
                class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
            </div>
            <div class="text-right">
              <button class="btn btn-danger">送出訂單</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },

  methods: {
    createOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order `;
      vm.isLoading = true;
      this.$validator.validate().then((valid) => {
        if (valid) {
          console.log('驗證成功');
          this.$http.post(api, { data: vm.form }).then((response) => {
            console.log('訂單已建立', response);
            if (response.data.success) {
              vm.$router.push(`billcheck/${response.data.orderId}`);
            }
            vm.isLoading = false;
          });
        } else {
          console.log('欄位不完整');
          vm.isLoading = false;
        }
      });
    },
  },
};
</script>
