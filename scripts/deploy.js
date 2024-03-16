async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const MyToken = await hre.ethers.getContractFactory("MyToken");

  const nft = await MyToken.deploy();

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  await nft.safeMint(await signer0.getAddress(), `ipfs://${process.env.IPFS_IMAGE_CID}`);

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// 0xE0ae6151D338D0FAf1BF06dd119D9255315FB1EE
// https://sepolia.etherscan.io/nft/0xE0ae6151D338D0FAf1BF06dd119D9255315FB1EE/0
// https://testnets.opensea.io/assets/sepolia/0xe0ae6151d338d0faf1bf06dd119d9255315fb1ee/0