// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract Game is ERC721, VRFConsumerBaseV2 {

    struct Character {
        uint256 energy;
        uint256 speed;
        uint256 strength;
        uint256 intelligence;
        uint256 agility;
        string name;
    }

        VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    uint64 private immutable i_subscriptionId;
    bytes32 private immutable i_keyHash;
    uint32 private immutable i_callbackGasLimit;
    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    uint32 private constant NUM_WORDS = 1;
 uint256 public requestId;
    mapping(uint256 => string) requestToCharacterName;
    mapping(uint256 => address) requestToSender;
    mapping(uint256 => uint256) requestToTokenId;

        event id(uint256 indexed requestId);
      Character[] public characters;


        constructor(
        address vrfCoordinatorV2,
        uint64 subscriptionId,
        bytes32 keyHash, // keyHash
        uint256 interval,
        uint256 entranceFee,
        uint32 callbackGasLimit
    ) VRFConsumerBaseV2(vrfCoordinatorV2) ERC721("MarioBros", "MAB") {
        i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
        i_keyHash = keyHash;
        i_subscriptionId = subscriptionId;
        i_callbackGasLimit = callbackGasLimit;
    }

 function requestNewRandomCharacter( 
         string memory name
) external {
       requestId = i_vrfCoordinator.requestRandomWords(
            i_keyHash,
            i_subscriptionId,
            REQUEST_CONFIRMATIONS,
            i_callbackGasLimit,
            NUM_WORDS
        );
          requestToCharacterName[requestId] = name;
        requestToSender[requestId] = msg.sender;
                emit id(requestId);

 }
        function fulfillRandomness(uint256, uint256 randomNumber)
        internal
        override
    {
        uint256 newId = characters.length;

           uint256 energy = (randomNumber % 101);
           uint256 speed = (randomNumber % 101);
           uint256 strength = (randomNumber % 101);
           uint256 intelligence = (randomNumber % 101);
           uint256 agility = (randomNumber % 101);

        characters.push(
            Character(
                 energy,
                 speed,
                 strength,
                 intelligence,
                 agility,
                requestToCharacterName[requestId]
            )
        );
        _safeMint(requestToSender[requestId], newId);
    }
}
