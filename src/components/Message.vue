<template>
  <div class="desn-message" :class="componentStatus">
    <div class="container">
      <svg
        v-if="messageType === 'success'"
        width="20"
        height="20"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path
          d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
          fill="#15b844"
          stroke="#15b844"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M16 24L22 30L34 18"
          stroke="#FFF"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <svg
        v-else-if="messageType === 'error'"
        width="20"
        height="20"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          fill="#dd5558"
          stroke="#dd5558"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M29.6569 18.3431L18.3432 29.6568"
          stroke="#FFF"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.3432 18.3431L29.6569 29.6568"
          stroke="#FFF"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import { onMounted, onUnmounted, ref } from 'vue'
  export default {
    props: {
      content: {
        type: String,
        required: false,
      },
      duration: {
        type: Number,
        required: false,
      },
      onClose: {
        type: Function,
        required: false,
      },
      messageType: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const componentStatus = ref('')

      onMounted(() => {
        const timer = setTimeout(() => {
          componentStatus.value = 'desn-message-out'
          clearTimeout(timer)
        }, props.duration - 300)
      })

      onUnmounted(() => {
        props.onClose()
      })

      return {
        componentStatus,
      }
    },
  }
</script>

<style lang="scss">
  .desn-message {
    background-color: #ffffff;
    padding: 12px 32px;
    min-height: 40px;
    min-width: 120px;
    position: fixed;
    top: 32px;
    left: 50%;
    z-index: 999;
    transform: translateX(-50%);
    box-shadow: #30313322 0 0 10px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;

    > .container {
      display: flex;
      align-items: center;

      > p {
        font-size: 14px;
        color: #606266;
        margin-left: 12px;
      }
    }
  }

  .desn-message-out {
    opacity: 0;
    transform: translateX(-50%) translateY(-6px);
    transition: all 0.3s;
  }
</style>
