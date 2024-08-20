import { useAccount } from "wagmi";

export default function ProfilePage() {
  const account = useAccount();

  return (
    <section>
      <div>Account Details</div>
      <div>Address: {account.address}</div>
    </section>
  );
}
