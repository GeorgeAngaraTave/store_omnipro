<template>
  <div id="app">
     <router-view></router-view>     
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),  
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

*{
  padding:0px;
  margin: 0px;
  font-family: 'Inter', sans-serif;
}

body{
  display: flex;
  flex-wrap: wrap;
}

#app {  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
::-webkit-scrollbar {
  width: 4px !important;
}
::-webkit-scrollbar-track {
  border-radius: 6px !important;
}
::-webkit-scrollbar-thumb {
  background: blue !important;
}
::-webkit-scrollbar-thumb:hover {
  background: #2b9cd5 !important;
}
.p-rating .p-rating-icon.pi-star {
  color: #d61043 !important;
  font-size: 30px;
}
.pi-star-o:before{
  color: #d61043 !important;
  font-size: 30px;
}
.p-carousel-indicator{
  display: none !important;
}
.p-megamenu{
  border: none !important;
}
.p-menu{
  width: 250px !important;
}
</style>
