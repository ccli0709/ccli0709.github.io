<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
      <a class="navbar-brand" href="#">Vue(Browser Only)</a>
    </div>
    <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li><a href="../appa01/index.html">A01</a></li>
        <li><a href="../appa02/index.html">A02</a></li>
        <li><a href="../appa03/index.html">A03</a></li>


      </ul>
    </div>
    <!--/.nav-collapse -->
  </div>
  <!--/.container-fluid -->
</nav>

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
