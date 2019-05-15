<template>
  <div class="test">
    <div>
      平均值: {{average}}
    </div>
    <button @click="update" :class="{disabled: disabled}">加载更多</button>
    <div class="list" v-for="item in dataList" :key="item.id">
      <div class="list-row">id:{{item.id}},data:{{item.data}}</div>
      <div class="list-row">{{item.time}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      disabled: false
    }
  },
  computed: {
    dataList () {
      return this.$store.getters.getData
    },
    average () {
      return this.$store.getters.getAverage
    }
  },
  methods: {
    async update () {
      if (this.disabled) return
      this.disabled = true
      await this.$store.dispatch('getDataCall')
      this.disabled = false
    }
  }
}
</script>

<style scoped lang="less">
@bgco: gray;
@fontColor: #333;
.test {
  .list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    .list-row:first-of-type {
      margin-right: 20px;
    }
  }
  button {
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: blue;
    padding: 10px;
    font-size: 15px;
    color: white;
    width: 100%;
  }
  button.disabled {
    background-color: @bgco;
    color: @fontColor;
  }
}
</style>
