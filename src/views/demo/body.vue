<template>
  <div>aaaa</div>
</template>
<script>
  export default {
    data: function () {
      return {
        src: '/inspection/index.html'
      }
    },
    mounted () {
      const param = this.getParams()
      if (param['orgId']) {
        this.src = `${this.src}?orgId=${param['orgId']}`
      }
    },
    methods: {
      getParams () {
        const s = window.location.search.substr(1)
        const arr = s.split('&')
        const querys = {}
        for (let i = 0; i < arr.length; i++) {
          const query = arr[i].split('=')
          querys[query[0]] = decodeURI(query[1])
        }
        return querys
      }
    }
  }
</script>
<style scoped>
</style>
