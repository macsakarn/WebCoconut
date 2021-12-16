<template>
    <div class="md:container md:mx-auto">
      <div class="flex justify-center items-center h-screen">
      <div class="box-content p-4 w-96  border-1 shadow-xl  rounded ">
 
        <div class="columns-4 ">
          <div class="field place-content-center mb-px">
          <img src="~/assets/logo.png"  alt="Cocotree" width="50%" height="50%" >
          </div>
          <h1 class="title">Login</h1>

          <div class="field place-content-center">
              <input
                class="w-4/5 border-2 p-3 rounded-lg outline-none"
                v-model="username"
                type="text"
                placeholder="Username"
              />
          </div>     

          <div class="field place-content-center mb-px">
              <input
                v-model="password"
                class="w-4/5 border-2 p-3 rounded-lg outline-none "
                type="password"
                placeholder="Password"
              />
            
          </div>


        <div class="field place-content-center">
          <button class="rounded-lg h-14 bg-yellow-400 border-2 w-4/5 place-content-center" @click="submit()"><p class="text-white">Login</p></button>
        </div>
        <div class="field place-content-center">
          <p class="p-1 ">Don't have an account? <NuxtLink to="/signup" class="text-yellow-400">Sign up </NuxtLink></p>
          </div>
        </div>
      </div>
      </div>
</div>
      
    
</template>

 <script>
 import axios from 'axios'
 
 export default {
   
   data () {
     return {
       username: "",
        password: "",
     }
   },
   methods: {
     async submit () {
       try {
         const response = await this.$auth.loginWith('local', {user: {username:this.username, password:this.password}})
         console.log(response);
         if (response.data.success){
           this.$router.replace({name : '/'})
         }
       } catch (error) {
         console.log(error);
         
       }

     }
   }
 }
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
  
  display: flex;
}
 </style>