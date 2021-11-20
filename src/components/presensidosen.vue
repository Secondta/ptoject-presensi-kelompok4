<template>
<div class="all" style="margin-top: 8rem;">
    <div class="container">
        <div class="row">
            <div class="col">
     <form @submit.prevent="add">
        <input type="hidden" v-model="form.id">
        <p>Tanggal: </p>
        <input type="text" v-model="form.tanggal"><br><br>
        <p>Tombol Hadir: </p>
        <input type="radio" value="Hadir" v-model="form.radio"><br><br>
        <p>Mata Kuliah: </p>
        <input type="text" v-model="form.matkul"><br><br>
        <p>Upload Foto: </p>
         <input type="text" v-model="form.img" required><br><br>
        <button type="submit" v-show="!updateSubmit">add</button>
        <button type="button" v-show="updateSubmit" @click="update(form)">Update</button>
    </form>   
            </div>
        </div>
    </div>
    <div class="b">
    </div>
    </div>
</template>
<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
  data(){
    return{
        form: {
          id: '',
          tanggal: '',
          matkul: '',
          radio: '',
          img: ''
        },
        users: [],
        updateSubmit: false
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('http://localhost:3000/dosen').then(res => {
        this.users = res.data
      }).catch ((err) => {
        console.log(err);
        
      })
    },
      add(){
      axios.post('http://localhost:3000/dosen/', this.form).then(res => {
          this.load()
          this.form.id = ''
          this.form.tanggal = ''
          this.form.matkul = ''
          this.form.radio = ''
          this.form.img = ''
      })
    }
  }
}
</script>