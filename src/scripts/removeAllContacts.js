import { writeContactsToFile } from '../utils/fileOperations.js';

export const removeAllContacts = async () => {
  writeContactsToFile([]);
};

removeAllContacts();
console.log('All contacts have been removed.');
