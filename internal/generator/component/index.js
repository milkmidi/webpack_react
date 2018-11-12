const { componentExists } = require('../util');


module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Stateless Function',
      choices: () => ['Stateless Function', 'React.Component'],
    }, {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if ((/.+/).test(value)) {
          return componentExists(value) ? 'A component or container with this name already exists' : true;
        }
        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
  ],
  actions: (data) => {
    let componentTemplate;
    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = 'stateless.js.hbs';
        break;
      }
      case 'React.Component':
      default:
        componentTemplate = 'es6.js.hbs';
    }

    const actions = [
      {
        type: 'add',
        path: '../../src/js/component/{{properCase name}}/index.js',
        templateFile: 'component/index.js.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/js/component/{{properCase name}}/{{properCase name}}.jsx',
        templateFile: `component/${componentTemplate}`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../src/js/component/{{properCase name}}/{{properCase name}}.styl',
        templateFile: 'component/style.styl.hbs',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
