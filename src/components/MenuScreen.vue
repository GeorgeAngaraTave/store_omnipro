<template>
  <section class="container-main">
    <div class="container-header">
      <Button
        icon="pi pi-arrow-left"
        class="p-button-rounded p-button-text menu-mobil"
        @click="$router.push({name:'Inicio'}).catch(()=>{})"
      />
    </div>
    <div class="container-mega-logo">
      <span>R</span>
    </div>
    <div class="container-menu">
      <ul>
        <li @click="selected = 'inicio'">
          <div class="selected">
            <hr :class="{ 'linea':true,'show': selected == 'inicio' }" />
          </div>
          <span
            :class="{ 'item-menu': true, 'seleccionado': selected == 'inicio' }"            
            >INICIO</span
          >
        </li>
        <li @click="selected = 'servicios'">
          <div class="selected">
            <hr :class="{ 'linea':true,'show': selected == 'servicios' }" />
          </div>
          <span
            :class="{ 'item-menu': true, 'seleccionado': selected == 'servicios' }"
            >SERVICIOS</span
          >
        </li>
        <li @click="selected = 'equipo'">
          <div class="selected">
            <hr :class="{ 'linea':true,'show': selected == 'equipo' }" />
          </div>
          <span
            :class="{ 'item-menu': true, 'seleccionado': selected == 'equipo' }"
            >NUESTRO EQUIPO</span
          >
        </li>
        <li @click="selected = 'portafolio'">
          <div class="selected">
            <hr :class="{ 'linea':true,'show': selected == 'portafolio' }" />
          </div>
          <span
            :class="{ 'item-menu': true, 'seleccionado': selected == 'portafolio' }"
            >PORTAFOLIO</span
          >
        </li>
        <li @click="selected = 'contacto'">
          <div class="selected">
            <hr :class="{ 'linea':true,'show': selected == 'contacto' }" />
          </div>
          <span
            :class="{ 'item-menu': true, 'seleccionado': selected == 'contacto' }"
            >CONTÁCTO</span
          >
        </li>
        <li @click="selected = 'terminos'">
          <div class="selected">
            <hr :class="{ 'linea':true,'show': selected == 'terminos' }" />
          </div>
          <span
            :class="{ 'item-menu': true, 'seleccionado': selected == 'terminos' }"
            >TÉRMINOS Y CONDICIONES</span
          >
        </li>
        <li @click="$router.push({name:'Article'}).catch(()=>{})">
          <div class="selected">
            <hr :class="{ 'linea':true,'show': selected == 'productos' }" />
          </div>
          <span
            :class="{ 'item-menu': true, 'seleccionado': selected == 'productos' }"
            >VER PRODUCTOS</span
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      register: true,
      success: false,
      selected:'inicio'
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container-main {
  width: 100%;
  min-height: 900px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: #363cc5;
  color: white;
  align-items: flex-start;
}
.container-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
  height: 30px;
}
.menu-mobil {
  color: white;
}
.container-mega-logo {
  width: 100%;
  font-size: 10rem;
}
.container-menu {
  width: 100%;
}
.container-menu ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 30px;
}
.container-menu ul li {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: gray;
  margin-bottom: 25px;
}
.selected {
  width: 30px;
  display: flex;
  align-items: center;
}
.linea {
  width: 100%;
  border-color: yellow;
  display: none;
  transition: 2s all;
}
.seleccionado {
  color: white;
}
.show {
  display: block;
  width: 100%;
}
.item-menu {
  cursor: pointer;
  transition: 0.5s all;
  padding-left: 10px;
  font-size: 20px;
}
.item-menu:hover {
  color: rgb(177, 176, 176);
  cursor: pointer;
}

@media (min-width: 550px) {
  .container-menu{
      width: 550px;
      margin:0px auto
  }
}
</style>
