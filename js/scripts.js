//Business logic for AddressBook
function AddressBook()
{
    this.contacts = [];
    this.currentId = 0;
}

AddressBook.prototype.AddContact = function(contact) {
    contact.id = this.assignId();
    this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }
  
  AddressBook.prototype.findContact = function(id) {
    for (var i=0; i< this.contacts.length; i++) {
      if (this.contacts[i]) {
        if (this.contacts[i].id == id) {
          return this.contacts[i];
        }
      }
    };
    return false;
  }
  
  AddressBook.prototype.deleteContact = function(id) {
    for (var i=0; i< this.contacts.length; i++) {
      if (this.contacts[i]) {
        if (this.contacts[i].id == id) {
          delete this.contacts[i];
          return true;
        }
      }
    };
    return false;
  }
  
  // Business Logic for Contacts ---------
  function Contact(firstName, lastName, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
  }
  
  Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

//Interface logic
function displayContactDetails(addressBookToDisplay) {
    var contactsList = $("#contacts-list");
    var htmlForContactInfo = "";
    addressBookToDisplay.contacts.forEach(function(contact) {
        htmlForContactInfo += `<li id='${contact.id}'>${contact.fullName()}</li>`;
    });
    contactsList.html(htmlForContactInfo);
}

var addressBook = new AddressBook();

$(document).ready(function() {

    $("form#create-contact-form").submit(function(event) {
        event.preventDefault();
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var inputtedPhoneNumber = $("input#new-phone-number").val();
        var inputtedEmail = $("input#new-email").val();
        var newContact = new Contact (inputtedFirstName, inputtedLastName,inputtedPhoneNumber, inputtedEmail);
        addressBook.AddContact(newContact);
        displayContactDetails(addressBook);
        
    })

})