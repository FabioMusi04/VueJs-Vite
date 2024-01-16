<template>
    <div class="home">
        <h1>Welcome to the Home Page</h1>
        <p>This is the content of the home page.</p>
        <Timer />
    </div>
</template>

<script>
import Timer from '@/components/Timer.vue';
export default {
    name: 'Home',
    components: {
        Timer
    }
}
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 50px;
}
</style>
