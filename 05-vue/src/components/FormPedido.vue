<template>
  <form>
      <h4 class="form">Personaliza tu Pastel</h4>
      <hr>
      <label> Elige tu tipo de Bizcocho</label>
      <select v-model="pan">
          <option value="Chocolate">Bizcocho de  Chocolate</option>
          <option value="Vainilla"> Bizcocho de Vainilla</option>
          <option value="Naranja"> Bizcocho de Naranja</option>
          <option value="Marmoleado"> Bizcocho de Marmoleado</option>
      </select>

      <select v-model="relleno">
          <option value="Trufa">Relleno de Trufa</option>
          <option value="Chocolate">Relleno de Chocolate</option>
      </select>

      <select v-model="cubierta">
          <option value="Glaseado">Cubierta de Glaseado</option>
          <option value="Chantilly">Cubierta de Chantilly</option>
          <option value="Fondant">Cubierta de Fondant</option>
      </select>

      <h4 class="form" style="margin: 25px 0 0 0">Tus Datos</h4>
      <hr>

      <label>Nombre</label>
      <input type="text"  placeholder="Nombre" required v-model="name">

      <label>Número de teléfono</label>
      <input type="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="5512345678" required v-model="phoneNumber">

      <label>Email</label>
      <input type="email" placeholder="email@mail.com" required v-model="email">
      
      <label>Describenos tu pastel</label>
      <br>
      <textarea rows="4" v-model="desc"></textarea>

      <div class="submit">
        <button>Siguiente</button>
    </div>
  </form>

  

  <!-- <p>{{name}}</p>
  <p>{{phoneNumber}}</p>
  <p>{{email}}</p>
  <p>{{desc}}</p>
  <p>{{pan}}</p>
  <p>{{relleno}}</p>
  <p>{{cubierta}}</p> -->
</template>

<script>
    export default {
        data(){
            return {
                name: '',
                phoneNumber: '',
                email: '',
                desc: '',
                pan: 'Chocolate',
                relleno: 'Trufa',
                cubierta: 'Glaseado'
            }
        }
    }
</script>

<style>
    form{
        max-width: 420px;
        margin: auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    h4.form{
        margin: 0;
    }
    textarea{
        display: inline-block;
        width: 100%;
        padding: 10px 6px;;
        background: white;
        text-align: left;
        border-radius: 10px;
    }
    label{
        color: #aaa;
        display: inline-block;
        margin:  25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select{
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
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
</style>