# A star rating component using useState() 

- 2 states:
  - `const [rating, setRating] = useState(0);`
  - `const [tempRating, setTempRating] = useState(0);`

- 3 event listeners:
  - `onMouseEnter`
  - `onMouseLeave`
  - `onClick`

Use prop to pass the variables: the number of stars, messages, color;
Added default values to prop values.
```javascript
function StarRating({
  defaultRating = 5,
  message = ["Bad", "Bad+", "Average", "Average+", "Good"],
  color = "#373A40",
}){

}
```
