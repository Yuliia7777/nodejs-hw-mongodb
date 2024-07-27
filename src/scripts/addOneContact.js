import { createFakeContact } from '../utils/createFakeContact.js';
import {
  // readContactsFromFile,
  // writeContactsToFile,
  readContactsFromFileAsync,
  writeContactsToFileAsync,
} from '../utils/fileOperations.js';

export const addOneContact = async () => {
  // const contacts = await readContactsFromFile();
  const contacts = await readContactsFromFileAsync();
  const newContacts = Array.from({ length: 1 }, () => createFakeContact());
  const updatedContacts = contacts.concat(newContacts);
  await writeContactsToFileAsync(updatedContacts);
};

addOneContact();
