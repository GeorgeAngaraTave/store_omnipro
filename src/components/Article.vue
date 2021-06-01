<template>
  <section class="container-central">
    <div class="container-photo">
      <img src="../assets/images/headphone.jpg" alt="" />
      <div class="container-data">
        <h2 class="tittle-article">
          Audifonos Espectaculares "Los Mejor del Mercado"
        </h2>
        <div class="container-ranking">
          <Rating :value="4" :readonly="true" :stars="5" :cancel="false" />
          <span class="data-ranking">4 de 5</span>
        </div>
        <div class="container-price">
          $ 139.99
        </div>
      </div>
    </div>
    <hr class="divisor" />
    <div class="container-selection">
      <div class="container-size">
        <span class="title-selector">TAMAÑO</span>
        <div class="button-square button-selector-disabled">
          <span>S</span>
        </div>
        <div class="button-square button-selector-selectable">
          <span>M</span>
        </div>
        <div class="button-square button-selector-selected">
          <span>L</span>
        </div>
        <div class="button-square button-selector-disabled">
          <span>XL</span>
        </div>
        <div class="button-square button-selector-disabled">
          <span>XXL</span>
        </div>
      </div>
      <div class="container-kit">
        <span class="title-selector">KIT</span>
        <div class="button-rectangle button-selector-selected">
          <span>HOME</span>
        </div>
        <div class="button-rectangle button-selector-selectable">
          <span>AWAY</span>
        </div>
        <div class="button-rectangle button-selector-selectable">
          <span>TRIRD</span>
        </div>
      </div>
      <div class="container-cantidad">
        <span class="title-selector">CANTIDAD</span>
        <div class="container-controls">
          <div class="button-control counter" @click="contador--">
            <span>-</span>
          </div>
          <div class="button-control">
            <span>{{contador}}</span>
          </div>
          <div class="button-control counter" @click="contador++">
            <span>+</span>
          </div>
        </div>
      </div>
      <div class="container-add-button">
        <div class="button-add-in-car">
          AÑADIR AL CARRITO
        </div>
      </div>
    </div>
    <hr style="width:100%" />
    <div class="container-description">
      <h3 class="title-description">Descripción</h3>
      <p class="parrafo-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        eaque eveniet magni libero! Inventore velit sapiente, repellat hic at,
        fuga eveniet distinctio accusantium suscipit et est ex totam minima
        laborum.
      </p>
      <p class="show-more">
        LEER MAS
      </p>
    </div>
    <div class="container-offer">
      <h3 class="title-offer">TAMBIEN TE PODRIA GUSTAR</h3>
      <Carousel
        :value="images"
        :numVisible="3"
        :numScroll="1"
        class="p-mt-5 carrousel"
        :responsiveOptions="responsiveOptions"
        :circular="true"
      >
        <template #item="slotProps">
          <div class="product-item">
            <div class="product-item-content">
              <div class="p-mb-1">
                <img
                  :src="slotProps.data.itemImageSrc"
                  :alt="slotProps.data.title"
                  class="product-image imagenSlider"
                />
              </div>
              <div>
                <h6 class="name-product">{{slotProps.data.title}}</h6>
                <p class="price-product">
                  ${{slotProps.data.price}}
                </p>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
