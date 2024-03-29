const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");
import { join } from "path";

const contactsPath = join("db", "contacts.json");

const getContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (id) => {
  const contacts = await getContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

const removeContact = async (id) => {
  const contacts = await getContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

const addContact = async (data) => {
  const contacts = await getContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

module.exports = {
  getContacts,
  getContactById,
  removeContact,
  addContact,
};
