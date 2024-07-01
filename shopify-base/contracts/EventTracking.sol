pragma solidity ^0.8.0;

contract EventTracking {
    enum EventType { AdViewed, PartyAttended, AffiliateLinkClaimed }
    
    event EventLogged(address indexed user, EventType eventType);

   function logAdViewed() public {
       emit EventLogged(msg.sender, EventType.AdViewed);
    } 

    function logPartyAttended() public {
        emit EventLogged(msg.sender, EventType.PartyAttended);
    }

    function logAffiliateLinkClaimed() public {
       emit EventLogged(msg.sender, EventType.AffiliateLinkClaimed);
    } 
}
