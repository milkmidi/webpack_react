
module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => {
      if (value === '') {
        return 'The name is required';
      }
      return true;
      /* if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }*/
    },
  }],
  actions: (data) => {
    let componentTemplate;
    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = 'stateless.js.hbs';
        break;
      }
      case 'ES6 Class':
      default:
        componentTemplate = 'es6.js.hbs';
    }

    const actions = [{
      type: 'add',
      path: '../src/js/component/{{properCase name}}/index.js',
      templateFile: `generator/component/${componentTemplate}`,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../src/js/component/{{properCase name}}/index.styl',
      templateFile: 'generator/component/style.styl.hbs',
      abortOnFail: true,
    }];
    return actions;
  },
};
