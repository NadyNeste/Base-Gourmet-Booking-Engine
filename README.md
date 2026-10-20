# Base Gourmet Booking Engine

A decentralized restaurant reservation protocol deployed on Base. This engine eliminates intermediaries by allowing users to secure dining slots via on-chain deposits, ensuring absolute transparency for both diners and restaurant owners.

## System Mechanics
* **Sybill-Resistant Booking:** Requires a base ETH deposit to secure a timeslot, completely eliminating spam reservations.
* **Double-Booking Prevention:** Strict mapping checks guarantee that a specific timeslot for a specific venue can only be minted once.
* **Automated Refunds:** Features a built-in cancellation window. If a user cancels within the allowed timeframe, the smart contract automatically routes the exact deposit back to the caller.

## Integration
Designed to be easily consumed by Next.js/React frontends via the exposed `IGourmetBookingEngine` interface.
