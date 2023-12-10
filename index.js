import * as contactService from "./contacts.js"
import yargs from "yargs";

const invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allListContacts = await contactService.listContacts();
      return console.log(allListContacts);

    case 'get':
          const oneContact = await contactService.getContactById(id);
          return console.log(oneContact);

    case 'add':
          const newContact = await contactService.addContact(name, email, phone );
          return console.log(newContact);

    case 'remove':
        const removeContact = await contactService.removeContact(id);
            return console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

const {argv} = yargs(process.argv.slice(2));
invokeAction(argv);