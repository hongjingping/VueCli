<template>
  <div>
    {{ msg }}-{{ $route.params.username }}-{{ $route.params.id }}
  </div>

</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'hi，i am hi1Page'
    }
  }
}
</script>

<style scoped>

</style>


