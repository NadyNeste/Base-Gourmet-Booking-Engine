// SPDX-License-Identifier: MIT
pragma solidity 0.8.37;
interface IGourmetBookingEngine {
    function reserveTable(uint256 restaurantId, uint256 timeSlot) external payable;
    function cancelReservation(uint256 reservationId) external;
}
