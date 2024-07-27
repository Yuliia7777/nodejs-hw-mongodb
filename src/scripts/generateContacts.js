import { createFakeContact } from '../utils/createFakeContact.js';

import {
  // readContactsFromFile,
  // writeContactsToFile,
  readContactsFromFileAsync,
  writeContactsToFileAsync,
} from '../utils/fileOperations.js';

const generateContacts = async (number) => {
  const contacts = await readContactsFromFileAsync();
  const newContacts = Array.from({ length: number }, () => createFakeContact());
  const updatedContacts = contacts.concat(newContacts);
  await writeContactsToFileAsync(updatedContacts);
};

generateContacts(5);