export default {
  name: "Articulo",
  data() {
    return {
    contador:0,
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "600px",
          numVisible: 1,
          numScroll: 1,
        },
        {
          breakpoint: "480px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
      images: [
        {
          itemImageSrc: "./assets/layout/images_prueba/headphones_1.jpg",
          alt: "",
          title: "Producto 1",
          price:130
        },
        {
          itemImageSrc: "./assets/layout/images_prueba/headphones_2.jpg",
          alt: "",
          title: "Producto 2",
          price:125
        },
        {
          itemImageSrc: "./assets/layout/images_prueba/headphones_3.jpg",
          alt: "",
          title: "Producto 3",
          price:132
        },
        {
          itemImageSrc: "./assets/layout/images_prueba/headphones_4.jpg",
          alt: "",
          title: "Producto 4",
          price:140
        },
        {
          itemImageSrc: "./assets/layout/images_prueba/headphones_5.jpg",
          alt: "",
          title: "Producto 5",
          price:95
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container-central{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.container-photo {
  width: 100%;
}
.container-photo img{
  width: 100%;
}
.container-data {
  padding-top: 30px;
  width: 100%;
}

/* titulo del articulo */
.tittle-article {
  font-size: 1.8rem;
  margin-bottom: 10px;
}

/* ranking */
.container-ranking {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
}
.data-ranking {
  font-size: 1.4rem;
  margin-left: 22px;
}

/* precio */
.container-price {
  font-size: 2.3rem;
  font-weight: bolder;
  margin-bottom: 30px;
}

/* contenedores de seleccion */
.container-selection{
  width: 100%;
}

.container-size,
.container-kit,
.container-cantidad,
.container-add-button {
  padding: 15px 20px 15px 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.title-selector {
  font-size: 20px;
  margin-right: 10px;
}

/* botones de seleccion */
.button-square {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  font-size: 15px;
  margin-right: 10px;
}
.button-rectangle {
  width: 70px;
  height: 35px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  margin-right: 10px;
}
.button-selector-selected {
  color: white;
  background-color: #33333a;
  border: 2px solid #33333a;
}
.button-selector-selectable {
  color: #33333a;
  background-color: white;
  border: 2px solid #c2c2ce;
}
.button-selector-disabled {
  color: #c2c2ce;
  background-color: white;
  border: 2px solid white;
}

/* contorl sumar o restar cantidad */
.container-controls {
  display: flex;
  border: 2px solid #c2c2ce;
}
.button-control {
  width: 35px;
  height: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

/* boton agregar al carrito */
.container-add-button {
  align-items: center;
  justify-content: center;
}
.button-add-in-car {
  width: 90%;
  color: white;
  letter-spacing: 4px;
  font-size: 15px;
  font-weight: bolder;
  background-color: #33333a;
  padding: 10px 0px 10px 0px;
}

/* descripcion */
.container-description {
  padding: 20px;
}
.title-description {
  font-size: 1.6rem;
  margin-bottom: 15px;
}
.parrafo-description {
  font-size: 1.2rem;
  margin-bottom: 15px;
}
.show-more {
  font-size: 1.2rem;
}

/* seccion de ofrecer mas productos */
.container-offer {
  padding: 30px;
  width: 100%;
}
.carrousel{
    width: 100% !important;
}
.title-offer {
  font-size: 1.1rem;
  font-weight: bolder;
}
.name-product{
  padding: 0px;
  margin: 0px;
  font-size: 13px;
  font-weight: bolder;
}
.price-product{
  padding: 0px;
  margin: 0px;
  font-size: 13px;
  font-weight: bolder;
  color: gray;
}
.product-item {
  .product-item-content {
    border-radius: 3px;
    margin-top: 0px;
    text-align: center;
    padding: 2rem 0;
    padding-top: 0px;
  }
  .product-image {
    width: 100%;    
  }
}
.divisor{
  width: 100%;
}
.counter{
  cursor: pointer;
}
.counter:hover{
  font-weight: bolder;
}
@media (min-width: 900px) {  
  .container-photo{
    width: 50%;
  }
  .container-selection{
    width: 50%;
  }
  .divisor{
    display: none;
  }

}

@media (max-width: 1900px) {
  .product-item {
    .product-image {
      width: 60%;
    }
  }
}
@media (max-width: 766px) {
  #bannerNuevo {
    min-height: 320px;
  }
  .product-item {
    .product-item-content {
      border-radius: 3px;
      margin-top: 0px;
      text-align: center;
      padding: 2rem 0;
      padding-top: 0px;
    }
    .product-image {
      width: 100%;
    }
  }
}
</style>
