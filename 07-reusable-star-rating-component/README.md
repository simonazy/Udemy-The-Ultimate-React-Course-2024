# A star rating component using useState() 

- 2 states:
  - `const [rating, setRating] = useState(0);`
  - `const [tempRating, setTempRating] = useState(0);`

- 3 event listeners:
  - `onMouseEnter`
  - `onMouseLeave`
  - `onClick`

Added default values to prop values: 
```javascript
function StarRating({
  defaultRating = 5,
  message = [],
  color = "#373A40",
})
```
