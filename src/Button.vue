<template>
  <button :class="classList" :disabled="disabled" class="desn-button">
    <span>
      <span v-if="loading" class="desn-button-loading">
        <span class="loading1"></span>
        <span class="loading2"></span>
        <span class="loading3"></span>
      </span>
      <slot />
    </span>
  </button>
</template>

<script lang = "ts">
export default {
  props: {
    theme: { type: String, default: 'button' },
    size: { type: String, default: 'normal' },
    level: { type: String, default: 'primary' },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
  },
  setup(props) {
    const classList = [
      `desn-button-theme-${props.theme}`,
      `desn-button-size-${props.size}`,
      `desn-button-level-${props.level}`,
      { [`desn-button-loading`]: props.loading },
    ];

    return {
      classList,
    };
  }
};
</script>

<style lang = "scss">
$btn-h-normal: 32px;
$btn-h-small: 24px;
$btn-h-large: 40px;

.desn-button {
  box-sizing: border-box;
  display: inline-flex;
  white-space: nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  color: #404244;
  cursor: pointer;
  background: #fff;

  > span {
    display: inline-flex;
    align-items: center;
  }

  &.desn-button-size-small {
    font-size: 12px;
    height: $btn-h-small;
    border-radius: 3px;
    padding: {
      left: calc(#{$btn-h-small} / 3);
      right: calc(#{$btn-h-small} / 3);
    }
  }

  &.desn-button-size-normal {
    font-size: 14px;
    height: $btn-h-normal;
    border-radius: 4px;
    padding: {
      left: calc(#{$btn-h-normal} / 3);
      right: calc(#{$btn-h-normal} / 3);
    }
  }

  &.desn-button-size-large {
    font-size: 16px;
    height: $btn-h-large;
    border-radius: 5px;
    padding: {
      left: calc(#{$btn-h-large} / 3);
      right: calc(#{$btn-h-large} / 3);
    }
  }

  &.desn-button-theme-link {
    background: transparent;
    border: 1px solid transparent;
    color: #42b983;
    font-weight: bold;

    > span {
      position: relative;

      &::after {
        position: absolute;
        left: 0;
        bottom: -6px;
        content: "";
        width: 0;
        height: 2px;
        background: #42b983;
        transition: width 0.3s ease-in-out;
      }
    }
  }

  &.desn-button-theme-text {
    background: transparent;
    border: 1px solid transparent;
  }

  &.desn-button-theme-button:hover {
    color: #42b983;
    border: 1px solid #42b983;
  }

  &.desn-button-theme-link:hover {
    > span::after {
      width: 100%;
    }
  }

  &.desn-button-theme-text:hover {
    background: #00000008;
    color: #42b983;
  }

  &.desn-button-theme-button.desn-button-level-primary {
    border: 1px solid #42b983;
    background: #42b983;
    color: #ffffffee;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #42b983cc;
    }
  }

  &.desn-button-theme-button.desn-button-level-dangerous {
    border: 1px solid #e25;
    background: #e25;
    color: #ffffffee;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #ee2255aa;
    }
  }

  &.desn-button-theme-link.desn-button-level-dangerous {
    color: #e25;

    & > span::after {
      background: #e25;
    }
  }

  &.desn-button-theme-text.desn-button-level-primary {
    color: #42b983;
  }

  &.desn-button-theme-text.desn-button-level-lesser {
    color: #606266;
  }

  &.desn-button-theme-text.desn-button-level-dangerous {
    color: #e25;
  }

  &.desn-button-theme-button[disabled] {
    border: none;
    background: #c0c4cc;
    cursor: not-allowed;

    &:hover {
      background: #c0c4cc;
    }
  }

  &.desn-button-theme-link[disabled] {
    color: #909399;
    cursor: not-allowed;

    > span::after {
      background: #c0c4cc;
    }
  }

  &.desn-button-theme-text[disabled] {
    color: #909399;
    cursor: not-allowed;

    &:hover {
      background: transparent;
    }
  }

  &.desn-button-loading {
    cursor: not-allowed;

    > span > .desn-button-loading {
      position: relative;

      > span {
        position: absolute;
        display: inline-block;
        top: 0;
        left: 0;
        border-radius: 50%;
        background: inherit;
        content: "";
        width: 100%;
        height: 100%;
        animation: ball-scale-multiple 2.1s infinite;

        &.loading1 {
          animation-delay: -0.7s;
        }

        &.loading2 {
          animation-delay: -1.4s;
        }

        &.loading3 {
          animation-delay: -2.1s;
        }
      }
    }
  }

  &.desn-button-size-small {
    > span > .desn-button-loading {
      width: calc(#{$btn-h-small} / 2);
      height: calc(#{$btn-h-small} / 2);
      margin-right: 2px;
    }
  }

  &.desn-button-size-normal {
    > span > .desn-button-loading {
      width: calc(#{$btn-h-normal} / 2);
      height: calc(#{$btn-h-normal} / 2);
      margin-right: 3px;
    }
  }

  &.desn-button-size-large {
    > span > .desn-button-loading {
      width: calc(#{$btn-h-large} / 2);
      height: calc(#{$btn-h-large} / 2);
      margin-right: 4px;
    }
  }

  &.desn-button-loading.desn-button-theme-button {
    background: #42b98399;
    border: none;

    > span > .desn-button-loading > span {
      background: #ffffffcc;
    }

    &:hover {
      background: #42b98399;
    }
  }

  &.desn-button-loading.desn-button-theme-link {
    color: #42b98399;

    > span > .desn-button-loading > span {
      background: #42b98399;
    }

    &:hover > span::after {
      width: 0;
    }
  }

  &.desn-button-loading.desn-button-theme-text {
    color: #c0c4cc;

    > span > .desn-button-loading > span {
      background: #c0c4cc;
    }

    &:hover {
      background: transparent;
    }
  }
}

@keyframes ball-scale-multiple {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  15% {
    opacity: 0.72;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
