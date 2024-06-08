import { Router } from 'express';

import {
  getAllContactsController,
  getContactByIdController,
  createContactContactByIdController,
  updateContactByIdController,
  deleteContactByIdController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello world!',
  });
});

router.get('/contacts', ctrlWrapper(getAllContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts/', ctrlWrapper(createContactContactByIdController));

router.patch('/contacts/:contactId', ctrlWrapper(updateContactByIdController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactByIdController));

export default router;
