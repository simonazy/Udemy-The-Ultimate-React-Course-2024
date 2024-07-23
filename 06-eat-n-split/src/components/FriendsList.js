import Friend from "./Friend";

function FriendsList({
  friends,
  onSelection,
  selectedFriend,
  handleDeleteFriend,
}) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          handleDeleteFriend={handleDeleteFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
