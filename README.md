# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## NPM version
The node version used for this project is nodejs 18, to install it

### Option 1: Install nodejs v18 directly
- Add PPA: curl -s https://deb.nodesource.com/setup_18.x | sudo bash
- Install nodejs: sudo apt install nodejs -y
- check nodejs version node -v

### Option 2: Install nodejs 18 using node version manager
- Add PPA: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
- source ~/.bashrc
- nvm install v18.16.1
- nvm use 18