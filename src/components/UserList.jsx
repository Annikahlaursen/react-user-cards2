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

// Step 6.2: Skriv en kommentar om keys
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

//Step 9.4: Refleksion
// Hvorfor returnerer JSONPlaceholder altid status 201 for POST requests?
// JSONPlaceholder returnerer altid status 201 for POST requests fordi det er en mock API designet til test og udvikling. Det simulerer oprettelsen af ressourcer
// ved at returnere en succes status uden faktisk at oprette nogen data på serveren.

// Hvad er forskellen mellem at gemme data lokalt vs. på en server?
// At gemme data lokalt betyder at dataen kun eksisterer i brugerens browser eller enhed, og vil gå tabt hvis siden opdateres eller browseren lukkes.
// At gemme data på en server betyder at dataen er gemt eksternt og kan tilgås fra forskellige enheder og sessioner, hvilket gør det mere permanent og delbart.

// Hvorfor skal vi bruge crypto.randomUUID() i stedet for at stole på server ID?
// Vi bruger crypto.randomUUID() for at generere unikke ID'er lokalt, især når vi arbejder med mock data eller når serveren ikke returnerer et ID.
// Dette sikrer at hver bruger har et unikt ID, hvilket er vigtigt for rendering og manipulation af brugerdata i React.

// Hvad er forskellen mellem rigtig server kommunikation og JSONPlaceholder simulation?
// Rigtig server kommunikation involverer faktisk at sende og modtage data fra en live server, hvor dataen gemmes permanent og kan manipuleres.
// JSONPlaceholder simulation er en mock API der simulerer server kommunikation for test og udvik.

// Vi er nået til Step 10.3: Parallel datahentning - https://github.com/cederdorff/react-user-cards/blob/5-dataflow/lists-keys-and-api.md

export default UserList;
