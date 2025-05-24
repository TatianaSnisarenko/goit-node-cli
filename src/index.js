import { program } from "commander";
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from "./contacts.js";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case "list": {
        const contacts = await listContacts();
        console.log("Contacts list:");
        console.table(contacts);
        break;
      }
      case "get": {
        const contact = await getContactById(id);
        if (contact) {
          console.log("Contact found:");
          console.log(contact);
        } else {
          console.warn(`Contact with id ${id} not found.`);
        }
        break;
      }
      case "add": {
        const contact = await addContact(name, email, phone);
        console.log("Contact added:");
        console.log(contact);
        break;
      }
      case "remove": {
        const contact = await removeContact(id);
        if (contact) {
          console.log("Contact removed:");
          console.log(contact);
        } else {
          console.warn(`Contact with id ${id} not found.`);
        }
        break;
      }
      default:
        console.warn("\x1B[31m Unknown action type!");
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

invokeAction(options);
