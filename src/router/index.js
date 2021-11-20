import Vue from "vue";
import Router from "vue-router";
import Beranda from "@/components/beranda.vue";
import Info from "@/components/info.vue";
import Tentang from "@/components/tentang.vue";
import Profile from "@/components/profile.vue";
import Login from "@/components/login.vue";
import Registrasi from "@/components/register.vue";
import Kontak from "@/components/kontak.vue";
import Dosen from "@/components/dosen.vue";
import Mahasiswa from "@/components/mahasiswa.vue";
import Admin from "@/components/admin.vue";
import Infodosen from "@/components/infodosen.vue";
import Presensidosen from "@/components/presensidosen.vue";
import Rekapdosen from "@/components/rekapdosen.vue";
import Infomahasiswa from "@/components/infomahasiswa.vue";
import Presensimahasiswa from "@/components/presensimahasiswa.vue";
import Rekapmahasiswa from "@/components/rekapmahasiswa.vue";
import Infoadmin from "@/components/infoadmin.vue";


Vue.use(Router);

function configRoutes() {
  return [
    {
      path: "/",
      name: "Beranda",
      component: Beranda,
    },
    {
      path: "/info",
      name: "Info",
      component: Info,
    },
    {
      path: "/tentang",
      name: "Tentang",
      component: Tentang,
    },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/register",
        name: "Registrasi",
        component: Registrasi,
      },
      {
        path: "/kontak",
        name: "Kontak",
        component: Kontak,
      },
      {
        path: "/dosen",
        name: "Dosen",
        component: Dosen,
      },
      {
        path: "/mahasiswa",
        name: "Mahasiswa",
        component: Mahasiswa,
      },
      {
        path: "/admin",
        name: "Admin",
        component: Admin,
      },
      {
        path: "/infodosen",
        name: "Infodosen",
        component: Infodosen,
      },
      {
        path: "/presensidosen",
        name: "Presensidosen",
        component: Presensidosen,
      },
      {
        path: "/rekapdosen",
        name: "Rekapdosen",
        component: Rekapdosen,
      },
      {
        path: "/infomahasiswa",
        name: "Infomahasiswa",
        component: Infomahasiswa,
      },
      {
        path: "/presensimahasiswa",
        name: "Presensimahasiswa",
        component: Presensimahasiswa,
      },
      {
        path: "/rekapmahasiswa",
        name: "Rekapmahasiswa",
        component: Rekapmahasiswa,
      },
      {
        path: "/infoadmin",
        name: "Infoadmin",
        component: Infoadmin,
      }
  ];
}

const link = new Router({
  mode: "history",
  routes: configRoutes(),
//   scrollBehavior: () => ({ y: 0 }),
});
export default link;