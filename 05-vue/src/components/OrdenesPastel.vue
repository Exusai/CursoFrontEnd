<template>
  <div class="container second">
    <div class="row">
        <div class="col">
            
            <ul>
              <h1 class="text-center">Ingredientes restantes</h1>
                <h4>Bizcocho</h4>
                <hr>
                <ul>
                    <div class="d-flex justify-content-between">
                        <li>Chocolate</li>
                        <dt>10 pasteles más</dt> 
                    </div>

                    <div class="d-flex justify-content-between">
                        <li>Vainilla </li>
                        <dt>20 pasteles más</dt> 
                    </div>
                        
                    <div class="d-flex justify-content-between">
                        <li>Naranja </li>
                        <dt>15 pasteles más</dt> 
                    </div> 

                    <div class="d-flex justify-content-between">
                        <li>Marmoleado </li>
                        <dt>5 pasteles más</dt> 
                    </div>
                        
                </ul>
                
                <h4>Relleno</h4>
                <hr>
                <ul>
                    <div class="d-flex justify-content-between">
                        <li>Trufa </li>
                        <dt>75 pasteles más</dt> 
                    </div> 

                    <div class="d-flex justify-content-between">
                        <li>Chocolate </li>
                        <dt>100 pasteles más</dt> 
                    </div>
                </ul>
                
                <h4>Cubierta</h4>
                <hr>
                <ul>
                    <div class="d-flex justify-content-between">
                        <li>Glaseado </li>
                        <dt>75 pasteles más</dt> 
                    </div> 

                    <div class="d-flex justify-content-between">
                        <li>Chantilly </li>
                        <dt>30 pasteles más</dt> 
                    </div>   

                    <div class="d-flex justify-content-between">
                        <li>Fondant </li>
                        <dt>50 pasteles más</dt> 
                    </div>  
                </ul>
            </ul>
        </div>
        <div class="col">
            <h1>Pedidos</h1>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Bizcocho</th>
                    <th scope="col">Relleno</th>
                    <th scope="col">Cubierta</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Lia</td>
                    <td>Chocolate</td>
                    <td>Trufa</td>
                    <td>Glaseado</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Charly</td>
                    <td>Marmoleado</td>
                    <td>Chocolate</td>
                    <td>Fondant</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Hugo</td>
                    <td>Vainilla</td>
                    <td>Fruta</td>
                    <td>Glaseado</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Maria</td>
                    <td>Vainilla</td>
                    <td>Chocolate</td>
                    <td>Glaseado</td>
                  </tr>
                </tbody>
              </table>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.container.second{
  background: white;
  border-radius: 10px;
}

.table {
  margin: auto;
}

h4 {
  margin-top: 10px;
  margin-bottom: 0px;
}

</style>