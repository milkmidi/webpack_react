const { componentExists } = require('../util');

module.exports = {
  description: 'Add a container component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the base component type:',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'React.Component'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }
      return 'The name is required';
    },
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    var componentTemplate; // eslint-disable-line no-var

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = 'stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = 'es6.js.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: '../../src/js/container/{{properCase name}}/index.js',
        templateFile: 'component/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/js/container/{{properCase name}}/{{properCase name}}.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/js/container/{{properCase name}}/{{properCase name}}.styl',
        templateFile: 'component/style.styl.hbs',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
