<template>
    <div class="contact">
        <h1>Contact Us</h1>
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
        }
    }
};
</script>

<style scoped>
.contact {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
}

input,
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>
