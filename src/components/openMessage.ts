import { createApp, h } from 'vue';
import Message from './Message.vue';

interface Options {
  content?: Function;
  duration?: number;
  onClose?: Function;
}

const message = (options: Options, messageType: 'success' | 'error') => {
  let { content, duration, onClose } = options;
  content = content
    ? content
    : () => {
        return `This is a ${messageType} message`;
      };
  duration = duration ? duration * 1000 : 3000;
  onClose = onClose
    ? onClose
    : () => {
        console.log(`${messageType} message was closed`);
      };

  const container = document.createElement('div');
  document.body.appendChild(container);

  const close = () => {
    app.unmount(container);
    container.remove();
  };

  const app = createApp({
    render() {
      return h(Message, {
        content: content(),
        onClose,
        duration,
        messageType,
      });
    },
  });
  app.mount(container);
  setTimeout(() => {
    close();
  }, duration);
};

const success = (options: Options = {}) => {
  message(options, 'success');
};

const error = (options: Options = {}) => {
  message(options, 'error');
};

export const openMessage = {
  success,
  error,
};
