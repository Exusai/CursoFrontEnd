<template>
  <!-- Carousel and title -->
  <div class="container-expand" style="background-color: rgba(0, 0, 0, 0.75);">
      <div class="row align-items-center mx-auto">
          <div class="col">
                <img src="@/assets/cake1.jpg" class="d-block w-100" alt="..." style="height: 100%; width: 100%;">
          </div>
  
          <div class="col">
              <div class="text-center" style="color: white;">
                  <h1>SpaceBake</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat maiores aspernatur enim culpa voluptatibus quisquam corrupti sit repudiandae, incidunt sed perspiciatis, tenetur nostrum aliquam fugit, voluptates minima libero nobis laboriosam!</p>
              </div>
          </div>
      </div>
  </div>
  
  <!-- menú -->
  <div class="container-expand">
    <div class="row mx-auto" style="background-color: rgba(0, 0, 0, .25);">
        <div class="text-center" style="color: black;">
            <br>
            <h2>Tu eliges como hacer tu pastel</h2>
        </div>
        
        <div class="col" style="color: black;">             
            <div class="text-center">
                <h3>Tipos de Bizcocho</h3>
                <br>
            </div>
            <div class="row align-items-center mx-auto">
                <div class="col">
                    <div class="text-center" style="color:black;">
                        <img src="@/assets/bc.jpg" alt="Chocolate" height="200" width="200">
                        <dt>Chocolate $75.00</dt>
                        <dd>Lorem ipsum dolor sit amet.</dd>  
                    </div>
                    
                </div>
                <div class="col">
                    <div class="text-center" style="color:black;">
                        <img src="@/assets/bv.jpg" alt="Vainilla" height="200" width="200">
                        <dt>Vainilla $65.00</dt>
                        <dd>Lorem ipsum dolor sit amet.</dd>
                    </div>
                    
                </div>
            </div>
            <div class="row align-items-center mx-auto">
                <div class="col">
                    <div class="text-center" style="color:black;">
                        <img src="@/assets/bn.jpg" alt="Naranja" height="200" width="200">
                        <dt>Naranja $50.00</dt>
                        <dd>Lorem ipsum dolor sit amet.</dd>
                    </div>                        
                </div>
                <div class="col">                        
                    <div class="text-center" style="color:black;">
                        <img src="@/assets/bm.jpg" alt="Marmoleado" height="200" width="200">
                        <dt>Marmoleado $70.00</dt>
                        <dd>Lorem ipsum dolor sit amet.</dd>
                    </div>
                    
                </div>
            </div>
        
        </div>
        <div class="col-5" style="color: black;">
            <h3>Tipos de Cubierta</h3>
            <dl>
                <div class="d-flex justify-content-between">
                    <dt>Glaseado</dt>
                    <dt>$20.00</dt> 
                </div>
                <dd>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum in corporis perspiciatis placeat laboriosam quasi.</dd>
                <div class="d-flex justify-content-between">
                    <dt>Chantilly</dt>
                    <dt>$15.00</dt> 
                </div>
                <dd>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum in corporis perspiciatis placeat laboriosam quasi.</dd>
                <div class="d-flex justify-content-between">
                    <dt>Fondant</dt>
                    <dt>$70.00</dt> 
                </div>
                <dd>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum in corporis perspiciatis placeat laboriosam quasi.</dd>
            </dl>
            <!-- <hr> -->
            <h3>Tipos de Relleno</h3>
            <dl>
                <div class="d-flex justify-content-between">
                    <dt>Trufa</dt>
                    <dt>$50.00</dt> 
                </div>
                <dd>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum in corporis perspiciatis placeat laboriosam quasi.</dd>
                <div class="d-flex justify-content-between">
                    <dt>Chocolate</dt>
                    <dt>$40.00</dt> 
                </div>
                <dd>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum in corporis perspiciatis placeat laboriosam quasi.</dd>
            </dl>
            
            <div class="submit">
                <!-- <a href="./pedido.html" class="btn btn-dark" role="button">Ordenar Ahora</a> -->
                <button>
                  <router-link :to="{ name: 'Pedido'}" style="text-decoration: none; color: white;">Pedido</router-link>
                </button>   
            </div>
            <br>
        </div>
    </div>
  </div>

  <!-- Footer y about -->
  <br>
  <div class="container">
      <div class="row">
          <div class="col" >
              <div class="text-center" style="color: black  ;">
                  <h2 class="text-center">Los mejores ingredientes</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus facere exercitationem rerum beatae vitae quae, vel laboriosam numquam officiis labore quos reiciendis, tempora, eveniet error dignissimos corporis libero atque omnis eius dolores! Distinctio dicta qui quidem, atque officia molestiae reprehenderit quasi rem fuga vel, reiciendis sint labore quod deleniti.</p>
              </div>
          </div>
          <div class="col" >
              <div class="text-center" style="color: black  ;">
                  <h2 class="text-center">Sobre nuestros Pasteles</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloribus facere exercitationem rerum beatae vitae quae, vel laboriosam numquam officiis labore quos reiciendis, tempora, eveniet error dignissimos corporis libero atque omnis eius dolores! Distinctio dicta qui quidem, atque officia molestiae reprehenderit quasi rem fuga vel, reiciendis sint labore quod deleniti.</p>
              </div>
          </div>
          </div>
          <div class="row-expand">
              <div class="col" >
                  <div class="text" style="color: black ;">
                      <h3 class="text-center">Horarios:</h3>
                      <p class="text-center">Lunes a viernes: 9:00am-9:00pm</p>
                      <p class="text-center">Sabado y Domingo: 10:00am-6:00pm</p>
                      <h3 class="text-center">Ubicación:</h3>
                      <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptas.</p>
                  </div>
              </div>
              <div class="col" >
                  <div class="text-center" style="color: black  ;">
                      <h2 class="text-center">Acerca de nosotros</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quasi nostrum eaque, exercitationem quia cupiditate, laboriosam animi quae fuga maxime vero veniam ipsum reiciendis deleniti! Nostrum numquam cumque atque eius.</p>
                      <p>Contacto: 5555555555</p>
                      <p>Correo: mail@mailto.com</p>
                  </div>
          </div>
      </div>
  </div>
  <br>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style>

button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}

p {
  margin: 0;
}

h2 {
  margin: 0;
}

</style>
