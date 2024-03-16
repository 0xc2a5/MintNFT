async function run() {
    const { create } = await import('ipfs-http-client');
    const ipfs = create();

    // we added three attributes, add as many as you want!
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "#e60012",
            attributes: [
                {
                    "trait_type": "Color",
                    "value": "Red"
                },
                {
                    "display_type": "date",
                    "trait_type": "Created",
                    "value": 1710559177
                },
                {
                    "trait_type": "Web3",
                    "value": "1000"
                }
            ],
            image: "https://ipfs.io/ipfs/QmVfXNQ2xRTUX96iod1k5bKtid8pHipZvS3Mv9TxnAFaqQ",
            description: "Red square #e60012"
        })
    };

    const result = await ipfs.add(metadata, { duplex: true });
    console.log(result);
    // {
    //   path: 'QmRQnd3deSgKXoq5L5tHxuuEY97WxPG6x6A4Q4qL7q1qJu',
    //   cid: CID(QmRQnd3deSgKXoq5L5tHxuuEY97WxPG6x6A4Q4qL7q1qJu),
    //   size: 297
    // }

    process.exit(0);
}

run();