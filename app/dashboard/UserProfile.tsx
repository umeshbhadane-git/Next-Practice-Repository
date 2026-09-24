async function getUserProfile() {
  await new Promise((resolve) =>
    setTimeout(resolve, 500)
  );

  return {
    name: "Umesh Bhadane",
    email: "umesh@gmail.com",
    role: "Software Developer",
  };
}

export default async function UserProfile() {
  const user = await getUserProfile();

  return (
    <div className="widget">
      <h2>User Profile</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
}