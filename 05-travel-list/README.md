# Travel List Project
![Screenshot 2024-07-22 at 2 52 05 PM](https://github.com/user-attachments/assets/39eaf499-cb6d-4c8d-9cf0-6463ee0f7395)

### Divide the components
- `<Logo/>`
- `<Form/>` A form includes quantity, description input, along with a submit button.
- `<PackingList/>` A list of `<Packing/>`, along with a controlled state to sort the items array by description, date added, and if packed.
- `<Packing>` A checkbox, item description paragraph and a button to show if the item is packed.
- `<Stats>` Some derived states to show the packing statistics.  

## Available Scripts

In the project directory, you can run: `npm start`. Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Some javascript knowledge in this project
#### Create an array from a range of numbers
```javascript

let arrayFromRange = Array.from({length: 5}, (_, index) => index + 1);
```
```jsx
<select>
  {Array.from({length:20},(_, index)=>index+1).map(
    (num) => (<option value={num}>{num}</option>)
)}
</select>
```
#### Sort an array
```javascript
let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// Ascending order
numbers.sort((a, b) => a - b);

// Descending order
numbers.sort((a, b) => b - a);

let fruits = ['banana', 'apple', 'orange', 'mango'];
fruits.sort();

let people = [
  {name: 'John', age: 30},
  {name: 'Alice', age: 25},
  {name: 'Bob', age: 35}
];
people.sort((a, b) => a.age - b.age);

//Using localeCompare() for string comparisons with locale-specific sorting
sortedItem = itemsArray
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

```
