<template>
  <section class="container-main">
    <div class="container-header">
        <Button
          icon="pi pi-bars"
          class="p-button-rounded p-button-text menu-mobil"
          @click="$router.push({name:'Menu-screen'}).catch(()=>{})"
        />    
    </div>
    <div class="container-mega-logo">
        <span>R</span>
    </div>
    <div class="container-success" v-if="success">
        <span>
            SUCCESS
        </span>    
        <div class="circle-purple">
            <i class="pi pi-check icon-ok"></i>
        </div>        
    </div>
    <div class="container-form" v-if="!success">
      <div class="container-tabs">
        <div :class="{'tab-left':true,'transparente':register}" @click="register=false">
          <span>
            INGRESO
          </span>
        </div>
        <div :class="{'tab-right':true,'transparente':!register}" @click="register=true">
          <span>
            REGISTRO
          </span>
        </div>
      </div>
      <div class="p-fluid formulario" v-if="register">          
        <div class="p-field">
          <label for="username">Nombre</label>
          <InputText id="username" type="text" />
        </div>
        <div class="p-field">
          <label for="lastname">Apellido</label>
          <InputText id="lastname" type="text" />
        </div>
        <div class="p-field">
          <label for="email">Email</label>
          <InputText id="email" type="email" />
        </div>
        <div class="p-field">
          <label for="password">Contraseña</label>
          <InputText id="password" type="password" />
        </div>
        <div class="text-info v-switch ">
          <InputSwitch  v-model="checked" class="v-ss"/><span>Suscribirse al Newsletter</span>
        </div>
        <div class="button-register" @click="register_action">
            <span>Registro</span>
        </div>
        <div class="text-info" @click="register_action">
            <span>Olvide Contraseña</span>
        </div>
      </div>
      <div class="p-fluid formulario" v-else>          
        <div class="p-field">
          <label for="email">Email</label>
          <InputText id="email" type="email" />
        </div>
        <div class="p-field">
          <label for="password">Contraseña</label>
          <InputText id="password" type="password" />
        </div>
        <div class="button-register" @click="login_action">
            <span>Ingresar</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      register: true,
      success:false,
      checked: false,
    };
  },
  methods: {
      register_action(){
          this.success=true
          setTimeout(() => {
              this.success=false
          }, 3000);
      },
      login_action(){
          this.success=true
          setTimeout(() => {
              this.success=false
          }, 3000);
      },
  },
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
.container-header{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    width: 100%;
    height: 30px;
}
.container-mega-logo{    
    width: 100%;
    font-size: 10rem;
}
.container-form {    
  width: 90%;
  margin: 0px auto;
}
.container-tabs {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.tab-left,
.tab-right {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 45%;
  background-color: #392f63;
}
.transparente {
  opacity: 0.5;
}
.formulario {
  background-color: #392f63;
  padding: 30px;  
}
.menu-mobil{
    color: white;
}
.button-register{
    height: 50px;
    border-radius: 50px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #36C0C4;   
    margin-top: 50px; 
    cursor: pointer;
    transition: 0.5s all;
}
.button-register:hover{
    background-color: #31a6aa;   
}
.container-success{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin:0px auto;
    background-color: #36C0C4;
    height: 400px;
    color:#383067;
    font-weight: bold;    
    font-size: 25px;
    border-radius: 0px 0px 10px 10px;
    margin-top: 60px;
}
.circle-purple{
    width: 120px;
    height: 120px;
    background-color: #383067;
    border-radius: 50%;
    margin-top: 20px;    
}
.icon-ok{
    color: white;
    font-size: 120px;
    position:relative;
    left: 20px;
    top: -10px;
}

.text-info{
  margin-top: 5%;
}

.v-switch{

  display: block;
  padding-left: 15px;
  text-indent: -15px;

}

.v-ss{
    height: 16px;
    padding: 0;
    margin:0px;
    margin-right: 15px;
    vertical-align: bottom;
    position: relative;
    top: -1px;
    *overflow: hidden;
}



@media (min-width: 550px) {
  .container-form{
      width: 550px;
  }
  .container-success{
    width: 550px;
  }
}

</style>

