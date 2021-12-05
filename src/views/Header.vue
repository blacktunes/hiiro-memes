<template>
  <transition name="slide-down" appear>
    <div class="header">
      <img
        class="logo"
        v-if="showLogo"
        ref="logo"
        @click="logoClick"
        :src="HEADER.icon || ''"
        @error="logoError"
      />
      <div class="logo" v-else></div>
      <div class="title">{{ HEADER.name }}</div>

      <template v-for="(btn, index) in btnList" :key="index">
        <IBtn v-if="btn.url" :url="btn.url" :img="btn.img" />
      </template>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import Setting from '@/../setting/setting.json'
import bilibiliPng from '@/assets/image/bilibili-fill.png'
import twitterPng from '@/assets/image/twitter-fill.png'
import youtubePng from '@/assets/image/youtube-fill.png'
import IBtn from '@/components/common/IconBtn.vue'
import { ref, Ref } from 'vue'

const HEADER: {
  name?: string;
  icon?: string;
  youtube?: string;
  twitter?: string;
  bilibili?: string;
} = Setting['header'] || {}

if (HEADER.name) {
  document.title = HEADER.name
}

const onLogoClick = (logo: Ref<HTMLElement>) => {
  let isRestart = false
  const logoClick = () => {
    if (!logo.value) return
    if (isRestart) {
      logo.value.style.animation = 'logo 1s'
    } else {
      logo.value.style.animation = 'logo-restart 1s'
    }
    isRestart = !isRestart
  }

  return logoClick
}

const btnList = [
  {
    url: HEADER.youtube,
    img: youtubePng
  },
  {
    url: HEADER.twitter,
    img: twitterPng
  },
  {
    url: HEADER.bilibili,
    img: bilibiliPng
  }
]

// 点击图标时的放大动画
const logo = ref() as Ref<HTMLElement>
const logoClick = onLogoClick(logo)

const showLogo = ref(!!HEADER.icon)
const logoError = () => {
  showLogo.value = false
}
</script>

<style lang="stylus" scoped>
.header
  z-index 5
  display flex
  align-items center
  position sticky
  top 0
  height 48px
  background linear-gradient(to right, $main-color, $sub-color), rgba(255, 255, 255, 0.8)

  *
    flex-shrink 0

  .logo
    display block
    width 35px
    height 35px
    font-size 25px
    line-height 35px
    margin 0 10px
    text-align center
    user-select none
    animation logo 1s
    animation-delay 0.5s

  .title
    color #eee
    font-size 20px
    margin-right 10px
    user-select none

  .search-btn
    width 30px
    height 30px
    margin 0 5px
    border-radius 50%
    background rgba(255, 255, 255, 0.5)

    svg
      width 60%
      height 60%
      padding 20%
      fill #666

    &:active
      background rgba(255, 255, 255, 0.6)
      box-shadow 0px 0px 10px 0px $sub-color

  .btn
    flex-shrink 0
    width 30px
    height 30px
    margin 0 10px 0 auto
    border-radius 50%
    background $main-color
    cursor pointer
    transition transform 0.2s

    svg
      height 70%
      width 70%
      padding 15%
      fill #fff

    &:hover
      box-shadow 0px 0px 5px 0px #fff
      transform scale(1.1)

    &:active
      transition none
      transform scale(1)

@media (prefers-color-scheme dark)
  .header
    background linear-gradient(to right, $main-color-dark, $sub-color-dark), rgba(100, 100, 100, 0.8)
</style>
