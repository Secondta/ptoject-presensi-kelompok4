<template>
<div class="all" style="margin-top: 8rem;">
    <div class="container">
        <div class="row">
            <div class="col">
    <table style="border-radius: 10px; border: 1px solid black;">
      <tr style="height:1cm; border-radius: 10px; border: 1px solid black;">
        <th style="text-align: center;">No</th>&nbsp; &nbsp; 
        <th style="text-align: center;">Tanggal</th>&nbsp; &nbsp; 
        <th style="text-align: center;">Hadir/Tidak</th>&nbsp; &nbsp; 
        <th style="text-align: center;">Materi Kuliah</th>&nbsp; &nbsp; 
        <th style="text-align: center;">Foto</th>
      </tr>
      <tr v-for="user in users" :key="user.id" style="height:1cm; border-radius: 10px; border: 1px solid black;">
        <td style="text-align: center;">{{ user.id }}</td>&nbsp; &nbsp; 
        <td style="text-align: center;">{{ user.tanggal }}</td>&nbsp; &nbsp; 
        <td style="text-align: center;">{{ user.radio }}</td>&nbsp; &nbsp; 
        <td style="text-align: center;">{{ user.matkul }}</td>&nbsp; &nbsp; 
        <td style="text-align: center;"><img class="card-img-top" :src="user.img" /></td>
      </tr> 
      </table>
            </div>
        </div>
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
          radio: '',
          matkul: '',
          foto: ''
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
          this.form.radio = ''
          this.form.matkul = ''
          this.form.foto = ''
      })
    }
  }
}
</script>