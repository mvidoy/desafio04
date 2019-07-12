DESAFIO 04:
Configurando estrutura

mkdir desafio04
yarn init -y
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D
yarn add react react-dom
yarn add babel-loader -D
yarn add webpack-dev-server -D
yarn add style-loader css-loader -D
yarn add file-loader -D
yarn add @babel/plugin-proposal-class-properties -D

1)Criar/configurar no raiz:
-babel.config.js
-webpack.config.js

2)Criar a pasta src no raiz:
dentro da pasta criar o arquivo os arquivoc:
-index.js (arquivo de entrada da aplicação)
-App.css
-App.js

2)Criar a pasta public no raiz:
dentro da pasta criar o arquivo os arquivoc:
-index.html
obs. O bundle.js é gerado automaticamente pelo React.

3)Insirir no package.json:
"scripts": {
"build": "webpack --mode production",
"dev": "webpack-dev-server --mode development"
},

Generate.editorconfig
trim_trailing_whitespace = true
insert_final_newline = true
indent_style = lf

Configurando: ESLint, Prettier & EditorConfig
yarn add eslint -D
yarn eslint --init
❯ To check syntax, find problems, and enforce code style
❯ JavaScript modules (import/export)
❯ React
-❯◉ Browser
❯ Use a popular style guide
❯ Airbnb (https://github.com/airbnb/javascript)
❯ JavaScript
? Do you want to downgrade? (Y/n) Y
? Would you like to install them now with npm? (Y/n) Y

Remover o arquivo package-lock.json
yarn (rodar)

yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
