# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### useReducer() 
```javascript
const [state, dispatch] = useReducer(reducer, initialArg, init?)

import { useReducer } from 'react';

function reducer(state, action) {
  // ...
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  // ...
```


<img width="961" alt="Screenshot 2024-08-05 at 7 47 48 PM" src="https://github.com/user-attachments/assets/bbac68cf-7f90-40a2-94e2-e39b96c61c3c">

<img width="924" alt="Screenshot 2024-08-05 at 7 48 15 PM" src="https://github.com/user-attachments/assets/00d7b7ec-7f02-443f-97d8-de0af512f515">

<img width="1055" alt="Screenshot 2024-08-05 at 7 49 58 PM" src="https://github.com/user-attachments/assets/a1d34416-e75d-49ee-ac53-577987b745d9">
