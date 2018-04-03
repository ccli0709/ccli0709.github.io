<template>
<div>
  <canvas ref="my-canvas"></canvas>
</div>
</template>

<script>
module.exports = {
  props: ['canvas_width', 'canvas_floor', 'bus'],
  data: function() {
    return {
      provider: {
        context: null
      },
      settings: {
        floors: [{
          id: 'B1F',
          width: 3508,
          height: 4963,
          img_src: 'parking_garage/B1F.png'
        }, {
          id: 'B2F',
          width: 3508,
          height: 4963,
          img_src: 'parking_garage/B2F.png'
        }, {
          id: 'B3F',
          width: 3508,
          height: 4963,
          img_src: 'parking_garage/B3F.png'
        }, {
          id: 'B4F',
          width: 3508,
          height: 4963,
          img_src: 'parking_garage/B4F.png'
        }],
        blocks: [{
          id: '1P',
          width: 80,
          height: 210,
          desc: '汽車直式'
        }, {
          id: '1L',
          width: 210,
          height: 80,
          desc: '汽車橫式'
        }, {
          id: '2P',
          width: 25,
          height: 75,
          desc: '汽車直式'
        }, {
          id: '2L',
          width: 75,
          height: 25,
          desc: '汽車橫式'
        }]
      },
      img: new Image(),
      pois: []
    }
  },
  watch: {
    canvas_floor: function(val) {
      this.floor();
    }
  },
  computed: {
    current_floor: function() {
      var vm = this;
      var selectedFloor;
      vm.settings.floors.forEach(function(floor) {
        if (floor.id === vm.canvas_floor) {
          selectedFloor = floor;
        }
      })
      return selectedFloor;
    },
    draw_width: function() {
      return this.canvas_width;
    },
    draw_height: function() {
      return this.canvas_width * (this.current_floor.height / this.current_floor.width);
    },
    draw_ratio: function() {
      return this.draw_width / this.current_floor.width;
    }
  },
  methods: {
    floor: function() {
      var vm = this;
      vm.img = new Image();
      vm.img.onload = function() {
        vm.paint();
      };
      vm.img.src = vm.current_floor.img_src;

      parking_garage_pois.forEach(function(data, key) {
        if (data.floor === vm.current_floor.id) {
          vm.pois = data.pois;
        }
      });
    },
    set: function(data) {
      var vm = this;
      vm.pois.forEach((poi, key) => {
        poi.status = 'X';
      });

      vm.pois.forEach((poi, key) => {
        data.forEach((item, key) => {
          if (poi.name === item.name) {
            poi.status = item.status;
          }
        });
      });
      this.paint();
    },
    query: function(data) {
      var vm = this;
      vm.pois.forEach((poi, key) => {
        if (poi.name === data.name) {
          poi.selected = true;
        } else {
          poi.selected = false;
        }
      });
      this.paint();
    },
    getBlock: function(type) {
      var vm = this;
      var result = {
        width: 0,
        height: 0
      };
      vm.settings.blocks.forEach((block, key) => {
        if (block.id === type) {
          result.width = block.width;
          result.height = block.height;
        }
      });
      return result;
    },
    paint() {
      if (!this.provider.context) return;
      const ctx = this.provider.context;
      ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height, 0, 0, this.draw_width, this.draw_height);

      // 繪製點點
      var vm = this;
      vm.pois.forEach((poi, key) => {
        if (poi.status === 'Y') {
          ctx.fillStyle = "#FFFF00";
        } else if (poi.status === 'O') {
          ctx.fillStyle = "#00FF00";
        } else if (poi.status === 'B') {
          ctx.fillStyle = "#ED7D31";
        } else {
          ctx.fillStyle = "#666666";
        }

        var block = vm.getBlock(poi.type);

        ctx.globalAlpha = 0.2;
        ctx.fillRect(poi.x * this.draw_ratio, poi.y * this.draw_ratio, block.width * this.draw_ratio, block.height * this.draw_ratio);
        ctx.globalAlpha = 1.0;

        if (poi.selected) {
          ctx.beginPath();
          ctx.lineWidth = "3";
          ctx.strokeStyle = "#F0AD4E";
          ctx.rect(poi.x * this.draw_ratio, poi.y * this.draw_ratio, block.width * this.draw_ratio, block.height * this.draw_ratio);
          ctx.stroke();
        }
      });
    }
  },
  mounted: function() {
    this.bus.$on('set', this.set);
    this.bus.$on('query', this.query);

    this.provider.canvas = this.$refs['my-canvas']
    this.provider.context = this.$refs['my-canvas'].getContext('2d')
    this.$refs['my-canvas'].width = this.current_floor.width * this.draw_ratio;
    this.$refs['my-canvas'].height = this.current_floor.height * this.draw_ratio;

    if (!this.provider.context) return;
    const ctx = this.provider.context;

    var vm = this;
    vm.floor();

    vm.provider.canvas.addEventListener('click', (evt) => {
      var rect = this.provider.canvas.getBoundingClientRect();
      var mouse = {
        x: (evt.clientX - rect.left),
        y: (evt.clientY - rect.top),
      }

      this.pois.forEach((poi, key) => {
        poi.selected = false;
      });

      this.pois.forEach((poi, key) => {
        var block = vm.getBlock(poi.type);
        if ((poi.x * this.draw_ratio <= mouse.x && mouse.x <= (poi.x + block.width) * this.draw_ratio) &&
          (poi.y * this.draw_ratio <= mouse.y && mouse.y <= (poi.y + block.height) * this.draw_ratio)) {
          poi.selected = true;;
          this.$emit('poi_selected', {
            'name': poi.name
          });
        }
      });
      this.paint();

    }, false);


  }
}
</script>
