import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
import { publicClient } from "viem";
import { client } from "../../../lib/wagmiConfig";

export default async function handler(req, res) {
  const { uuid } = req.query;

  try {
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
    const contractAbi = JSON.parse(process.env.NEXT_PUBLIC_CONTRACT_ABI);

    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_ROOTSTOCK_API_URL
    );
    const contract = new ethers.Contract(
      contractAddress,
      contractAbi,
      provider
    );

    const uuidBytes32 = ethers.utils.formatBytes32String(uuid);
    const [data, name, imagedCid] = await contract.getData(uuidBytes32);

    const result = {
      id: data.id.toNumber(),
      name: name,
      imagedCid: imagedCid,
      swag: data.swag,
      num1: data.num1.toNumber(),
      num2: data.num2.toNumber(),
      num3: data.num3.toNumber(),
      num4: data.num4.toNumber(),
      num5: data.num5.toNumber(),
      overallScore: data.overallScore.toNumber(),
    };

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
