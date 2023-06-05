# Hooks in React

## What is this repo about?
This repository is designed for beginners who are just starting out with React. I believe this repository is immensely valuable as it provides a comprehensive overview of various essential React hooks. In this repository, we thoroughly cover the following hooks:

- [**useState**](https://github.com/davidtc8/hooks-learning/tree/master/hook-app/src/01-useState)
    - How to pass data to different components
- **useEffect**
    - Trigger a certain function after the application has already rendered
- **useRef**
    - Mutable values that does not cause a re-render
- **useLayoutEffect**
    - Sincronous hook that happens after react executed all its mutations
- **useMemo**      
    - Cache a component
- **useReducer**
    - Separate the state management from the rendering
- **useContext**     
    - Passing data through components without using props.
- **Custom Hooks**  
    - We also build our own custom hooks

## Folder Structure
    .   ├── hook-app
            ├── node_modules                   # NodeJS Modules
            ├── public                         # Vite Public Files
            ├── src                            # src Folder
                ├── 01-useState                # useState hook
                ├── 02-useEffect               # useEffect hook   
                ├── 03-examples                # Examples
                ├── 04-useRef                  # useRef hook
                ├── 05-useLayoutEffect         # useLayoutEffect hook
                ├── 06-memos                   # useMemo hook
                ├── 07-challenge               # Challenge
                ├── 08-useReducer              # useReducer hook
                ├── 09-useContext              # useContext hook
                ├── hooks                      # Custom Hooks

## Credits
A big thank you to Fernando Herrera for his amazing React.js course on Udemy! His code examples are displayed in this repo folder which are exceptional. Highly recommended!