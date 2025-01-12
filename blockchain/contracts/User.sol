// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract User {
    struct Citizen {
        string name;
        string citizenshipId;
        bool hasVoted;
    }

    mapping(address => Citizen) public citizens;

    function registerCitizen(
        string memory _name,
        string memory _citizenshipId
    ) public {
        require(
            bytes(_citizenshipId).length > 0,
            "Citizenship ID cannot be empty"
        );
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(
            bytes(citizens[msg.sender].citizenshipId).length == 0,
            "Citizen already registered"
        );

        citizens[msg.sender] = Citizen({
            name: _name,
            citizenshipId: _citizenshipId,
            hasVoted: false
        });
    }

    function setVoted(address _user) public {
        require(
            bytes(citizens[_user].citizenshipId).length > 0,
            "Citizen not registered"
        );
        require(!citizens[_user].hasVoted, "Citizen has already voted");

        citizens[_user].hasVoted = true;
    }

    function hasVoted(address _user) public view returns (bool) {
        return citizens[_user].hasVoted;
    }

    function getCitizenDetails(
        address _user
    ) public view returns (string memory, string memory) {
        require(
            bytes(citizens[_user].citizenshipId).length > 0,
            "Citizen not registered"
        );
        return (citizens[_user].name, citizens[_user].citizenshipId);
    }
}
