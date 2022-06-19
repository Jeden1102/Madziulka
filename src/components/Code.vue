<template>
  <div class="flex" v-if="showCode">
    <div>
    <div class="ma-auto position-relative" style="max-width: 300px">
      <v-otp-input
        v-model="otp"
        :disabled="loading"
        @finish="onFinish"
        length="4"
        focus
      ></v-otp-input>
      <v-overlay absolute :value="loading">
        <v-progress-circular
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-overlay>
    </div>
    </div>
    <h1 class="text-3xl">Wpisz kod - otrzymany za buziaka ( może być więcej )</h1>
    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      :timeout="2000"
    >
      {{ text }}
    </v-snackbar>
  </div>
</template>
<script>
  export default {
    data: () => ({
      loading: false,
      snackbar: false,
      snackbarColor: 'default',
      otp: '',
      text: '',
      expectedOtp: '2107',
      showCode:true
    }),
    mounted() {
        if(localStorage.getItem('code')=='true'){
            this.showCode = false;
        }
    },
    methods: {
      onFinish (rsp) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
          this.text = `Processed OTP CODE with "${rsp}" (${this.snackbarColor})`
          if(rsp==this.expectedOtp){
            localStorage.setItem('code',true);
            this.showCode = false
          }
          this.snackbar = true
        }, 1500)
      },
    },
  }
</script>
<style >
     .position-relative {
   position: relative;
 }
</style>