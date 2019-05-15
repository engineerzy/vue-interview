<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'toast',
  computed: {
    toastClasses () {
      return [`position-${this.position}`]
    }
  },
  mounted () {
    this.execAutoClose()
  },
  methods: {
    execAutoClose () {
      setTimeout(() => {
        this.close()
      }, 1.8 * 1000)
    },
    close () {
      this.$el.remove()
      this.$destroy()
    }
  }
}
</script>

<style lang="less" scoped>
@font-size: 14px;
@toast-min-height: 40px;
@toast-bg: rgba(0, 0, 0, 0.75);
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.wrapper {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%);
  @animation-duration: 300ms;
  .toast {
    animation: fade-in @animation-duration;
  }
}
.toast {
  display: flex;
  align-items: center;
  font-size: @font-size;
  min-height: @toast-min-height;
  line-height: 1.8;
  padding: 0 16px;
  color: white;
  background: @toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  .message {
    padding: 8px 0;
  }
}
</style>
