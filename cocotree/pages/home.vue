<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-items-end h-16">
          <div
            class="
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-2
              sm:static sm:inset-auto sm:ml-6 sm:pr-0
            "
          >
            <div class="ml-3 absolute">
              <div style="display: flex">
                <p style="color: #fff; width: 60vw" class="w-24">{{ name }}</p>
                <button
                  class="rounded-lg h-7 bg-red-600 border-1 w-48"
                  @click="signOut()"
                >
                  <p class="text-white place-content-center">Logout</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <svg viewBox="60 -210 500 2000" style="position: absolute">
      <path
        class="coconut"
        fill="#f17458"
        d="M 23 0 c -3.309 -6.455 0.484 -18.478 1 -21 c 0.949 0 0.66 -1.014 3 -1 c 3.996 3.102 10.32 8.621 10.32 10.261 c 0 0.271 0.223 0.498 0.494 0.5 c 0.002 0 0.004 0 0.006 0 c 0.271 0 0.494 -0.218 0.5 -0.487 c 0.01 -0.324 0.146 -7.995 -3.226 -11.444 c -0.334 -0.342 -0.69 -0.631 -1.069 -0.868 c 2.03 -0.018 4.68 0.252 6.276 1.607 c 0.938 0.794 1.394 1.852 1.394 3.233 c 0 0.245 0.18 0.454 0.42 0.493 c 0.246 0.042 0.477 -0.102 0.555 -0.333 c 0.051 -0.146 1.191 -3.645 -1.045 -6.761 c -1.93 -2.687 -5.705 -4.188 -11.24 -4.474 c 2.521 -1.077 7.221 -2.396 10.416 0.803 c 0.182 0.178 0.459 0.195 0.658 0.043 c 0.199 -0.153 0.254 -0.43 0.129 -0.647 c -0.131 -0.224 -3.229 -5.483 -8.312 -6.149 c -2.767 -0.357 -5.556 0.715 -8.297 3.206 c -0.224 -0.92 -0.781 -2.312 -2.188 -3.543 c -2.611 -2.291 -6.952 -3.072 -12.911 -2.315 c -0.081 0.008 -0.131 0.016 -0.147 0.02 c -0.267 0.049 -0.446 0.301 -0.404 0.569 s 0.283 0.448 0.559 0.419 c 0.024 -0.003 0.049 -0.007 0.074 -0.01 c 0.463 -0.047 4.023 -0.188 8.218 5.142 c -2.656 -0.812 -8.208 -2.04 -12.616 0.124 c -2.637 1.294 -4.436 3.603 -5.347 6.863 c -0.065 0.233 0.046 0.479 0.264 0.585 c 0.216 0.104 0.48 0.04 0.622 -0.156 c 0.04 -0.054 3.838 -5.123 12.46 -3.888 c -3.02 1.73 -10.212 6.608 -10.281 13.839 c -0.002 0.223 0.145 0.421 0.358 0.484 c 0.214 0.061 0.444 -0.023 0.563 -0.212 c 0.06 -0.093 6.012 -9.244 15.082 -7.825 c 1.91 1.432 -4.947 7.863 -3.285 22.921 "
      ></path>
    </svg>

    <svg viewBox="-560 -210 500 2000" style="position: absolute">
      <path
        class="coconut2"
        fill="#f17458"
        d="M 23 0 c -3.309 -6.455 0.484 -18.478 1 -21 c 0.949 0 0.66 -1.014 3 -1 c 3.996 3.102 10.32 8.621 10.32 10.261 c 0 0.271 0.223 0.498 0.494 0.5 c 0.002 0 0.004 0 0.006 0 c 0.271 0 0.494 -0.218 0.5 -0.487 c 0.01 -0.324 0.146 -7.995 -3.226 -11.444 c -0.334 -0.342 -0.69 -0.631 -1.069 -0.868 c 2.03 -0.018 4.68 0.252 6.276 1.607 c 0.938 0.794 1.394 1.852 1.394 3.233 c 0 0.245 0.18 0.454 0.42 0.493 c 0.246 0.042 0.477 -0.102 0.555 -0.333 c 0.051 -0.146 1.191 -3.645 -1.045 -6.761 c -1.93 -2.687 -5.705 -4.188 -11.24 -4.474 c 2.521 -1.077 7.221 -2.396 10.416 0.803 c 0.182 0.178 0.459 0.195 0.658 0.043 c 0.199 -0.153 0.254 -0.43 0.129 -0.647 c -0.131 -0.224 -3.229 -5.483 -8.312 -6.149 c -2.767 -0.357 -5.556 0.715 -8.297 3.206 c -0.224 -0.92 -0.781 -2.312 -2.188 -3.543 c -2.611 -2.291 -6.952 -3.072 -12.911 -2.315 c -0.081 0.008 -0.131 0.016 -0.147 0.02 c -0.267 0.049 -0.446 0.301 -0.404 0.569 s 0.283 0.448 0.559 0.419 c 0.024 -0.003 0.049 -0.007 0.074 -0.01 c 0.463 -0.047 4.023 -0.188 8.218 5.142 c -2.656 -0.812 -8.208 -2.04 -12.616 0.124 c -2.637 1.294 -4.436 3.603 -5.347 6.863 c -0.065 0.233 0.046 0.479 0.264 0.585 c 0.216 0.104 0.48 0.04 0.622 -0.156 c 0.04 -0.054 3.838 -5.123 12.46 -3.888 c -3.02 1.73 -10.212 6.608 -10.281 13.839 c -0.002 0.223 0.145 0.421 0.358 0.484 c 0.214 0.061 0.444 -0.023 0.563 -0.212 c 0.06 -0.093 6.012 -9.244 15.082 -7.825 c 1.91 1.432 -4.947 7.863 -3.285 22.921 "
      ></path>
    </svg>

    <div class="groupwave">
      <div class="bigwave">
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave"
            ></path>
          </svg>
        </div>
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave"
            ></path>
          </svg>
        </div>
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave"
            ></path>
          </svg>
        </div>
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- <div v-for="item in bottlesuser" :key="item.message">
      <svg
        viewBox="-10 -20 300 300"
        style="position: absolute;"
        class="bottle"
        key="row1"
        width="300"
      >
        <path
          d="M 0 9 L 0 -7 C 0 -8 1 -9 1 -9 L 2 -10 L 2 -17 C 2 -18 6 -18 6 -17 C 6 -16 2 -16 2 -17 S 6 -18 6 -17 L 6 -16 L 6 -17 L 6 -15 C 6 -14 2 -14 2 -15 S 6 -16 6 -15 L 6 -10 L 7 -9 C 7 -9 8 -8 8 -7 L 8 -5 L 8 9 C 8 10 0 10 0 9 L 0 9 Q 1 8 1 6 L 1 -5 C 1 -5 1 -7 0 -7 C 1 -7 1 -5 1 -5 L 1 6 Q 1 8 0 9"
          stroke="#000000"
          stroke-width="0.15"
          fill="#F4F6F7"
          class="insidebottle"
          @click="openBottle(item.message, item.image, item)"
        />
      </svg>
    </div> -->

    <div class="groupwave2">
      <div class="bigwave2">
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave2"
            ></path>
          </svg>
        </div>
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave2"
            ></path>
          </svg>
        </div>
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave2"
            ></path>
          </svg>
        </div>
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave2"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <!-- <div style="position: absolute" class="bottle">sdadsad</div> -->

    <!-- <div class=""> -->
    <!-- <div onclick="alert('AAAAA')" class="bottle2" style="z-index: 55;position: absolute;">☼</div> -->
    <!-- <svg
        viewBox="-10 -20 300 300"
        style="position: absolute"
        class="bottle2"
        key="row2"
      >
        <path
          d="M 0 9 L 0 -7 C 0 -8 1 -9 1 -9 L 2 -10 L 2 -17 C 2 -18 6 -18 6 -17 C 6 -16 2 -16 2 -17 S 6 -18 6 -17 L 6 -16 L 6 -17 L 6 -15 C 6 -14 2 -14 2 -15 S 6 -16 6 -15 L 6 -10 L 7 -9 C 7 -9 8 -8 8 -7 L 8 -5 L 8 9 C 8 10 0 10 0 9 L 0 9 Q 1 8 1 6 L 1 -5 C 1 -5 1 -7 0 -7 C 1 -7 1 -5 1 -5 L 1 6 Q 1 8 0 9"
          stroke="#000000"
          stroke-width="0.15"
          fill="#F4F6F7"
          class="insidebottle2"
          @click="openBottle()"
        />
      </svg> -->
    <div v-for="item in bottlesuser" :key="item.message">
      <div class="bottle2">
        <img
          @click="openBottle(item.message, item.image, item)"
          src="https://media.discordapp.net/attachments/645996845457211452/921313844293427200/svg-path_bottle.png?width=201&height=670"
          class="insidebottle2"
          style="z-index: 200"
          alt=""
        />
      </div>
    </div>

    <!-- <button class="btnbottle">AAAAAA</button> -->
    <!-- </div> -->

    <div class="groupwave3">
      <div class="bigwave3">
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave3"
            ></path>
          </svg>
        </div>
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave3"
            ></path>
          </svg>
        </div>
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave3"
            ></path>
          </svg>
        </div>
        <div style="width: 25%; position: relative">
          <svg viewBox="0 0 86 19">
            <path
              d="m 0 5 c 12 7 22 -7 43 0 c 26 7 25 -7 43 0 q 0 6.5 0 13 q -43 0 -86 0"
              class="wave3"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="groupsand">
      <div class="bigsand">
        <div style="width: 100%; position: relative">
          <svg viewBox="-15 -7 86 19">
            <path d="M 0 0 C 5 -7 45 -11 54 0 L 54 5 L 0 5" class="sand"></path>
          </svg>
        </div>
      </div>
    </div>
    <img
      @click="openBottlesent()"
      key="bottle2"
      src="https://media.discordapp.net/attachments/645996845457211452/921313844293427200/svg-path_bottle.png?width=201&height=670"
      class="sandbottle mx-auto"
      style="z-index: 200"
      alt=""
    />

    <div class="modal-overlay" v-show="modalbottle">
      <div class="modal">
        <p class="title text-xl">{{ usermessage }}</p>
        <div class="field place-content-center">
          <img
            :src="userimage"
            alt=""
            style="height: 253px; width: 480; object-fit: cover"
          />
          <!-- <textarea
            class="textarea1 w-4/5 border-2 p-3 h-64 rounded-lg outline-none"
            v-model="text"
            type="text"
          /> -->
        </div>
        <div class="field place-content-center space-x-1">
          <button
            class="
              rounded-lg
              h-14
              bg-red-400
              border-2
              w-2/5
              place-content-center
            "
            @click="closeBottle()"
          >
            <p class="text-white">Cancel</p>
          </button>
          <button
            class="
              rounded-lg
              h-14
              bg-green-400
              border-2
              w-2/5
              place-content-center
            "
            @click="submit()"
          >
            <p class="text-white">Save</p>
          </button>
        </div>
      </div>
    </div>

    <div class="modal-overlay" v-show="modalbottlesent" style="z-index: 1000;">
      <div class="modal">
        <p class="title text-xl">{{ usermessage }}</p>
        <div class="field place-content-center">
          <input
            v-model="title"
            class="w-4/5 border-2 p-3 rounded-lg outline-none"
            type="text"
            placeholder="Message"
          />
        </div>

        <div class=" field place-content-center relative">
          <input
                v-model="search"
                class="w-4/5 border-2 p-3 rounded-lg outline-none"
                type="text"
                placeholder="Search"
              />

            <div class="absolute top-2 right-14"> <button @click="fetchUrl()" class="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button> </div>
        </div>

        <div class="field place-content-center">
          <div v-for="url in gif" :key="url">
            <img
              :src="url"
              alt=""
              @click="useImage(url)"
              :class="{isselect : useimage == url}"
              style="height: 253px; width: 480; object-fit: cover"
            />
          </div>
        </div>
        <div class="field place-content-center space-x-1">
          <button
            class="
              rounded-lg
              h-14
              bg-red-400
              border-2
              w-2/5
              place-content-center
            "
            @click="closeBottlesent()"
          >
            <p class="text-white">Cancel</p>
          </button>

          <button
            class="
              rounded-lg
              h-14
              bg-green-400
              border-2
              w-2/5
              place-content-center
            "
            @click="sentmsg()"
          >
            <p class="text-white">Sent</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
  created() {
    this.interval = setInterval(() => {
      if (this.bottles.length > 0) {
        this.bottlesuser.push(this.bottles.shift())
      } else {
        clearInterval(this.interval)
      }
    }, 2000)
  },
  middleware: 'auth',
  data() {
    return {
      interval: null,
      bottlesuser: [],
      text: '',
      message: '',
      modalbottlesent: false,
      modalbottle: false,
      usermessage: '',
      userimage: '',
      item: '',
      search: '',
      gif:'',
      useimage:'',
      title: '',
    }
  },
  async asyncData({ $axios }) {
    const bottles = await $axios.$get(
      'http://localhost:8130/message/get/messages'
    )
    const name = await $axios.$get('http://localhost:8080/user/getName')
    return { bottles, name}
  },
  middleware: 'auth',
  methods: {
    async fetchUrl(){
      const gif = await this.$axios.$get("http://localhost:8130/message/gif/" + this.search)
      console.log(this.search);
      this.gif = gif;
    },
    openBottle(message, img, item) {
      this.modalbottle = !this.modalbottle
      this.usermessage = message
      this.userimage = img
      this.item = item
      // console.log(this.item);
    },
    closeBottle() {
      this.modalbottle = !this.modalbottle
    },
    openBottlesent() {
      this.modalbottlesent = !this.modalbottlesent
    },
    closeBottlesent() {
      this.modalbottlesent = !this.modalbottlesent
    },
    useImage(url){
      this.useimage = url;
    },
    submit() {
      alert(this.item)
    },
    signOut() {
      this.$auth.logout()
      this.$router.go({ name: 'signin' })
    },
    async sentmsg(){
      await this.$axios.post("http://localhost:8130/message/post/createMsg/", {
          "_id": null,
          "title": this.name,
          "message": this.title,
          "image": this.useimage,
})
      alert("add complete");
    }
  },
}
</script>

