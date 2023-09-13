// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Election {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    Candidate[] public candidates;
    address public owner;
    string public electionName;
    uint public endTime;

    mapping(address => bool) public voters;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    modifier onlyVoter() {
        require(voters[msg.sender], "Only registered voters can vote");
        _;
    }

    constructor(string memory _name, uint _endTime, address _owner) {
        owner = _owner;
        electionName = _name;
        endTime = _endTime;
    }

    function addCandidate(string memory _name) public onlyOwner {
        uint id = candidates.length + 1;
        candidates.push(Candidate(id, _name, 0));
    }

    function registerVoter(address _voter) public onlyOwner {
        voters[_voter] = true;
    }

    function vote(uint _candidateId) public onlyVoter {
        require(block.timestamp < endTime, "Voting has ended");
        candidates[_candidateId - 1].voteCount++;
    }

    function getCandidatesCount() public view returns (uint) {
        return candidates.length;
    }
}