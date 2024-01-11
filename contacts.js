const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join("db", "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id);
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
