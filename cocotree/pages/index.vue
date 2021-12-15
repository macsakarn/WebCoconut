<template>
  <div>
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

    <div v-for="item in bottles" :key="item.message" >
      {{item.message}}
    </div>

      <svg viewBox="-10 -20 300 300" style="position: absolute" class="bottle" key="row1">
        <path
          d="M 0 9 L 0 -7 C 0 -8 1 -9 1 -9 L 2 -10 L 2 -17 C 2 -18 6 -18 6 -17 C 6 -16 2 -16 2 -17 S 6 -18 6 -17 L 6 -16 L 6 -17 L 6 -15 C 6 -14 2 -14 2 -15 S 6 -16 6 -15 L 6 -10 L 7 -9 C 7 -9 8 -8 8 -7 L 8 -5 L 8 9 C 8 10 0 10 0 9 L 0 9 Q 1 8 1 6 L 1 -5 C 1 -5 1 -7 0 -7 C 1 -7 1 -5 1 -5 L 1 6 Q 1 8 0 9"
          stroke="#000000"
          stroke-width="0.15"
          fill="#F4F6F7"
          class="insidebottle"
          onclick="alert('aaaaaa')"
        />
      </svg>
    

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

    <svg viewBox="-10 -20 300 300" style="position: absolute" class="bottle2" onclick="alert('aaaaaa')" key="row2">
        <path
          d="M 0 9 L 0 -7 C 0 -8 1 -9 1 -9 L 2 -10 L 2 -17 C 2 -18 6 -18 6 -17 C 6 -16 2 -16 2 -17 S 6 -18 6 -17 L 6 -16 L 6 -17 L 6 -15 C 6 -14 2 -14 2 -15 S 6 -16 6 -15 L 6 -10 L 7 -9 C 7 -9 8 -8 8 -7 L 8 -5 L 8 9 C 8 10 0 10 0 9 L 0 9 Q 1 8 1 6 L 1 -5 C 1 -5 1 -7 0 -7 C 1 -7 1 -5 1 -5 L 1 6 Q 1 8 0 9"
          stroke="#000000"
          stroke-width="0.15"
          fill="#F4F6F7"
          class="insidebottle"
        />
      </svg>

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
  </div>
</template>

<script>
export default {
  data: {
    bottles: [
      { message: 'JIM' },
      { message: 'JOSH' },
      { message: 'TUU' },
      { message: 'FLUKE' },
      { message: 'BANK' },
      { message: 'MAC' },
      { message: 'TAKAI' },
    ],
  },

}

</script>

<style>
html {
  margin: 0px;
  overflow: hidden;
  /* background-color: #00e4d1; */
  background: linear-gradient(to bottom, #33ccff 0%, #ffffff 130%);
}

.wave {
  fill: #dfecfb;
}

.bigwave {
  display: flex;
  transform: scale(2);
  /* right: 200vw; */
}

.groupwave {
  top: 45vh;
  right: 22vw;
  position: relative;
  animation: 10s linear infinite simplehamonic;
}

.wave2 {
  fill: #22577e;
}

.bigwave2 {
  display: flex;
  transform: scale(2);
  /* right: 200vw; */
}

.groupwave2 {
  top: 45vh;
  right: 20vw;
  position: relative;
  animation: 13s linear infinite simplehamonic;
}

.wave3 {
  fill: #5584ac;
}

.bigwave3 {
  display: flex;
  transform: scale(2);
  /* right: 200vw; */
}

.groupwave3 {
  top: 45vh;
  right: 18vw;
  position: relative;
  animation: 9s linear infinite simplehamonic;
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
  z-index: 2;
}

.bottle {
  opacity: 0.4;
  top: 45vh;
  right: 18vw;
  animation: 15s linear 1s infinite bottleSimplehamonic;
}

.bottle2 {
  opacity: 0.4;
  top: 52vh;
  right: 18vw;
  animation: 17s linear 1.5s infinite bottleSimplehamonic;
}

.insidebottle {
  animation: 15s linear 2s infinite vibrate;
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
    transform: translateX(0%);
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