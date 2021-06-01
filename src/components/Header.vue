<template>
  <header class="top-header">
    <div>
      <img
        alt="logo"
        src="../assets/images/logo.png"
        height="40"
        class="p-mr-2"        
      />               
    </div>
    <div class="container-menu">
      <MegaMenu :model="items" class="menu-desktop" />      
      <i class="pi pi-search icon-header"></i>      
      <i class="pi pi-heart icon-header"></i>      
      <i class="mdi mdi-shopping-outline icon-header" v-badgexx.danger="1"></i>
      <Button
          icon="pi pi-bars"
          class="p-button-rounded p-button-text menu-mobil"
          @click="toggle"         
      />    
      <Menu ref="menu" :model="items" :popup="true" />
    </div>
  </header>
</template>

<script>
export default {
  name: "banner-header",
  data() {
    return {
      items: [
        {
          label: "Inicio",
          icon: "pi pi-home",
          command:() => {this.$router.push({name:'Inicio'})}       
        },
        {
          label: "Servicios",
          icon: "mdi mdi-buffer ",
        },
        {
          label: "Nuestro Equipo",
          icon: "pi pi-slack",
        },
        {
          label: "Portafolio",
          icon: "mdi mdi-shopping-outline",
        },
        {
          label: "Contácto",
          icon: "mdi mdi-email-outline",
        },
        {
          label: "Terminos y condiciones",
          icon: "mdi mdi-format-list-bulleted",
        },
      ],
    };
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
  },
};
</script>

<style scoped>
.top-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;  
  justify-content: space-between;
  width: 100%;
  background-color: #F8F9FA;
  padding: 15px;
  border: 1px solid gray;
}
.p-menubar {
  justify-content: space-between;
}
.menu-desktop{
    display: none;
}
.menu-mobil{
    display: block;
}
.icon-mobil{
  font-size: 30px;
}
.icon-header{
  font-size: 1.5rem;
  margin-right: 10px;
  display: block;
}
.container-menu{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

@media (min-width: 1150px) {  
  .menu-mobil{
    display: none;
  }
  .menu-desktop{
    display: block;
  }
  .icon-header{
    display: none;
  }
}
</style>
