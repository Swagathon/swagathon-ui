// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

/// @title DataStorage - A contract for storing data mapped to a UUID
/// @notice This contract allows for the storage of data with access control
contract DataStorage is AccessControl {
    // Role identifier for the data setter role
    bytes32 public constant DATA_SETTER_ROLE = keccak256("DATA_SETTER_ROLE");

    /// @notice Structure to store data associated with a UUID
    struct Data {
        uint256 id;
        bool swag;
        uint256 num1;
        uint256 num2;
        uint256 num3;
        uint256 num4;
        uint256 num5;
        uint256 overallScore;
    }

    // Mapping from UUID to Data
    mapping(bytes32 => Data) private dataMapping;
    mapping(bytes32 => string) private nameMapping;
    mapping(bytes32 => string) private imagedCidMapping;

    /// @notice Event emitted when data is set
    /// @param uuid The UUID associated with the data
    /// @param data The data that was set
    event DataSet(bytes32 indexed uuid, Data data);

    /// @dev Initializes the contract by setting the deployer as the default admin
    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    /// @notice Sets all data for a given UUID
    /// @param uuid The UUID to associate with the data
    /// @param id The id field of the data
    /// @param name The name field of the data
    /// @param imagedCid The imagedCid field of the data
    /// @param swag The swag field of the data
    /// @param num1 The num1 field of the data
    /// @param num2 The num2 field of the data
    /// @param num3 The num3 field of the data
    /// @param num4 The num4 field of the data
    /// @param num5 The num5 field of the data
    /// @param overallScore The overallScore field of the data
    function setAllData(
        bytes32 uuid,
        uint256 id,
        string memory name,
        string memory imagedCid,
        bool swag,
        uint256 num1,
        uint256 num2,
        uint256 num3,
        uint256 num4,
        uint256 num5,
        uint256 overallScore
    ) external onlyRole(DATA_SETTER_ROLE) {
        dataMapping[uuid] = Data({
            id: id,
            swag: swag,
            num1: num1,
            num2: num2,
            num3: num3,
            num4: num4,
            num5: num5,
            overallScore: overallScore
        });

        nameMapping[uuid] = name;
        imagedCidMapping[uuid] = imagedCid;

        emit DataSet(uuid, dataMapping[uuid]);
    }

    /// @notice Sets the name for a given UUID
    /// @param uuid The UUID to associate with the name
    /// @param name The name field of the data
    function setName(bytes32 uuid, string memory name) external onlyRole(DATA_SETTER_ROLE) {
        nameMapping[uuid] = name;
    }

    /// @notice Sets the imagedCid for a given UUID
    /// @param uuid The UUID to associate with the imagedCid
    /// @param imagedCid The imagedCid field of the data
    function setImagedCid(bytes32 uuid, string memory imagedCid) external onlyRole(DATA_SETTER_ROLE) {
        imagedCidMapping[uuid] = imagedCid;
    }

    /// @notice Sets the id for a given UUID
    /// @param uuid The UUID to associate with the id
    /// @param id The id field of the data
    function setId(bytes32 uuid, uint256 id) external onlyRole(DATA_SETTER_ROLE) {
        dataMapping[uuid].id = id;
    }

    /// @notice Sets the swag for a given UUID
    /// @param uuid The UUID to associate with the swag
    /// @param swag The swag field of the data
    function setSwag(bytes32 uuid, bool swag) external onlyRole(DATA_SETTER_ROLE) {
        dataMapping[uuid].swag = swag;
    }

    /// @notice Sets the num1 for a given UUID
    /// @param uuid The UUID to associate with the num1
    /// @param num1 The num1 field of the data
    function setNum1(bytes32 uuid, uint256 num1) external onlyRole(DATA_SETTER_ROLE) {
        dataMapping[uuid].num1 = num1;
    }

    /// @notice Sets the num2 for a given UUID
    /// @param uuid The UUID to associate with the num2
    /// @param num2 The num2 field of the data
    function setNum2(bytes32 uuid, uint256 num2) external onlyRole(DATA_SETTER_ROLE) {
        dataMapping[uuid].num2 = num2;
    }

    /// @notice Sets the num3 for a given UUID
    /// @param uuid The UUID to associate with the num3
    /// @param num3 The num3 field of the data
    function setNum3(bytes32 uuid, uint256 num3) external onlyRole(DATA_SETTER_ROLE) {
        dataMapping[uuid].num3 = num3;
    }

    /// @notice Sets the num4 for a given UUID
    /// @param uuid The UUID to associate with the num4
    /// @param num4 The num4 field of the data
    function setNum4(bytes32 uuid, uint256 num4) external onlyRole(DATA_SETTER_ROLE) {
        dataMapping[uuid].num4 = num4;
    }

    /// @notice Sets the num5 for a given UUID
    /// @param uuid The UUID to associate with the num5
    /// @param num5 The num5 field of the data
    function setNum5(bytes32 uuid, uint256 num5) external onlyRole(DATA_SETTER_ROLE) {
        dataMapping[uuid].num5 = num5;
    }

    /// @notice Sets the overallScore for a given UUID
    /// @param uuid The UUID to associate with the overallScore
    /// @param overallScore The overallScore field of the data
    function setOverallScore(bytes32 uuid, uint256 overallScore) external onlyRole(DATA_SETTER_ROLE) {
        dataMapping[uuid].overallScore = overallScore;
    }

    /// @notice Retrieves data for a given UUID
    /// @param uuid The UUID to retrieve the data for
    /// @return The data associated with the given UUID
    function getData(bytes32 uuid) external view returns (Data memory, string memory, string memory) {
        return (dataMapping[uuid], nameMapping[uuid], imagedCidMapping[uuid]);
    }

    /// @notice Grants the DATA_SETTER_ROLE to an account
    /// @param account The account to grant the role to
    function grantDataSetterRole(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(DATA_SETTER_ROLE, account);
    }

    /// @notice Revokes the DATA_SETTER_ROLE from an account
    /// @param account The account to revoke the role from
    function revokeDataSetterRole(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(DATA_SETTER_ROLE, account);
    }
}
