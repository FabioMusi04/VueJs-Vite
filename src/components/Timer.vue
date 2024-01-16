<template>
    <div id="timer">
        <h1>{{ currentTime }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Timer',
    data() {
        return {
            currentTime: ''
        };
    },
    mounted() {
        this.updateTime();
        setInterval(() => {
            this.updateTime();
        }, 1000);
    },
    methods: {
        updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            this.currentTime = `${hours}:${minutes}:${seconds}`;
        }
    }
};
</script>

<style scoped>
h1 {
    font-size: 24px;
    text-align: center;
}
</style>
