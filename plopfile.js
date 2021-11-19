module.exports = plop => {
    plop.setGenerator('component', {
      description: 'Create a component',
      // User input prompts provided as arguments to the template
      prompts: [
        {
          // Raw text input
          type: 'input',
          // Variable name for this input
          name: 'name',
          // Prompt to display on command line
          message: 'What is your component name?'
        },
      ],
      actions: [
        {
            type: 'add',
            // Plop will create directories for us if they do not exist
            // so it's okay to add files in nested locations.
            path: 'src/components/{{name}}/{{name}}.tsx',
            templateFile:
              'templates/Component/Component.tsx.hbs',
          },
          {
            type: 'add',
            // Plop will create directories for us if they do not exist
            // so it's okay to add files in nested locations.
            path: 'src/components/{{name}}/{{name}}Props.ts',
            templateFile:
              'templates/Component/ComponentProps.ts.hbs',
          },
          {
            type: 'add',
            path: 'src/components/{{name}}/{{name}}.spec.tsx',
            templateFile:
              'templates/Component/Component.spec.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/components/{{name}}/{{name}}.mdx',
            templateFile:
              'templates/Component/Component.mdx.hbs',
          },
          {
            type: 'add',
            path: 'src/components/{{name}}/index.ts',
            templateFile: 'templates/Component/index.ts.hbs',
          },
          {
            // Adds an index.js file if it does not already exist
            type: 'add',
            path: 'src/components/index.ts',
            templateFile: 'templates/index.ts.hbs',
            // If index.js already exists in this location, skip this action
            skipIfExists: true,
          },
          {
            // Action type 'append' injects a template into an existing file
            type: 'append',
            path: 'src/components/index.ts',
            // Pattern tells plop where in the file to inject the template
            pattern: `/* PLOP_INJECT_IMPORT */`,
            template: `import {{name}} from './{{name}}';`,
          },
          {
            type: 'append',
            path: 'src/components/index.ts',
            pattern: `/* PLOP_INJECT_EXPORT */`,
            template: `export * from './{{name}}';`,
          },
      ],
    });
    plop.setGenerator('hook', {
      description: 'Create a new hook',
      // User input prompts provided as arguments to the template
      prompts: [
        {
          // Raw text input
          type: 'input',
          // Variable name for this input
          name: 'name',
          // Prompt to display on command line
          message: 'What is your hook name (exclude "use" prefix when naming)?'
        },
      ],
      actions: [
        {
            type: 'add',
            // Plop will create directories for us if they do not exist
            // so it's okay to add files in nested locations.
            path: 'src/hooks/use{{name}}/use{{name}}.tsx',
            templateFile:
              'templates/Hook/Hook.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/hooks/use{{name}}/use{{name}}.spec.tsx',
            templateFile:
              'templates/Hook/Hook.spec.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/hooks/use{{name}}/index.ts',
            templateFile: 'templates/Hook/index.ts.hbs',
          },
          {
            // Adds an index.ts file if it does not already exist
            type: 'add',
            path: 'src/hooks/index.ts',
            templateFile: 'templates/Hook/index.ts.hbs',
            // If index.ts already exists in this location, skip this action
            skipIfExists: true,
          },
          {
            // Action type 'append' injects a template into an existing file
            type: 'append',
            path: 'src/hooks/index.ts',
            // Pattern tells plop where in the file to inject the template
            pattern: `/* PLOP_INJECT_IMPORT */`,
            template: `import use{{name}} from './use{{name}}';`,
          },
          {
            type: 'append',
            path: 'src/hooks/index.ts',
            pattern: `/* PLOP_INJECT_EXPORT */`,
            template: `export * from './use{{name}}';`,
          },
      ],
    });
    plop.setGenerator('context', {
      description: 'Create a new context',
      // User input prompts provided as arguments to the template
      prompts: [
        {
          // Raw text input
          type: 'input',
          // Variable name for this input
          name: 'name',
          // Prompt to display on command line
          message: 'What is your context name?'
        },
      ],
      actions: [
        {
            type: 'add',
            // Plop will create directories for us if they do not exist
            // so it's okay to add files in nested locations.
            path: 'src/providers/{{name}}/{{name}}.tsx',
            templateFile:
              'templates/Provider/Provider.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/providers/{{name}}/{{name}}.spec.tsx',
            templateFile:
              'templates/Provider/Provider.spec.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/providers/{{name}}/index.ts',
            templateFile: 'templates/Provider/index.ts.hbs',
          },
          {
            // Adds an index.js file if it does not already exist
            type: 'add',
            path: 'src/providers/index.ts',
            templateFile: 'templates/index.ts.hbs',
            // If index.js already exists in this location, skip this action
            skipIfExists: true,
          },
          // {
          //   // Action type 'append' injects a template into an existing file
          //   type: 'append',
          //   path: 'src/hooks/index.ts',
          //   // Pattern tells plop where in the file to inject the template
          //   pattern: `/* PLOP_INJECT_IMPORT */`,
          //   template: `import {{name}} from './{{name}}';`,
          // },
          // {
          //   type: 'append',
          //   path: 'src/hooks/index.ts',
          //   pattern: `/* PLOP_INJECT_EXPORT */`,
          //   template: `export * from './{{name}}';`,
          // },
      ],
    });
  };
