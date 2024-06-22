import { Router } from 'express';

import {
  getAllContactsController,
  getContactByIdController,
  createContactContactByIdController,
  updateContactByIdController,
  deleteContactByIdController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middleware/validateBody.js';
import { createContactsSchema } from '../validation/contacts.js';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello world!',
  });
});

router.get('/contacts', ctrlWrapper(getAllContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactByIdController));

router.post('/contacts/', validateBody(createContactsSchema), ctrlWrapper(createContactContactByIdController));

router.patch('/contacts/:contactId', validateBody(createContactsSchema), ctrlWrapper(updateContactByIdController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactByIdController));

export default router;
