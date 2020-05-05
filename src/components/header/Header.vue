<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
       <span class="iconfont">&#xe632;</span>
       输入城市/景点/游玩主题
    </div>
    <div class="header-right">
     城市
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/varibles.scss';

.header {
  display: flex;
  line-height: 0.86rem;
  background-color: $bgcolor;
  color: white;
  
  .header-left {
    width: 1.24rem;
    float: left;
  }
  .header-input {
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-top: 0.12rem;
    background-color: white;
    border-radius: 5px;
  }
  .header-right{
    width: 1.24rem;
    float: right;
    text-align: center;
  }
}
</style>