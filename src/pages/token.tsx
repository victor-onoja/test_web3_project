import { useReadContract } from "wagmi";

import abi from "../abi/token.json";

export default function TokenDetails() {
  const { data: tokenSupplyData, isLoading: tokenSupplyLoading } =
    useReadContract({
      abi: abi,
      address: "0x661792716fcf938e63e7921212a145d11d9691d0",
      functionName: "totalSupply",
    });

  const { data: tokenNameData, isLoading: tokenNameLoading } = useReadContract({
    abi: abi,
    address: "0x661792716fcf938e63e7921212a145d11d9691d0",
    functionName: "tokenName",
  });

  if (tokenSupplyLoading || tokenNameLoading) {
    return <div>Loading Token...</div>;
  }

  return (
    <section>
      <h1>Token Details</h1>
      <div>Token Supply: {tokenSupplyData?.toString()}</div>
      <div>Token Name: {tokenNameData?.toString()}</div>
    </section>
  );
}
