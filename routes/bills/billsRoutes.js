const express = require("express")
const router = express.Router()
const billsController = require('../../controllers/bills/billsController')
const CheckAuth = require('../../auth/check-auth')

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

module.exports = router