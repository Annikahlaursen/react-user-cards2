import PostList from "./PostList";
import UserCard from "./UserCard";

function UserList({ users, onDelete }) {
  return (
    <section className="grid">
      {users.map((user) => (
        <UserCard user={user} onDelete={onDelete} />
      ))}

      <PostList />
    </section>
  );
}

// hvad er keys?
// Keys hjælper React med at identificere hvilke items der er ændret, tilføjet eller fjernet i en liste. De skal være unikke for hvert item i listen.

// Hvorfor er keys vigtige?
// Keys er vigtige fordi de forbedrer ydeevnen ved at hjælpe React med at optimere rendering processen. Uden keys kan React have svært ved at afgøre hvilke elementer der
// skal opdateres, hvilket kan føre til ineffektiv rendering og potentielle fejl i UI'et.

// Hvad der gør en god key?
// En god key er unik og stabil. Det betyder at den ikke bør ændre sig over tid eller mellem renders. Typisk bruges unikke id'er fra datasættet som keys.

// Beskriv forskellen på props og state i React
// Props (properties) er data der sendes fra en forælder komponent til et barn komponent. Props er immutable, hvilket betyder at de ikke kan ændres af barn komponenten.
// State er derimod data der er lokal til en komponent og kan ændres over tid. State bruges til at håndtere dynamiske data og UI ændringer inden for komponenten.

export default UserList;
