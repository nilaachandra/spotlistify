// app/profile/page.tsx
import SignOutButton from "@/app/auth/login/SignoutButton"
import { auth } from "@/lib/auth"
import { redirect } from 'next/navigation'

export default async function ProfilePage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/auth/login')
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {session.user.email}</p>
      <SignOutButton />
    </div>
  )
}