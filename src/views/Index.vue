<template>
  <transition name="first" appear>
    <div class="index">
      <Card>
        <Memes />
      </Card>
      <Card>
        <div class="content">
          <Btn
            class="btn"
            name="VTuber按钮集合"
            url="https://vbup-osc.github.io/vtuber-voice-button-collection/"
            background="rgb(100, 181, 246)"
          />
          <template v-for="item in LINK" :key="item.name">
            <Btn
              class="btn"
              :name="item.name"
              :url="item.url"
              :color="item.color"
              :background="item.background"
            />
          </template>
        </div>
      </Card>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import Setting from '@/../setting/setting.json'
import Btn from '@/components/common/Btn.vue'
import Card from '@/components/common/Card.vue'
import Memes from '@/components/Memes.vue'

// 友链列表
const LINK: {
  name: string;
  url: string;
  background?: string;
  color?: string;
}[] = Setting['link'] || []
</script>

<style lang="stylus" scoped>
a
  margin 0 5px

.index
  margin 0 auto
  width 90%

  .content
    display flex
    flex-wrap wrap

@media only screen and (max-width 600px)
  .index
    width 95%
</style>
