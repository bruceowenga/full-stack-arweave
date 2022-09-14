import { warp, configureWallet } from './configureWarpServer.js';
import { transactionId } from '../transactionid.js';
import { v4 as uuid } from 'uuid';

async function createPost() {
  let wallet = await configureWallet();
  const contract = warp.contract(transactionId).connect(wallet);
  await contract.writeInteraction({
    function: 'createPost',
    post: {
      title: 'My First Post',
      content:
        "This is my first post. I have to seem excited because I need filler text to ake the content body long enough to look like a post. Anyway, hope you won't get mad after reading all this. You can actually stop reading now.",
      id: uuid(),
    },
  });
}

createPost();
