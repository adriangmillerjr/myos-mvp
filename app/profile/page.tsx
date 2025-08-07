import ProfileTabs from '../../components/Tabs/ProfileTabs';

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Profile</h1>
      <p className="mb-6 text-accent-4 max-w-prose">
        Manage your personal information, vision and other aspects of your life.
      </p>
      <ProfileTabs />
    </div>
  );
}