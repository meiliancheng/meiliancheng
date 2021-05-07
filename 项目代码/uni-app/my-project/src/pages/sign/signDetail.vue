<template>
    <h2>{{ id }}</h2>
</template>

<script>
export default {
    data() {
        return {
            id: this.$store.state.id,
        };
    },
};
</script>

<style></style>
