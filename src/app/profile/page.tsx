import ProfileForm from "@/components/ProfileForm";


export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <p className="text-gray-500 text-sm">Update your personal information and account settings.</p>
      </div>
      <ProfileForm />
    </div>
  );
}