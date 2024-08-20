import { useWriteContract } from "wagmi";
import abi from "../abi/token.json";
import { useState } from "react";

export default function TransferPage() {
  const { writeContract, data, isPending, isSuccess } = useWriteContract();
  const [transferAddress, setTransferAddress] = useState<string>("");
  const [transferAmount, setTransferAmount] = useState<string>("");
  const [transferSettled, setTransferSettled] = useState<boolean>(false);

  const handleTransfer = () => {
    writeContract(
      {
        abi: abi,
        address: "0x661792716fcf938e63e7921212a145d11d9691d0",
        functionName: "transfer",
        args: [transferAddress, Number(transferAmount)],
      },
      {
        onSuccess(data, variables, context) {
          // toast.success("Your transfer is completed")
        },
        onSettled(data, error, variables, context) {
          // console.log
          setTransferSettled(true);
        },
      }
    );
  };

  return (
    <section>
      {isPending && <div>Transfer is loading</div>}
      {isSuccess && <div>Transfer is successful</div>}
      {transferSettled && <div>Transfer has been confirmed</div>}
      <div>
        <input
          type="text"
          placeholder="enter address"
          title="transfer address field"
          onChange={(e) => setTransferAddress(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="enter amount"
          title="transfer amount field"
          onChange={(e) => setTransferAmount(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleTransfer}>
        Transfer
      </button>
    </section>
  );
}
