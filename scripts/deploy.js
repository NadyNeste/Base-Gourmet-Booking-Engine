const hre = require("hardhat");
async function main() {
  const Engine = await hre.ethers.getContractFactory("GourmetBookingEngine");
  const engine = await Engine.deploy();
  await engine.deployed();
  console.log("Booking Engine initialized at:", engine.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
