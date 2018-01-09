<template>
  <div>
    {{ msg }}
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'hi，i am hiPage'
    }
  }
}
</script>

<style scoped>

</style>


