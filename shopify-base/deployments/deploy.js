async function main() {
    const [deployer] = await ethers.getSigners();
    const EventTracking = await ethers.getContractFactory("EventTracking");

    // Estimate the gas for deploying the contract
    const gasEstimate = await deployer.estimateGas(EventTracking.getDeployTransaction());
    console.log('Gas estimate:', gasEstimate.toString());

    // Deploy the contract
    const eventTracking = await EventTracking.deploy();
    await eventTracking.deployed();
    console.log('Contract deployed to address:', eventTracking.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
