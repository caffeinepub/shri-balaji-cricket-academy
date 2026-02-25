import Map "mo:core/Map";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Int "mo:core/Int";

actor {
  type ContactSubmission = {
    childsName : Text;
    parentsName : Text;
    phoneNumber : Text;
    childsAge : Nat;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compareByTimestamp(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  let submissionsMap = Map.empty<Text, ContactSubmission>();

  public shared ({ caller }) func submitContactForm(childsName : Text, parentsName : Text, phoneNumber : Text, childsAge : Nat, message : Text) : async () {
    let id = childsName.concat(parentsName);
    switch (submissionsMap.get(id)) {
      case (?_) {
        Runtime.trap("Contact already submitted for this child/parent combination");
      };
      case (null) {
        let newSubmission : ContactSubmission = {
          childsName;
          parentsName;
          phoneNumber;
          childsAge;
          message;
          timestamp = Time.now();
        };
        submissionsMap.add(id, newSubmission);
      };
    };
  };

  public query ({ caller }) func getAllSubmissionsSortedByTimestamp() : async [ContactSubmission] {
    submissionsMap.values().toArray().sort(ContactSubmission.compareByTimestamp);
  };
};
