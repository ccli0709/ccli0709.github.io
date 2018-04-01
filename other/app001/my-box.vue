<script>
// Note how there's no template or styles in this component.

module.exports = {
  // Gets us the provider property from the parent <my-canvas> component.
  inject: ['provider'],

  props: {
    // Start coordinates (percentage of canvas dimensions).
    x1: {
      type: Number,
      default: 0
    },
    y1: {
      type: Number,
      default: 0
    },

    // End coordinates (percentage of canvas dimensions).
    x2: {
      type: Number,
      default: 0
    },
    y2: {
      type: Number,
      default: 0
    },

    // The value to display.
    value: {
      type: Number,
      defualt: 0
    },

    // The color of the box.
    color: {
      type: String,
      default: '#F00'
    }
  },

  data() {
    return {
      // We cache the dimensions of the previous
      // render so that we can clear the area later.
      oldBox: {
        x: null,
        y: null,
        w: null,
        h: null
      },
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
      }]
    }
  },

  computed: {

  },

  render() {
    // Since the parent canvas has to mount first, it's *possible* that the context may not be
    // injected by the time this render function runs the first time.
    if (!this.provider.context) return;
    const ctx = this.provider.context;

    var img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);

      // 繪製點點
      this.pois.forEach((poi, key) => {
        console.log(key + ": " + poi);
        //ctx.beginPath();
        //ctx.arc(poi.x, poi.y, 10, 0, 2 * Math.PI, false);
        //ctx.fillStyle = poi.status == 'Y' ? 'green' : 'red';
        //ctx.fill();
        //ctx.lineWidth = 1;
        //ctx.strokeStyle = '#003300';
        //ctx.stroke();

        var w = 25;
        var h = 65;
        ctx.globalAlpha = 0.2;
        ctx.fillStyle="#FF0000";
        ctx.fillRect(poi.x, poi.y, w, h);
        ctx.globalAlpha = 1.0;

      });

    };
    img.src = 'images/002.png';


  }

}
</script>
