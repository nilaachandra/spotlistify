
import { auth } from "@/lib/auth";

export default async function ProfileData() {
  const session = await auth();

  if (!session?.user) {
    return <div>Not authenticated</div>;
  }

  return (
    <div>
      <h2>Profile Data</h2>
      <p>Email: {session.user.email}</p>
      {/* Add more user data here */}
    </div>
  );
}