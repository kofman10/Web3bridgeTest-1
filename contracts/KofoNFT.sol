// Contract based on https://docs.openzeppelin.com/contracts/4.x/erc721
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract KofoNFT is ERC721URIStorage {

string public tokenURI = 'ipfs://QmUzrJMMgtn7isRLv8GXZ4gBHLjVyhrVkd7KvYwYYHiKvh';

   constructor() ERC721("KofoNFT", "KFT") {
      _mint(msg.sender, 1);
       _setTokenURI(1, tokenURI);
   }

}