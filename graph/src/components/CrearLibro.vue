<template>
 <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Título</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="libro in libros" :key="libro.id">
          <td>{{ libro.id }}</td>
          <td>{{ libro.nombre }}</td>
          <td>{{ libro.titulo }}</td>
          <td>{{ libro.fecha }}</td>
        </tr>
      </tbody>
      
    </table>
    
    <button @click="irAlComponente">Ir al Componente</button>
  </div>
   </template>
   

   <script>
   import axios from 'axios';
   
   export default {
     data() {
       return {
         libros: []
       };
     },
     mounted() {
       this.obtenerLibros();
     },
     methods: {
      
      irAlComponente() {
      // Lógica para navegar al componente deseado, por ejemplo:
      this.$router.push('/guardarlibro'); // Si estás utilizando Vue Router
      // O puedes usar window.location.href = '/ruta-del-componente'; para navegar manualmente
       }, 
       async obtenerLibros() {
         const query = `
           query {
             books {
               id
               nombre
               titulo
               fecha
             }
           }
         `;
         
         try {
           const response = await axios.post('http://localhost:8000/graphql/', {
             query
           });
           this.libros = response.data.data.books;
         } catch (error) {
           console.error('Error al obtener libros:', error);
         }
       }
     },

     
   };
   </script>


<style scoped>

</style>
