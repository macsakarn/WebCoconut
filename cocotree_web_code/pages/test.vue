<template>
  <div class="">
    <div class="island">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      userLogin: '',
    }
  },
  validations: {
    userLogin: {
      required,
      email,
    },
  },
}
</script>

<style>

.bigsand {
  transform: scale(2, 1);
  bottom: 0;
}
.sand {
  fill: #e4c9a0;
}

.wave {
  margin: 0px;
  padding: 0px;
  border: 0px;
  min-height: 150px;
  width: 100%;
 
  left: 0;
  animation: animation-pv6mzq 50s linear infinite;
}
.wave3 {
  top: 600px;
  background-image: url('~assets/wave3.png');
  z-index: 5;
}
.wave2 {
  top: 500px;
  background-image: url('~assets/wave2.png');
  z-index: 5;
}
.wave1 {
  top: 400px;
  background-image: url('~assets/wave1.png');
  z-index: 5;
}

@keyframes animation-pv6mzq {
  0% {
    -webkit-background-position: 0 0;
    background-position: 0 0;
  }
  100% {
    -webkit-background-position: 972px 0;
    background-position: 972px 0;
  }
}
</style>