import type { Metadata } from "next"
import { ProfileForm } from "@/components/dashboard/profile-form"

export const metadata: Metadata = {
  title: "Profile",
  description: "Manage your client profile and company details.",
}

export default function ProfilePage() {
  return <ProfileForm />
}
