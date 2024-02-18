<template>
    <div>
      <h2>Formulario de Creación de Libro</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="nombre">Nombre del Libro:</label>
          <input type="text" id="nombre" v-model="nombre" required>
        </div>
        <div>
          <label for="titulo">Título del Libro:</label>
          <input type="text" id="titulo" v-model="titulo" required>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nombre: '',
        titulo: ''
      };
    },
    methods: {
      submitForm() {
        // Realizar la solicitud GraphQL usando Axios
        axios.post('http://localhost:8000/graphql/', {
          query: `
            mutation($nombre: String!, $titulo: String!) {
              createBook(nombre: $nombre, titulo: $titulo) {
                book {
                  id
                  nombre
                  titulo
                  fecha
                }
              }
            }
          `,
          variables: {
            nombre: this.nombre,
            titulo: this.titulo
          }
        }).then(response => {
          console.log(response.data); // Manejar la respuesta del servidor si es necesario
          // Restablecer los campos del formulario después de enviarlos
          this.nombre = '';
          this.titulo = '';
        }).catch(error => {
          console.error('Error al enviar la solicitud GraphQL:', error);
          // Manejar errores si es necesario
        });
      }
    }
  };
  </script>
  