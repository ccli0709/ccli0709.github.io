<template>
<div class="my-canvas-wrapper">
  <canvas ref="my-canvas"></canvas>
</div>
</template>

<script>
module.exports = {
  props: ['canvas_width', 'canvas_floor'],
  data() {
    return {
      // By creating the provider in the data property, it becomes reactive,
      // so child components will update when `context` changes.
      provider: {
        // This is the CanvasRenderingContext that children will draw to.
        context: null
      },
      settings: {
        currentFloor: 'B2F',
        ratio: 0.5,
        floors: [{
          id: 'B2F',
          width: 3508,
          height: 4963,
        }]
      },
      img: new Image(),
      pois: [{
        name: 'A01',
        status: 'Y',
        selected: false,
        type: '1P',
        x: 808,
        y: 653
      }, {
        name: 'A02',
        status: 'Y',
        selected: false,
        type: '1P',
        x: 897,
        y: 653
      }, {
        name: 'A03',
        status: 'N',
        selected: false,
        type: '1P',
        x: 1020,
        y: 653
      }, {
        name: 'A03',
        status: 'N',
        selected: false,
        type: '1P',
        x: 330,
        y: 196
      }, {
        name: 'A03',
        status: 'N',
        selected: false,
        type: '1P',
        x: 355,
        y: 196
      }, {
        name: 'A03',
        status: 'N',
        selected: false,
        type: '1P',
        x: 393,
        y: 196
      }, {
        name: 'A03',
        status: 'N',
        selected: false,
        type: '1P',
        x: 423,
        y: 196
      }, {
        name: 'A03',
        status: 'N',
        selected: true,
        type: '1P',
        x: 450,
        y: 196
      }, {
        name: 'A03',
        status: 'N',
        selected: false,
        type: '1L',
        x: 136,
        y: 316
      }, {
        name: 'A03',
        status: 'N',
        selected: false,
        type: '1L',
        x: 136,
        y: 450
      }]
    }
  },
  computed: {
    current_floor: function() {
      var vm = this;
      var selectedFloor;
      vm.settings.floors.forEach(function(floor) {
        if (floor.id === vm.canvas_floor) {
          console.log('ccc');
          selectedFloor = floor;
        }
      })
      return selectedFloor;
    },
    draw_width: function(floor) {
      return this.canvas_width;
    },
    draw_height: function() {
      return this.canvas_width * (this.current_floor.height / this.current_floor.width);
    },
    draw_ratio: function() {
      console.log('this.draw_width:' + this.draw_width);
      console.log('this.current_floor.width:' + this.current_floor.width);
      return this.draw_width / this.current_floor.width;
    }
  },
  methods: {

    paint() {

      console.log('draw_width:' + this.draw_width);
      console.log('draw_height:' + this.draw_height);
      console.log('draw_ratio:' + this.draw_ratio);

      if (!this.provider.context) return;
      const ctx = this.provider.context;
      ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.draw_width , this.draw_height );

      // 繪製點點
      this.pois.forEach((poi, key) => {
        var w = 82;
        var h = 209;
        if (poi.type === '1L') {
          w = 65;
          h = 25;
        }

        if (poi.status === 'Y') {
          ctx.fillStyle = "#000000";
        } else {
          ctx.fillStyle = "#00FF00";
        }
        ctx.globalAlpha = 0.2;
        ctx.fillRect(poi.x * this.draw_ratio, poi.y * this.draw_ratio, w * this.draw_ratio, h * this.draw_ratio);
        ctx.globalAlpha = 1.0;

        if (poi.selected) {
          ctx.beginPath();
          ctx.lineWidth = "4";
          ctx.strokeStyle = "#F0AD4E";
          ctx.rect(poi.x * this.draw_ratio, poi.y * this.draw_ratio, w * this.draw_ratio, h * this.draw_ratio);
          ctx.stroke();
        }
      });
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
    this.provider.canvas = this.$refs['my-canvas']
    this.provider.context = this.$refs['my-canvas'].getContext('2d')

    // Resize the canvas to fit its parent's width.
    // Normally you'd use a more flexible resize system.
    //this.$refs['my-canvas'].width = this.$refs['my-canvas'].parentElement.clientWidth
    //this.$refs['my-canvas'].height = this.$refs['my-canvas'].parentElement.clientHeight

    //this.$refs['my-canvas'].width = 1052
    //this.$refs['my-canvas'].height = 1489
    console.log('this.draw_width', this.draw_width);
    console.log('this.draw_height', this.draw_height);
    console.log('this.current_floor.width', this.current_floor.width);
    console.log('this.current_floor.height', this.current_floor.height);

    this.$refs['my-canvas'].width = this.current_floor.width * this.draw_ratio;
    this.$refs['my-canvas'].height = this.current_floor.height * this.draw_ratio;



    // 加入滑鼠事件
    if (!this.provider.context) return;
    const ctx = this.provider.context;
    console.log('222');
    this.img.onload = () => {
      console.log('333');
      this.paint();
    };
    this.img.src = 'images/002.png';


    this.provider.canvas.addEventListener('click', (evt) => {
      var rect = this.provider.canvas.getBoundingClientRect();
      console.log('Mouse position: ' + (evt.clientX - rect.left) + ',' + (evt.clientY - rect.top));

      var mouse = {
        x: (evt.clientX - rect.left),
        y: (evt.clientY - rect.top),
      }

      this.pois.forEach((poi, key) => {
        poi.selected = false;
      });

      this.pois.forEach((poi, key) => {
        var w = 82;
        var h = 209;
        if (poi.type === '1L') {
          w = 65;
          h = 25;
        }
        if ((poi.x * this.draw_ratio <= mouse.x && mouse.x <= (poi.x + w) * this.draw_ratio) &&
          (poi.y * this.draw_ratio <= mouse.y && mouse.y <= (poi.y + h) * this.draw_ratio)) {
          console.log(poi.name);
          poi.selected = true;
        }
      });

      this.paint();

    }, false);


  }
}
</script>
