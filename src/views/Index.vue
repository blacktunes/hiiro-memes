<template>
  <transition name="first" appear>
    <div class="index">
      <Card>
        <Memes />
      </Card>
      <Card>
        <div style="text-align: center">Hii图数量: {{ total }}</div>
      </Card>
      <Card>
        <div style="text-align: center">随机Hii图</div>
        <div style="text-align: center">
          <a href="https://hii.hiiro.club/api/v1/random" target="_blank">
            https://hii.hiiro.club/api/v1/random
          </a>
        </div>
        <div style="text-align: center">随机Hii图链接</div>
        <div style="text-align: center">
          <a
            href="https://hii.hiiro.club/api/v1/get_random_meme"
            target="_blank"
          >
            https://hii.hiiro.club/api/v1/get_random_meme
          </a>
        </div>
        <div style="text-align: center">全部Hii图链接</div>
        <div style="text-align: center">
          <a href="https://hii.hiiro.club/api/v1/get_all_memes" target="_blank">
            https://hii.hiiro.club/api/v1/get_all_memes
          </a>
        </div>
      </Card>
      <Card v-if="RELATED.length > 0">
        <div class="content">
          <template v-for="item in RELATED" :key="item.name">
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
      <Card v-if="LINK.length > 0">
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
import memes from '@/../public/memes.json'

export interface FriendlyLink {
  name: string;
  url: string;
  background?: string;
  color?: string;
}

// 相关链接
const RELATED: FriendlyLink[] = Setting['related'] || []
// 友链列表
const LINK: FriendlyLink[] = Setting['link'] || []

const total = memes.length
</script>

<style lang="stylus" scoped>
a
  margin 0 5px

.index
  margin 0 auto
  width 100%

  .content
    display flex
    flex-wrap wrap

@media only screen and (max-width 600px)
  .index
    width 95%
</style>
