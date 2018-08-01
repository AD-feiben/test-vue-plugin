<template lang="html">
  <transition name="fade">
    <div class="vue-toast-wrap">
      <div ref="toast" class="vue-toast" :class="`toast-${position}`" :style="{marginLeft: -ml+'px'}">
        {{tip}}
      </div>
    </div>
</transition>
</template>

<script>
export default {
  data () {
    return {
      position: 'middle',
      duration: 2500,
      tip: '',
      ml: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.ml = this.$refs.toast.offsetWidth / 2
    })
  }
}
</script>

<style>
.vue-toast-wrap{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.vue-toast{
  position: absolute;
  top: 45%;
  left: 50%;
  max-width: 200px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  background-color: rgba(0, 0, 0, .5);
  box-sizing: border-box;
}
.toast-top{
  top: 20%;
}
.toast-bottom{
  top: 80%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
