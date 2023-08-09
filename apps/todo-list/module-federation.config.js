module.exports = {
  name: 'todo-list',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
