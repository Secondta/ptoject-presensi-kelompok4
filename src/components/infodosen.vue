<template>
    <div class="all text-center" style="margin-top: 15rem;">
        <a href="/presensidosen"><button v-if="userRole === 'dosen'">Presensi Dosen</button></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <button v-if="userRole === 'dosen'">Kehadiran Mahasiswa</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/rekapdosen"><button v-if="userRole === 'dosen'">Rekap Dosen</button></a>
    </div>
</template>

<script>
export default {
    name: "infodosen",
    computed: {
        userRole() {
            return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
        }
    }
}
</script>