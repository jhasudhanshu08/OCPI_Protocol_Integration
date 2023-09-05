const express = require('express');
const router = express.Router();

const VersionController = require('../controllers/versionsController');
const CredentialController = require('../controllers/credentialController');

router.use("/versions", VersionController.versionsController);
router.use("/2.2/credential", CredentialController.credentialController);

module.exports=router;