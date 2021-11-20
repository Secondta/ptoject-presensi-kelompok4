<template>
  <div id="app">
    <!-- Awal Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src="https://1.bp.blogspot.com/-dkBiDZF1PYM/XTcNAxGDd_I/AAAAAAAAI2Q/4lkJKaEB3CwiMHNKZn9bt7QqSR5Wt1_ZwCLcBGAs/s320/Binus%2BUniversity%2B%255Bwww.blogovector.com%255D.png" alt="Logo" style="width: 2cm; border-radius:50%;"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Beranda</a>
        </li>
        <li class="nav-item">
          <div class="dropdown">
            <a href="#" class="nav-link" v-if="logout !== null">Informasi Perkuliahan</a>
              <div class="dropdown-content">
            <a style="color: #5fbae9;" href="/infomahasiswa" v-if="roles === 'mahasiswa'">Mahasiswa</a><br>
            <a style="color: #5fbae9;" href="/infodosen" v-if="roles === 'dosen'">Dosen</a><br>
            <a style="color: #5fbae9;" href="/infoadmin" v-if="roles === 'admin'">Admin</a><br>
              </div>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/tentang">Tentang</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/kontak">Kontak</a>
        </li>
        <li class="nav-item">
          <div class="dropdown">
            <a href="#" class="nav-link" v-if="logout !== null">Profile</a>
              <div class="dropdown-content">
            <a style="color: #5fbae9;" href="/mahasiswa" v-if="roles === 'mahasiswa'">Mahasiswa</a><br>
            <a style="color: #5fbae9;" href="/dosen" v-if="roles === 'dosen'">Dosen</a><br>
            <a style="color: #5fbae9;" href="/admin" v-if="roles === 'admin'">Admin</a><br>
              </div>
          </div>
        </li>
        <li class="nav-item">
          <a href="/login"><button type="button" class="btn btn-light" style="margin-left: 930px;" v-if="logout === null">Login</button></a>
          <a href="/"><button type="button" class="btn btn-light" style="margin-left: 700px;" v-if="logout !== null" @click="out">Logout</button></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<!-- Akhir Navbar -->
<router-view></router-view>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#212529" fill-opacity="1" d="M0,192L40,165.3C80,139,160,85,240,90.7C320,96,400,160,480,165.3C560,171,640,117,720,112C800,107,880,149,960,176C1040,203,1120,213,1200,218.7C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> 
<!-- Awal Footer -->
<footer class="bg-dark position-relative bottom-0 start-0" style="width: 100%; padding: 30px;">
  <div class="container">
  <div class="row">
    <div class="col">
      <a class="navbar-brand " href="/"><img src="https://1.bp.blogspot.com/-dkBiDZF1PYM/XTcNAxGDd_I/AAAAAAAAI2Q/4lkJKaEB3CwiMHNKZn9bt7QqSR5Wt1_ZwCLcBGAs/s320/Binus%2BUniversity%2B%255Bwww.blogovector.com%255D.png" alt="Logo" style="width: 5cm; margin-top: 3rem; border-radius:50%;"></a>
    </div>
    <div class="col" style="color: white;">
      <center>
      Menu: </center><br>
      <ul>
        <li class="nav-item">
          <a class="nav-link" href="/">Beranda</a>
        </li>
        <li class="nav-item">
          <div class="dropdown">
            <a href="#" class="nav-link" v-if="logout !== null">Informasi Perkuliahan</a>
              <div class="dropdown-content">
            <a style="color: #5fbae9;" href="/infomahasiswa" v-if="roles === 'mahasiswa'">Mahasiswa</a><br>
            <a style="color: #5fbae9;" href="/infodosen" v-if="roles === 'dosen'">Dosen</a><br>
            <a style="color: #5fbae9;" href="/infoadmin" v-if="roles === 'admin'">Admin</a><br>
              </div>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/tentang">Tentang</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/kontak">Kontak</a>
        </li>
        <li class="nav-item">
          <div class="dropdown">
            <a href="#" class="nav-link" v-if="logout !== null">Profile</a>
              <div class="dropdown-content">
            <a style="color: #5fbae9;" href="/mahasiswa" v-if="roles === 'mahasiswa'">Mahasiswa</a><br>
            <a style="color: #5fbae9;" href="/dosen" v-if="roles === 'dosen'">Dosen</a><br>
            <a style="color: #5fbae9;" href="/admin" v-if="roles === 'admin'">Admin</a><br>
              </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="col" style="color: white;">
      <div id="kontak">
        <center>
      Kontak: </center><br>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
      </svg>&nbsp;
      Whatsapp: <a href="https://wa.me/08568835274229" target="_blank">08568835274229</a><br>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-line" viewBox="0 0 16 16">
      <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"/>
      </svg>&nbsp;
      Line: <a href="https://page.line.me/vwe7399h" target="_blank">@Binus</a><br>                  
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
      </svg>&nbsp;                  
      Email: <a href="mailto:infobinuscenter@binus.edu" target="_blank">infobinuscenter@binus.edu</a><br>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
      </svg>&nbsp;
      instagram: <a href="https://www.instagram.com/binusuniversityofficial/?hl=id" target="_blank">@binusuniversityofficial</a><br>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
     </svg>&nbsp;
     Facebook: <a href="https://id-id.facebook.com/universitasbinanusantara/" target="_blank">@universitasbinanusantara</a>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="col" style="color: white;">
      <center>
      Alamat: </center><br>
      <p style="line-height: 22px; text-align: center;"><span style="font-weight: 500; font-family: Montserrat; font-size: 18px; color: rgb(255, 255, 255); font-style: normal;">Kampus BINUS ONLINE LEARNING @Semarang</span></p>
      <div class="lp-element lp-pom-text nlh" id="lp-pom-text-407" style="height: auto;"><p style="line-height: 22px; text-align: center;"><span style="font-weight: 300; font-family: Montserrat; font-size: 14px; color: rgb(255, 255, 255);"><span style="font-style: normal;">Gedung Griya Bina Artha (Gedung Bank BPD Jateng) Lantai 3</span></span><br><span style="font-weight: 300; font-family: Montserrat; font-size: 14px; color: rgb(255, 255, 255);"><span style="font-style: normal;">Jl. Pemuda 142, Semarang</span></span></p></div> <hr>
      <center>
      <span style="font-size: 12px; color: rgb(145, 147, 150);">© 2021 BINUS ONLINE LEARNING @Semarang. All rights reserved.<br></span>
      </center>
    </div>
    </div>
  </div>
  </div>
</div>
</footer>
<!-- Akhir Footer -->
  </div>
</template>
<script>
export default {
  name: "App",
  // data(){
  //   return{

  //   }
  // }
  computed: {
    logout() {
      return JSON.parse(sessionStorage.getItem("USER_DATA"));
    },
    userRole() {
            return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
        },
    },
  methods: {
    out() {
      sessionStorage.clear();
    },
    getUser() {
      let user = JSON.parse(sessionStorage.getItem("USER_DATA"));
      this.roles = user === null ? "" : user.role;
      this.logout = user;
    }
  },
  mounted() {
    this.getUser();
  }
}
</script>