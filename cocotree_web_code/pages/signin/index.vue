<template>
  <div class="md:container md:mx-auto">
    <div class="flex justify-center items-center h-screen">
      <div class="box-content p-4 w-96 border-1 shadow-xl rounded">
        <div class="columns-4">
          <div class="field place-content-center mb-px">
            <img
              src="~/assets/logo.png"
              alt="Cocotree"
              width="50%"
              height="50%"
            />
          </div>
          <h1 class="title">Login</h1>

          <div class="field place-content-center">
            <input
              class="w-4/5 border-2 p-3 rounded-lg outline-none"
              v-model="name"
              :class="{ 'border-red-400': this.error != null }"
              type="text"
              placeholder="Username"
            />
          </div>

          <div class="field place-content-center mb-px">
            <input
              v-model="password"
              class="w-4/5 border-2 p-3 rounded-lg outline-none"
              type="password"
              placeholder="Password"
              :class="{ 'border-red-400': this.error != null }"
            />
          </div>
          <div class="field place-content-center">
              <template v-if="this.error != null">
              <p class="red" v-if="this.error != null">
                The username or password is incorrect
              </p>
            </template>
          </div>

          <div class="field place-content-center">
            <button
              class="
                rounded-lg
                h-14
                bg-yellow-400
                border-2
                w-4/5
                place-content-center
              "
              @click="submit()"
            >
              <p class="text-white">Login</p>
            </button>
          </div>
          <div class="field place-content-center">
            <p class="p-1">
              Don't have an account?
              <NuxtLink to="/signup" class="text-yellow-400">Sign up </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      name: '',
      password: '',
      error:null,
    }
  },
  methods: {
    addName(){
      this.$store.commit('data/add', this.name)
      console.log("Add Name");
    },
    async submit() {
      try {
        this.addName()
        const response = await this.$auth.loginWith('local', {
          data: { name:this.name, password: this.password },
        })
        if (this.$auth.loggedIn) {
          this.$axios.setToken(this.$auth.strategy.token.get())
          this.$router.replace({ name: 'home' })
        }else{
          this.error = "error"
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
 <style>
.red {
  color: red;
}
.title {
  text-align: center;
  margin: 3%;
  color: #eccb48;
}
.field {
  display: flex;
}
</style>