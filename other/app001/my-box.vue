<script>
// Note how there's no template or styles in this component.

module.exports = {
  // Gets us the provider property from the parent <my-canvas> component.
  inject: ['provider'],
  props: {},
  data() {
    return {
      img: new Image(),
      pois: [{
        name: 'A01',
        status: 'Y',
        selected: false,
        type: '1P',
        x: 242,
        y: 196
      }, {
        name: 'A02',
        status: 'Y',
        selected: false,
        type: '1P',
        x: 270,
        y: 196
      }, {
        name: 'A03',
        status: 'N',
        selected: false,
        type: '1P',
        x: 303,
        y: 196
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

  },
  methods: {

    paint() {
      if (!this.provider.context) return;
      const ctx = this.provider.context;
      ctx.drawImage(this.img, 0, 0);

      // 繪製點點
      this.pois.forEach((poi, key) => {
        var w = 25;
        var h = 65;
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
        ctx.fillRect(poi.x, poi.y, w, h);
        ctx.globalAlpha = 1.0;

        if (poi.selected) {
          ctx.beginPath();
          ctx.lineWidth = "4";
          ctx.strokeStyle = "#F0AD4E";
          ctx.rect(poi.x, poi.y, w, h);
          ctx.stroke();
        }
      });
    }
  },
  render() {
    // Since the parent canvas has to mount first, it's *possible* that the context may not be
    // injected by the time this render function runs the first time.

    // 加入滑鼠事件
    if (!this.provider.context) return;
    const ctx = this.provider.context;
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
        var w = 25;
        var h = 65;
        if (poi.type === '1L') {
          w = 65;
          h = 25;
        }
        if ((poi.x <= mouse.x && mouse.x <= poi.x + w) &&
          (poi.y <= mouse.y && mouse.y <= poi.y + h)) {
          console.log(poi.name);
          poi.selected = true;
        }
      });

      this.paint();

    }, false);

    this.img.onload = () => {
      this.paint();
    };
    this.img.src = 'images/002.png';
  }
}
</script>
