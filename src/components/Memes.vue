<template>
  <div ref="wrapper">
    <div class="memes-list" ref="list">
      <a
        v-for="(item, index) in memes"
        :key="index"
        class="memes"
        :href="item"
        target="__black"
      >
        <img
          src="@/assets/image/loading.gif"
          v-lazy="item"
          @error.once="onError"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import errorImG from '@/assets/image/error.jpg'
import memes from '@/../public/memes.json'
import { ref, onMounted } from 'vue'

memes.sort(() => Math.random() - 0.5)

const wrapper = ref<HTMLElement>()
const list = ref<HTMLElement>()

const onError = (e: any) => {
  if (e?.path?.[0]) {
    e.path[0].src = errorImG
  }
}

const setWarpperWidth = () => {
  if (list.value && wrapper.value) {
    list.value.style.width = (((wrapper.value.offsetWidth / 160) | 0) || 1) * 160 + 'px'
  }
}

onMounted(() => {
  setWarpperWidth()
  window.onresize = () => {
    setWarpperWidth()
  }
})
</script>

<style lang="stylus">
.memes-list
  display flex
  flex-wrap wrap
  margin auto

  .memes
    overflow hidden
    display flex
    align-items center
    justify-content center
    height 160px
    width 160px
    box-sizing border-box
    border 1px solid rgba(0, 0, 0, 0.05)

    img
      max-width 100%
      max-height 100%
</style>
