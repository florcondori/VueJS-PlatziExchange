<template>
    <button 
        @click="buttonClick"
        class="bg-transparent hover_bg-green-500 text-green-700 font-semibold over:border-transparent rounded">
        <beat-loader :loading="isLoading" :color="'#68d391'" :size="8"/>
        <p v-show="!isLoading">
            <slot> </slot> 
        </p>
    </button>
</template>

<script>
export default {
    name: 'PxButton',
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        buttonClick () {
            this.$emit('click');
        }
    }
}
</script>
