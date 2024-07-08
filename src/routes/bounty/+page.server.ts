import { DefaultProvider, bsv } from "scrypt-ts";
import { Root } from "../../contracts/root";
import { NeucronSigner } from "neucron-signer";

/** @type {import('./$types').Actions} */
const provider = new DefaultProvider({ network: bsv.Networks.mainnet });
const signer = new NeucronSigner(provider);

export const actions = {
  deploy: async ({ request }) => {
    const data = await request.formData();
    await signer.login("sales@timechainlabs.io", "string");

    
    await Root.loadArtifact();

        const square = BigInt(data.get('square'));
    const rootInstance = new Root(square);
    await rootInstance.connect(signer);
    
    const deployRootTx = await rootInstance.deploy(data.get('amount'));
    // const deployRootTx = {id:"Rohit"};
    console.log("Smart contract Root deployed: https://whatsonchain.com/tx/" + deployRootTx);

    return { success: true, tx: `https://whatsonchain.com/tx/" + ${deployRootTx}` };
  },

  unlock: async ({ request }) => {
    const data = await request.formData();
  
    await signer.login("sales@timechainlabs.io", "string");
    await Root.loadArtifact();

    const instance = new Root(data.get('square'));
    if (!instance) {
      await instance.connect(signer); 
    }

    // Unlock Root contract
    const rootCallTx = await instance.methods.unlock(rootValue);
    console.log("Root contract unlocked successfully: https://whatsonchain.com/tx/" + rootCallTx);

    return { success: true, tx: rootCallTx };
  }
};
