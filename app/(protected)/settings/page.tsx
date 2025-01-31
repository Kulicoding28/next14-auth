import { auth } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();
  return (
    <div>
      <h1 className="text-white">{JSON.stringify(session)}</h1>
    </div>
  );
};

export default SettingsPage;
