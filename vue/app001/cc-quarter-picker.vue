<template>
<div class='main' @click="onPickerClick">

  <table class='table table-bordered'>
    <tr>
      <td class='form-inline'>
        <btn size="sm" v-on:click="goPrevYear">
          << </btn>
            <btn data-action="select">
              {{ year }}
            </btn>
            <btn size="sm" v-on:click="goNextYear">
              >>
            </btn>
      </td>
      <td>
        <select class='form-control' v-model='quarter'>
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
  props: ['yearQuarter'],
  data: function() {
    return {
      year: 2018,
      quarter: 'Q1'
    }
  },
  methods: {
    goPrevYear: function() {
      this.year = this.year - 1;
    },
    goNextYear: function() {
      this.year = this.year + 1;
    },
    onPickerClick: function(event) {
      console.log(event);
      console.log(event.target.getAttribute('data-action'));
      if (event.target.getAttribute('data-action') !== 'select') {
        event.stopPropagation()
      }
    }
  },
  watch: {
    year: function(val, oldVal) {
      this.$emit('input', '' + this.year + this.quarter);
    },
    quarter: function(val, oldVal) {
      this.$emit('input', '' + this.year + this.quarter);
    }
  },
  mounted: function() {

  }
}
</script>
<style>
.main {
  padding: 1rem;
}
</style>