<style>
.textarea1 {
  resize: none;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 100;
  background-color: #e4c9a081;
}
.isselect{
  border: 5px solid greenyellow;
}
.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 5%;
  padding: 20px 0;
  border-radius: 20px;
  /* overflow: auto; */
}
.field {
  margin-bottom: 1%;
  display: flex;
}
html {
  margin: 0px;
  overflow: hidden;
  /* background-color: #00e4d1; */
  background: linear-gradient(to bottom, #33ccff 0%, #ffffff 130%);
}
.title {
  text-align: center;
  margin: 3%;
  color: #eccb48;
}

.wave {
  fill: #dfecfb;
  z-index: 0;
}

.bigwave {
  display: flex;
  transform: scale(2);
  z-index: 0;
}

.groupwave {
  top: 45vh;
  right: 22vw;
  position: relative;
  animation: 10s linear infinite simplehamonic;
  z-index: 0;
}

.wave2 {
  fill: #22577e;
  z-index: 2;
}

.bigwave2 {
  display: flex;
  transform: scale(2);
  z-index: 2;
}

.groupwave2 {
  top: 45vh;
  right: 20vw;
  position: relative;
  animation: 13s linear infinite simplehamonic;
  z-index: 2;
}

.wave3 {
  fill: #5584ac;
  z-index: 4;
}

.bigwave3 {
  display: flex;
  transform: scale(2);
  z-index: 4;
}

.groupwave3 {
  top: 45vh;
  right: 18vw;
  position: relative;
  animation: 9s linear infinite simplehamonic;
  z-index: 4;
}

.sand {
  fill: #e4c9a0;
}

.bigsand {
  display: flex;
  transform: scale(2, 1);
}

.groupsand {
  top: 40vh;
  position: relative;
  z-index: 11;
}

.bottle {
  opacity: 0.4;
  top: 45vh;
  right: 18vw;
  animation: 15s linear 1s infinite bottleSimplehamonic;
  z-index: 1;
  /* width: auto; */
}

.bottle2 {
  opacity: 0.4;
  top: 52vh;
  right: 30vw;
  animation: 17s linear 1.5s infinite bottleSimplehamonic;
  z-index: 3;
}

.groupbottle {
  /* transform: scale(50); */
  /* top: 45vh;
  right: 18vw; */
  /* position: relative; */
  animation: 17s linear 1.5s infinite bottleSimplehamonic;
}

.btnbottle {
  position: absolute;
  z-index: 3;
  top: 52vh;
  right: 18vw;
  animation: 17s linear 1.5s infinite bottleSimplehamonic;
}

.insidebottle {
  /* padding: 10vw; */
  animation: 15s linear 2s infinite vibrate;
  left: 10vw;
  z-index: 100;
  right: 30vw;
}

.insidebottle2 {
  /* padding: 10vw; */
  position: absolute;
  transform: translateX(-90%);
  animation: 17s linear 1.5s infinite vibrate;
  z-index: 3;
}
.sandbottle {
  position: absolute;
  height: 40vh;
  transform: rotate(-80deg);
  z-index: 3;
  left: 48%;
  top: 68vh;
}
.coconut {
  transform: scale(3.8, 6);
}

.coconut2 {
  transform: scale(-3.8, 6);
}

@keyframes vibrate {
  from {
    transform: translateY(0vh);
    transform: rotate(-30deg);
  }

  to {
    transform: translateY(1vh);
    transform: rotate(30deg);
  }
}

@keyframes bottleSimplehamonic {
  from {
    transform: translateX(-30%);
  }

  to {
    transform: translateX(130%);
  }
}

@keyframes simplehamonic {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(50%);
  }
}
</style>