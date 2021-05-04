import IPFS from 'ipfs/index.min.js'


const node = await IPFS.create({silent: true});


const stream = node.cat('QmPChd2hVbrJ6bfo3WBcTW4iZnpHm8TEzWkLHmLpXhF68A')
let data = ''

for await (const chunk of stream) {
  data += chunk.toString()
}

console.log(data)
