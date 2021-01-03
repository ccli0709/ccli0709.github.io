<template>
<h1 class='title'>{{ name }}</h1>
</template>

<script>
module.exports = {
  data: function() {
    return {
      id: '001'
    }
  },
  props: ['name'],
}
</script>

<style>
.title {
  background-color: #ffe;
}
</style>
