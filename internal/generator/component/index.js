const { componentExists } = require('../util');

module.exports = {
  description: '新增 React 組件',
  prompts: [{
    type: 'list',
    name: 'type',
    message: '選擇組件類型：',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class'],
  }, {
    type: 'input',
    name: 'name',
    message: '輸入組件名稱：',
    default: 'Button',
    validate: (value) => {
      if (!/^[A-Za-z]\w+/.test(value)) return '！名稱格式錯誤！';
      return componentExists(value) ? '！重覆的組件名稱！' : true;
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

    const actions = [
      {
        type: 'add',
        path: '../src/js/component/{{properCase name}}/{{properCase name}}.js',
        templateFile: `generator/component/${componentTemplate}`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/js/component/{{properCase name}}/{{properCase name}}.styl',
        templateFile: 'generator/component/style.styl.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/js/component/{{properCase name}}/package.json',
        templateFile: 'generator/component/package.hbs',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
