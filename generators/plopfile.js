module.exports = function (plop) {
  // create your generators here

  plop.setGenerator("component", {
    description: "Create a new React Component 📦",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "🤔 What is the name of your React Component ⚛️ 📦?",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase componentName}}/index.tsx",
        templateFile: "templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase componentName}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase componentName}}/stories.tsx",
        templateFile: "templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase componentName}}/test.tsx",
        templateFile: "templates/test.tsx.hbs",
      },
    ],
  });
};
