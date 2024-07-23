import Button from "./Button";

function Friend({ friend, onSelection, selectedFriend, handleDeleteFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <div>
      <Button onClick={() => handleDeleteFriend(friend.id)}>x</Button>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="red">
            You own {friend.name} {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="green">
            {friend.name} owes you {Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </div>
  );
}

export default Friend;
