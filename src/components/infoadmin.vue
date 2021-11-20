<template>
    <div class="all text-center" style="margin-top: 13rem;">
        <a href="/rekapdosen"><button v-if="userRole === 'admin'">Rekap Dosen</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/rekapmahasiswa"><button v-if="userRole === 'admin'">Rekap Mahasiswa</button></a>
    </div>
</template>
<script>
export default {
    name: "infomahasiswa",
    computed: {
        userRole() {
            return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
        },
    },
};
</script>