<template>
    <div class="a" style="text-align: center; margin-top:15rem;">
        <a href="/presensimahasiswa"><button v-if="userRole === 'mahasiswa'">Presensi</button>&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a href="/rekapmahasiswa"><button v-if="userRole === 'mahasiswa'">Rekap Mahasiswa</button></a>
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