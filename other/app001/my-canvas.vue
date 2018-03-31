<template>
<div class="my-canvas-wrapper">
  <canvas ref="my-canvas"></canvas>
  <slot></slot>
</div>
</template>

<script>
module.exports = {
  data() {
    return {
      // By creating the provider in the data property, it becomes reactive,
      // so child components will update when `context` changes.
      provider: {
        // This is the CanvasRenderingContext that children will draw to.
        context: null
      }
    }
  },

  // Allows any child component to `inject: ['provider']` and have access to it.
  provide() {
    return {
      provider: this.provider
    }
  },

  mounted() {
    // We can't access the rendering context until the canvas is mounted to the DOM.
    // Once we have it, provide it to all child components.
    this.provider.context = this.$refs['my-canvas'].getContext('2d')

    var img = new Image();
    var ctx = this.provider.context;
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
    };
    img.src = 'images/002.png';
    // Resize the canvas to fit its parent's width.
    // Normally you'd use a more flexible resize system.
    //this.$refs['my-canvas'].width = this.$refs['my-canvas'].parentElement.clientWidth
    //this.$refs['my-canvas'].height = this.$refs['my-canvas'].parentElement.clientHeight

    this.$refs['my-canvas'].width = 1052
    this.$refs['my-canvas'].height = 1489
  }
}
</script>
