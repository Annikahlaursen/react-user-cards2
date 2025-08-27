import { useState, useEffect } from "react";

function SimpleUserPosts() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      console.log("🔄 Starter datahentning...");

      try {
        // Hent users først
        console.log("📥 Henter users...");
        const usersResponse = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const usersData = await usersResponse.json();
        console.log("✅ Users hentet:", usersData.length);
        setUsers(usersData.slice(0, 5)); // Kun første 5 users

        // Hent posts derefter
        console.log("📥 Henter posts...");
        const postsResponse = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const postsData = await postsResponse.json();
        console.log("✅ Posts hentet:", postsData.length);
        setPosts(postsData);

        console.log("🎉 Al data hentet!");
      } catch (error) {
        console.error("❌ Fejl ved datahentning:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>⏳ Henter data fra to API kilder...</div>;
  }

  return (
    <div
      style={{
        border: "2px solid #007bff",
        padding: "20px",
        margin: "20px 0",
      }}
    >
      <h2>Users og deres Posts</h2>
      <p>
        📊 Data: {users.length} users og {posts.length} posts
      </p>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>
            {user.name} (User #{user.id})
          </h3>
          <p>📧 {user.email}</p>

          <h4>Posts af denne bruger:</h4>
          {posts
            .filter((post) => post.userId === user.id)
            .slice(0, 2)
            .map((post) => (
              <div
                key={post.id}
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "8px",
                  margin: "5px 0",
                }}
              >
                <strong>Post #{post.id}:</strong> {post.title}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default SimpleUserPosts;
