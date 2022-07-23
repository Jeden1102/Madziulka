<template>
  <div class="flex" v-if="showCode">
        <div class="flex">
            <template v-for="(l,i) in pinlength" :key="`codefield_${i}`">
                <input :autofocus="i == 0" :id="`codefield_${i}`" class="h-16 w-12 border mx-2 rounded-lg flex items-center text-center font-thin text-3xl" value="" maxlength="1" max="9" min="0" inputmode="decimal" @keyup="stepForward(i)" @keydown.backspace="stepBack(i)" @focus="resetValue(i)"/>
            </template>
        </div>
    <h1 class="text-3xl">Wpisz kod - otrzymany za buziaka ( może być więcej )</h1>
  </div>
</template>
<script>
  export default {
    data() {
        return {
                  loading: false,
      snackbar: false,
      snackbarColor: 'default',
      otp: '',
      text: '',
      expectedOtp: '2107',
      showCode:true,
      pinlength:4,
        }
    },
    mounted() {
        if(localStorage.getItem('code')=='ok'){
            this.showCode = false;
        }
    },
    methods: {
                stepForward(i) {
            if (document.getElementById(`codefield_${i}`).value && i != this.pinlength - 1) {
                document.getElementById(`codefield_${i+1}`).focus()
                document.getElementById(`codefield_${i+1}`).value = ''
            }
            this.checkPin()
        },
        stepBack(i) {
            if (document.getElementById(`codefield_${i-1}`).value && i != 0) {
                document.getElementById(`codefield_${i-1}`).focus()
                document.getElementById(`codefield_${i-1}`).value = ''
            }
        },
                checkPin() {
            let code = ''
            for (let i = 0; i < this.pinlength; i++) {
                code = code + document.getElementById(`codefield_${i}`).value
            }
            if (code.length == this.pinlength) {
                this.validatePin(code)
            }
        },
        validatePin(code) {
            // Check pin on server
            if (code == '2107'){
                localStorage.setItem('code','ok')
                this.showCode = false;
            }
        }
    //   onFinish (rsp) {
    //     this.loading = true
    //     setTimeout(() => {
    //       this.loading = false
    //       this.snackbarColor = (rsp === this.expectedOtp) ? 'success' : 'warning'
    //       this.text = `Processed OTP CODE with "${rsp}" (${this.snackbarColor})`
    //       if(rsp==this.expectedOtp){
    //         localStorage.setItem('code',true);
    //         this.showCode = false
    //       }
    //       this.snackbar = true
    //     }, 1500)
    //   },
    },
  }
</script>
<style >
     .position-relative {
   position: relative;
 }
</style>