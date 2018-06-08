<template>
<div class='main' v-on:click="onPickerClick">

  <table>
    <tr>
      <td class='form-inline'>
        <btn size="sm" v-on:click="onYearChange(-1)" style='border:none'>
          <i class="fa fa-chevron-left"></i> </btn>
        <btn data-action="select">
          {{ currentYear }}
        </btn>
        <btn size="sm" v-on:click="onYearChange(1)" style='border:none'>
          <i class="fa fa-chevron-right"></i>
        </btn>
      </td>
      <td>
        <select class='form-control' v-model='currentQuarter' v-on:change="onCurrentValChange">
          <option>Q1</option>
          <option>Q2</option>
          <option>Q3</option>
          <option>Q4</option>
        </select>
      </td>
    </tr>
  </table>
</div>
</template>

<script>
module.exports = {
  props: ['value'],
  data: function() {
    return {
      currentYear: 2018,
      currentQuarter: 'Q1'
    }
  },
  methods: {
    setYearAndQuarterByValue(val, oldVal) {
      console.log("setYearAndQuarterByValue");
      val = val.trim();
      if (val.length === 6) {
        this.currentYear = val.substr(0, 4);
        this.currentQuarter = val.substr(4, 2);

        console.log(this.currentYear);
        console.log(this.currentQuarter);
      } else {
        this.$emit('input', oldVal || '')
      }
    },
    onYearChange: function(variable) {

      var now = new Date();
      var year = now.getFullYear();
      if (!isNaN(this.currentYear)) {
        year = parseInt(this.currentYear);
      }
      year += variable;
      this.currentYear = year.toString();

      this.onCurrentValChange();
    },
    onCurrentValChange: function() {
      this.$emit('input', this.currentYear + this.currentQuarter);
    },
    onPickerClick: function(event) {
      if (event.target.getAttribute('data-action') !== 'select') {
        event.stopPropagation()
      }
    }
  },
  watch: {
    value(val, oldVal) {
      this.setYearAndQuarterByValue(val, oldVal)
    }
  },
  mounted: function() {

  }
}
</script>
<style>
div.main {
  padding: 3px;

}

div.main table {
  width: 100%;
}

div.main td {
  padding: 8px;
}
</style>
