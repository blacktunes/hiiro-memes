<template>
  <div ref="wrapper">
    <div class="memes-list" ref="list">
      <a
        v-for="item in memes"
        :key="item"
        class="memes"
        :href="URL + decode(item)"
        target="__black"
      >
        <img src="@/assets/image/loading.png"
        v-lazy="URL + decode(item)" @load="onLoad" @error.once="onError"/>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Setting from '@/../setting/setting.json'
import { ref, onMounted } from 'vue'

const CDN = Setting['CDN']
const URL = process.env.NODE_ENV === 'production' && CDN ? `${CDN}/` : '/memes/'

const wrapper = ref()
const list = ref()

const decode = (str: string) => {
  return str.replace(/%/g, '%25')
}

const memesList = require.context('@/../public/memes', false, /.*$/).keys().map(item => {
  return item.substring(2)
})

const memes = ref(memesList)

const onLoad = (el) => {
  if (!el.path[0]) return
  if (el.path[0].offsetHeight > 160) {
    el.path[0].style.width = 'auto'
    el.path[0].style.height = '100%'
  }
}

const onError = (event) => {
  if (event?.path?.[0]) {
    event.path[0].src = require('@/assets/image/loading.png').default
  }
}

const setWarpperWidth = () => {
  list.value.style.width = (((wrapper.value.offsetWidth / 160) | 0) || 1) * 160 + 'px'
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
    display flex
    align-items center
    justify-content center
    height 160px
    width 160px
    box-sizing border-box
    border 1px solid rgba(0,0,0,0.05)

    img
      width 100%
</style>
