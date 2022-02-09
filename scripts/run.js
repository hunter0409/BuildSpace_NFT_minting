const main = async () => {
    const nftContractFactroy = await hre.ethers.getContractFactory('MyEpicNFT');
    const nftContract = await nftContractFactroy.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);

    let txn = await nftContract.makeAnEpicNFT()

    await txn.wait()

    txn = await nftContract.makeAnEpicNFT()

    await txn.wait()

    string[] firstWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];

    string[] secondWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];

    string[] thirdWords = ["YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD", "YOUR_WORD"];

    string memory finalSvg = string(abi.encodePacked(baseSvg, first, second, third, "</text></svg>"));

};

const runmain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runmain();