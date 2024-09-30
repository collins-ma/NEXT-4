// Page component to fetch users and posts in parallel
export default async function ParallelFetchPage() {
    // Use Promise.all to fetch users and posts concurrently
    const [usersResponse, postsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users', {
        cache: 'no-store', // Disable cache for fresh data
      }),
      fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store', // Disable cache for fresh data
      }),
    ]);
  
    const users = await usersResponse.json();
    const posts = await postsResponse.json();
  
    return (
      <div>
        <h1>Users and Posts</h1>
  
        {/* Display Users */}
        <section>
          <h2>Users</h2>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        </section>
  
        {/* Display Posts */}
        <section>
          <h2>Posts</h2>
          <ul>
            {posts.slice(0, 5).map((post) => (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }