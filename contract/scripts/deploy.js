const main=async()=>{
    const RealEsate=await hre.ethers.getContractFactory("RealEstate");
    const realEstate=await RealEsate.deploy();
    await realEstate.deployed();
    console.log("Contract deployed to:",realEstate.address);
}

const runMain=async()=>{
    try{
        await main();
        process.exit(0);
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}
runMain();