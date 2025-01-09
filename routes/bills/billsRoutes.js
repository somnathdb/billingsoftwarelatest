const express = require("express")
const router = express.Router()
const billsController = require('../../controllers/bills/billsController')
const CheckAuth = require('../../auth/check-auth')
const nodemailer = require('nodemailer');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
require('dotenv').config();

router.post('/upload', upload.single('file'), async (req, res) => {
    const { name, email, phone, subject, position, qualification } = req.body;
    const attachedFile = req.file;
  
    // Ensure that the file is provided
    if (!attachedFile) {
      return res.status(400).json({ message: 'File is required' });
    }
  
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 25,
      secure: false,
      auth: {
        user:'hrd@menon.in',
        pass: 'MmLgw@HR#2025',      // Replace with your email password
      },
    });
  
    // Set up the email options, including the file attachment
    const mailOptions = {
      from: 'hrd@menon.in',                          // Sender email
      to: 'hrd@menon.in',                // Recipient email
      subject: `Application for ${position} - ${name}`, // Subject line with dynamic data
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Position Applied: ${position}
        Qualification: ${qualification}
        Subject: ${subject}
      `,
      attachments: [
        {
          filename: attachedFile.originalname,  // Name of the uploaded file
          content: attachedFile.buffer,         // The file content (buffer from memory)
          encoding: 'base64',                   // Optional: specify encoding if needed
        },
      ],
    };
  
    // Send the email with the file attachment
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: 'Failed to send email', error });
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).json({ message: 'Application sent successfully' });
      }
    });
  });

router.post('/addBill', billsController.addBills)

router.post('/updateBillById', billsController.updateBillById)

router.post('/getReportsBills', billsController.getReportsBills)

router.get('/getAllBills', billsController.getAllBills)

router.get('/getAllDeleteBills', billsController.getAllDeleteBills)

router.get('/getPendingBills', billsController.getPendingBills)

router.get('/getGSTBills', billsController.getGSTBills)
router.get('/getNonGSTBills', billsController.getNonGSTBills)

router.get('/getCompletedBills', billsController.getCompletedBills)

router.get('/deleteBillById', billsController.deleteBillById)

router.get('/getPendingBillsCount', billsController.getPendingBillsCount)

router.get('/getCompletedBillsAmount', billsController.getCompletedBillsAmount)

router.get('/getPendingBillsAmount', billsController.getPendingBillsAmount)

router.get('/getAllBillsAmount', billsController.getAllBillsAmount)

router.get('/getBillById', billsController.getBillById)

router.get('/getAllBillsCount', billsController.getAllBillsCount)

router.get('/getCompletedBillsCount', billsController.getCompletedBillsCount)

router.post('/search', billsController.search)

router.get('/getAllBillsGroupBy', billsController.getAllBillsGroupBy)

router.get('/getLadgerBillById', billsController.getLadgerBillById)

router.get('/getMonthlyBillsData', billsController.getMonthlyBillsData)

// router.post('/upload', upload.single('file'), billsController.sendMail);


module.exports = router