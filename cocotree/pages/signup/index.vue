<template>
    <div class="md:container md:mx-auto">
      <div class="flex justify-center items-center h-screen">
      <div class="box-content p-4 w-96 border-1 shadow-xl field rounded-lg">
 

        <div class="columns-4 ">
          <div class="field place-content-center">
          <img src="~/assets/logo.png"  alt="Cocotree" width="50%" height="50%" >
          </div>

          <h1 class="title text-xl">Sign Up</h1>

          <div class="field place-content-center">
              <input
                class="w-4/5 border-2 p-3 rounded-lg outline-none"
                v-model="$v.username.$model"
               :class="{'border-red-400': $v.username.$error }"
                type="text"
                placeholder="Username"
              />
            
          </div>
          <div class="field place-content-center">
              <template v-if="$v.username.$error">
              <p class="red" v-if="!$v.username.required">
                This field is required
              </p>
              <p class="red" v-if="!$v.username.minLength">
                Must be at least 5 characters
              </p>
            </template>
          </div>

          

          <div class="field place-content-center">
              <input
                v-model="$v.password.$model"
                :class="{ 'border-red-400': $v.password.$error }"
                class="w-4/5 border-2 p-3 rounded-lg outline-none "
                type="password"
                placeholder="Password"
              />
            
          </div>
          <div class="field place-content-center">
              <template v-if="$v.password.$error">
              <p class="red" v-if="!$v.password.required">
                This field is required/
              </p>
              <p class="red" v-if="!$v.password.minLength">
                Must be at least 8 character/
              </p>
              <p class="red" v-if="!$v.password.complex">
                Password is too easy
              </p>
            </template>
          </div>

          <div class="field place-content-center">
              <input
                v-model="$v.confirm_password.$model"
                :class="{ 'border-red-400': $v.confirm_password.$error }"
                class="w-4/5 border-2 p-3 rounded-lg outline-none"
                type="password"
                placeholder="Confirm Password"
              />
            
          </div>
          <div class="field place-content-center">
              <template v-if="$v.confirm_password.$error">
              <p class="red" v-if="!$v.confirm_password.sameAs">
                Password not match
              </p>
            </template>
          </div>


          <div class="field place-content-center space-x-1">
              <input
                v-model="$v.first_name.$model"
                :class="{ 'border-red-400': $v.first_name.$error }"
                class="w-2/5 border-2 p-3 rounded-lg outline-none"
                type="text"
                placeholder="First Name"
              />
            <input
                v-model="$v.last_name.$model"
                :class="{ 'border-red-400': $v.last_name.$error }"
                class="w-2/5 border-2 p-3 rounded-lg outline-none "
                type="text"
                placeholder="Last Name"
              />
            
          </div>

          <div class="field place-content-center">
              <template v-if="$v.last_name.$error || $v.first_name.$error">
              <p class="red" v-if="!$v.last_name.required">
                This field is required
              </p>
            </template>
          </div>
        <div class="field place-content-center">
          <button class="buttton rounded-lg h-14 bg-red-400 border-2 w-4/5 place-content-center mt-px" @click="submit()"><p class="text-white">Sign Up</p></button>

          
          </div>
          <!-- <div class="field place-content-center">
          <p class="p-1 ">Already have an account? <a href="#">Login</a></p>
          </div> -->
        </div>
      </div>
      </div>
</div>
      
    
</template>

<script>
import axios from 'axios'
import {
  required,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";


function complexPassword(value) {
  if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
    return false;
  }
  return true;
}

export default {
  data() {
    return {
      username: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
    };
  },
  methods: {
    submit() {
      // Validate all fields
      this.$v.$touch();

      // เช็คว่าในฟอร์มไม่มี error
      if (!this.$v.$invalid) {
        let data = {
          username: this.username,
          password: this.password,
          confirm_password: this.confirm_password,
          email: this.email,
          mobile: this.mobile,
          first_name: this.first_name,
          last_name: this.last_name,
        };

        // axios
        //   .post("http://localhost:3000/user/signup", data)
          
      }
      }
  },
  validations: {
    password: {
      required: required,
      minLength: minLength(8),
      complex: complexPassword,
    },
    confirm_password: {
      sameAs: sameAs("password"),
    },
    username: {
      required: required,
      minLength: minLength(5),
      maxLength: maxLength(20),
    },
    first_name: {
      required: required,
    },
    last_name: {
      required: required,
    },
  },
};
</script>

<style>
.red {
  color: red;
}
.title{
  text-align: center;
  margin: 3%;
  color: #ECCB48;
}
.field{
  margin-bottom: 1%;
  display: flex;
}


</style>