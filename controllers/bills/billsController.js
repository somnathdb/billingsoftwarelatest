const billModel = require('../../models/bills/billsModel')
const jwt = require("jsonwebtoken")
const keys = require('../../config/keys').keys


exports.addBills = async (req, res, next) => {
    try {
        const body = req.body;
        console.log("09",body)
        const bCount = await billModel.countDocuments({});
        const currentDate = new Date();
        const month = currentDate. toLocaleString('default', { month: 'long' });
        const pluseCount = bCount+1;
        // const token = req.headers.authorization.split(" ")[1];
        // const decoded = jwt.verify(token, keys)
        const squarefeet1 = (body.width1 || 0) * (body.height1 || 0);
        const squarefeet2 = (body.width2 || 0) * (body.height2 || 0);
        const squarefeet3 = (body.width3 || 0) * (body.height3 || 0);
        const squarefeet4 = (body.width4 || 0) * (body.height4 || 0);
        const squarefeet5 = (body.width5 || 0) * (body.height5 || 0);
        const squarefeet6 = (body.width6 || 0) * (body.height6 || 0);
        const squarefeet7 = (body.width7 || 0) * (body.height7 || 0);
        const squarefeet8 = (body.width8 || 0) * (body.height8 || 0);
        const squarefeet9 = (body.width9 || 0) * (body.height9 || 0);
        const squarefeet10 = (body.width10 || 0) * (body.height10 || 0);
        const t1 = (squarefeet1 || 0) * (body.rate1 || 0);
        const t2 = (squarefeet2 || 0) * (body.rate2 || 0);
        const t3 = (squarefeet3 || 0) * (body.rate3 || 0);
        const t4 = (squarefeet4 || 0) * (body.rate4 || 0);
        const t5 = (squarefeet5 || 0) * (body.rate5 || 0);
        const t6 = (squarefeet6 || 0) * (body.rate6 || 0);
        const t7 = (squarefeet7 || 0) * (body.rate7 || 0);
        const t8 = (squarefeet8 || 0) * (body.rate8 || 0);
        const t9 = (squarefeet9 || 0) * (body.rate9 || 0);
        const t10 = (squarefeet10 || 0) * (body.rate10 || 0);
        if(body.withGST === "Yes"){
            var newBill = new billModel({
                // userId: decoded.id,
                // ...req.body
                invoiceNumber:("VK"+"_"+month+"_"+pluseCount),
                HSN_SAC:body.HSN_SAC,
                partyName: body.partyName,
                withGST:body.withGST,
                partyMobileNumber: body.partyMobileNumber,
                advance:body.advance,
                parti1: body.parti1,
                parti2: body.parti2,
                parti3: body.parti3,
                parti4: body.parti4,
                parti5: body.parti5,
                parti6: body.parti6,
                parti7: body.parti7,
                parti8: body.parti8,
                parti9: body.parti9,
                parti10: body.parti10,
                sq1: squarefeet1,
                sq2: squarefeet2,
                sq3: squarefeet3,
                sq4: squarefeet4,
                sq5: squarefeet5,
                sq6: squarefeet6,
                sq7: squarefeet7,
                sq8: squarefeet8,
                sq9: squarefeet9,
                sq10: squarefeet10,
                rate1: body.rate1,
                rate2: body.rate2,
                rate3: body.rate3,
                rate4: body.rate4,
                rate5: body.rate5,
                rate6: body.rate6,
                rate7: body.rate7,
                rate8: body.rate8,
                rate9: body.rate9,
                rate10: body.rate10,
                Total1: t1,
                Total2: t2,
                Total3: t3,
                Total4: t4,
                Total5: t5,
                Total6: t6,
                Total7: t7,
                Total8: t8,
                Total9: t9,
                Total10: t10,
                width1: body.width1,
                width2: body.width2,
                width3: body.width3,
                width4: body.width4,
                width5: body.width5,
                width6: body.width6,
                width7: body.width7,
                width8: body.width8,
                width9: body.width9,
                width10: body.width10,
                height1: body.height1,
                height2: body.height2,
                height3: body.height3,
                height4: body.height4,
                height5: body.height5,
                height6: body.height6,
                height7: body.height7,
                height8: body.height8,
                height9: body.height9,
                height10: body.height10,
                GSTNo:body.GSTNo,
                partyAddress:body.partyAddress
            })
            let saveData = await newBill.save()
            if (saveData) {
                const GSTAmount = (
                    ((saveData.Total1 || 0) +
                    (saveData.Total2 || 0) +
                    (saveData.Total3 || 0) +
                    (saveData.Total4 || 0) +
                    (saveData.Total5 || 0) +
                    (saveData.Total6 || 0) +
                    (saveData.Total7 || 0) +
                    (saveData.Total8 || 0) +
                    (saveData.Total9 || 0) +
                    (saveData.Total10 || 0))
                    - saveData.advance
                ) * 1.18;
                console.log("82",GSTAmount)
                let updateTotal = await billModel.findOneAndUpdate({
                    _id: saveData._id
                }, {
                    $set: {
                        Total11: GSTAmount,
                        GSTAmount:GSTAmount-(
                            ((saveData.Total1 || 0) +
                            (saveData.Total2 || 0) +
                            (saveData.Total3 || 0) +
                            (saveData.Total4 || 0) +
                            (saveData.Total5 || 0) +
                            (saveData.Total6 || 0) +
                            (saveData.Total7 || 0) +
                            (saveData.Total8 || 0) +
                            (saveData.Total9 || 0) +
                            (saveData.Total10 || 0))
                        ) 
                    }
                })
                if (updateTotal) {
                    res.status(200).json({
                        title: "success",
                        message: "Your bill Successfully Added",
                        status: true
                    })
                }
            }

        }else{
            var newBill = new billModel({
                // userId: decoded.id,
                // ...req.body
                HSN_SAC:body.HSN_SAC,
                invoiceNumber:("VK"+"_"+month+"_"+pluseCount),
                partyName: body.partyName,
                withGST:body.withGST,
                advance:body.advance,
                partyMobileNumber: body.partyMobileNumber,
                parti1: body.parti1,
                parti2: body.parti2,
                parti3: body.parti3,
                parti4: body.parti4,
                parti5: body.parti5,
                parti6: body.parti6,
                parti7: body.parti7,
                parti8: body.parti8,
                parti9: body.parti9,
                parti10: body.parti10,
                sq1: squarefeet1,
                sq2: squarefeet2,
                sq3: squarefeet3,
                sq4: squarefeet4,
                sq5: squarefeet5,
                sq6: squarefeet6,
                sq7: squarefeet7,
                sq8: squarefeet8,
                sq9: squarefeet9,
                sq10: squarefeet10,
                rate1: body.rate1,
                rate2: body.rate2,
                rate3: body.rate3,
                rate4: body.rate4,
                rate5: body.rate5,
                rate6: body.rate6,
                rate7: body.rate7,
                rate8: body.rate8,
                rate9: body.rate9,
                rate10: body.rate10,
                Total1: t1,
                Total2: t2,
                Total3: t3,
                Total4: t4,
                Total5: t5,
                Total6: t6,
                Total7: t7,
                Total8: t8,
                Total9: t9,
                Total10: t10,
                width1: body.width1,
                width2: body.width2,
                width3: body.width3,
                width4: body.width4,
                width5: body.width5,
                width6: body.width6,
                width7: body.width7,
                width8: body.width8,
                width9: body.width9,
                width10: body.width10,
                height1: body.height1,
                height2: body.height2,
                height3: body.height3,
                height4: body.height4,
                height5: body.height5,
                height6: body.height6,
                height7: body.height7,
                height8: body.height8,
                height9: body.height9,
                height10: body.height10,
                GSTNo:body.GSTNo,
                partyAddress:body.partyAddress
            })
            let saveData = await newBill.save()
            if (saveData) {
                let updateTotal = await billModel.findOneAndUpdate({
                    _id: saveData._id
                }, {
                    $set: {
                        Total11: (
                            ((saveData.Total1 || 0) +
                            (saveData.Total2 || 0) +
                            (saveData.Total3 || 0) +
                            (saveData.Total4 || 0) +
                            (saveData.Total5 || 0) +
                            (saveData.Total6 || 0) +
                            (saveData.Total7 || 0) +
                            (saveData.Total8 || 0) +
                            (saveData.Total9 || 0) +
                            (saveData.Total10 || 0))
                            - saveData.advance || 0
                        )
                    }
                })
                if (updateTotal) {
                    res.status(200).json({
                        title: "success",
                        message: "Your bill Successfully Added",
                        status: true
                    })
                }
            }
        }
      
    } catch (err) {
        res.status(500).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}

exports.getAllBills = async (req, res, next) => {
    try {
        let data = await billModel.find({active:true}).sort({_id:-1})
        if (data) {
            res.status(200).json({
                title: "success",
                message: "All Bills Successfully Fetched",
                status: true,
                data: data
            })
        }
    } catch (err) {
        res.status(200).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}

exports.deleteBillById = async (req, res, next) => {
    try {
        const body = req.query
        let data = await billModel.findOneAndUpdate({
            _id: body.id
        },{$set:{
            active:false
        }})
        if (data) {
            res.status(200).json({
                title: "success",
                message: "Data Successfully Deleted",
                status: true,
                data: data
            })
        }
    } catch (err) {
        res.status(200).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}

exports.getAllDeleteBills = async (req, res, next) => {
    try {
        let data = await billModel.find({active:false}).sort({_id:-1})
        if (data) {
            res.status(200).json({
                title: "success",
                message: "All Bills Successfully Fetched",
                status: true,
                data: data
            })
        }
    } catch (err) {
        res.status(200).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}

exports.getBillById = async (req, res, next) => {
    try {
        const body = req.query
        let data = await billModel.findOne({
            _id: body.id
        })
        if (data) {
            res.status(200).json({
                title: "success",
                message: "Data Successfully Fetched",
                status: true,
                data: data
            })
        }
    } catch (err) {
        res.status(200).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}


exports.updateBillById = async (req, res, next) => {
    try {
        const body = req.body;
        console.log("body",body)
        let PreviousBillAmount = await billModel.findOne({
            _id: body._id
        })
        const TotalAdvance = (Number(PreviousBillAmount.advance) || 0) + (Number(body.advance) || 0);
        console.log("258",PreviousBillAmount)
        const squarefeet1 = (body.width1 || 0) * (body.height1 || 0);
        const squarefeet2 = (body.width2 || 0) * (body.height2 || 0);
        const squarefeet3 = (body.width3 || 0) * (body.height3 || 0);
        const squarefeet4 = (body.width4 || 0) * (body.height4 || 0);
        const squarefeet5 = (body.width5 || 0) * (body.height5 || 0);
        const squarefeet6 = (body.width6 || 0) * (body.height6 || 0);
        const squarefeet7 = (body.width7 || 0) * (body.height7 || 0);
        const squarefeet8 = (body.width8 || 0) * (body.height8 || 0);
        const squarefeet9 = (body.width9 || 0) * (body.height9 || 0);
        const squarefeet10 = (body.width10 || 0) * (body.height10 || 0);
        const t1 = (squarefeet1 || 0) * (body.rate1 || 0);
        const t2 = (squarefeet2 || 0) * (body.rate2 || 0);
        const t3 = (squarefeet3 || 0) * (body.rate3 || 0);
        const t4 = (squarefeet4 || 0) * (body.rate4 || 0);
        const t5 = (squarefeet5 || 0) * (body.rate5 || 0);
        const t6 = (squarefeet6 || 0) * (body.rate6 || 0);
        const t7 = (squarefeet7 || 0) * (body.rate7 || 0);
        const t8 = (squarefeet8 || 0) * (body.rate8 || 0);
        const t9 = (squarefeet9 || 0) * (body.rate9 || 0);
        const t10 = (squarefeet10 || 0) * (body.rate10 || 0);
       if(body.withGST === "Yes"){
        let updateTotal = await billModel.findOneAndUpdate({
            _id: body._id
        }, {
            $set: {
                HSN_SAC:body.HSN_SAC,
                partyName: body.partyName,
                billStatus:body.billStatus,
                withGST:body.withGST,
                partyMobileNumber: body.partyMobileNumber,
                parti1: body.parti1,
                parti2: body.parti2,
                parti3: body.parti3,
                parti4: body.parti4,
                parti5: body.parti5,
                parti6: body.parti6,
                parti7: body.parti7,
                parti8: body.parti8,
                parti9: body.parti9,
                parti10: body.parti10,
                sq1: squarefeet1,
                sq2: squarefeet2,
                sq3: squarefeet3,
                sq4: squarefeet4,
                sq5: squarefeet5,
                sq6: squarefeet6,
                sq7: squarefeet7,
                sq8: squarefeet8,
                sq9: squarefeet9,
                sq10: squarefeet10,
                rate1: body.rate1,
                rate2: body.rate2,
                rate3: body.rate3,
                rate4: body.rate4,
                rate5: body.rate5,
                rate6: body.rate6,
                rate7: body.rate7,
                rate8: body.rate8,
                rate9: body.rate9,
                rate10: body.rate10,
                Total1: t1,
                Total2: t2,
                Total3: t3,
                Total4: t4,
                Total5: t5,
                Total6: t6,
                Total7: t7,
                Total8: t8,
                Total9: t9,
                Total10: t10,
                width1: body.width1,
                width2: body.width2,
                width3: body.width3,
                width4: body.width4,
                width5: body.width5,
                width6: body.width6,
                width7: body.width7,
                width8: body.width8,
                width9: body.width9,
                width10: body.width10,
                height1: body.height1,
                height2: body.height2,
                height3: body.height3,
                height4: body.height4,
                height5: body.height5,
                height6: body.height6,
                height7: body.height7,
                height8: body.height8,
                height9: body.height9,
                height10: body.height10,
                GSTNo:body.GSTNo,
                partyAddress:body.partyAddress
            }
        })
        if (updateTotal) {
            const GSTAmount = ((t1 || 0) +
            (t2 || 0) +
            (t3 || 0) +
            (t4 || 0) +
            (t5 || 0) +
            (t6 || 0) +
            (t7 || 0) +
            (t8 || 0) +
            (t9 || 0) +
            (t10 || 0)) * 1.18;
            const updateT11 = await billModel.findOneAndUpdate({
                _id: updateTotal._id
            }, {
                $set: {
                    Total11:GSTAmount,
                    GSTAmount:GSTAmount-((t1 || 0) +
                    (t2 || 0) +
                    (t3 || 0) +
                    (t4 || 0) +
                    (t5 || 0) +
                    (t6 || 0) +
                    (t7 || 0) +
                    (t8 || 0) +
                    (t9 || 0) +
                    (t10 || 0))
                }
            })
            if (updateT11) {
                res.status(200).json({
                    title: "success",
                    message: "Your bill Successfully Added",
                    status: true,
                    data:updateT11
                })
            }
        }

       }else{
        let updateTotal = await billModel.findOneAndUpdate({
            _id: body._id
        }, {
            $set: {
                partyName: body.partyName,
                billStatus:body.billStatus,
                withGST:body.withGST,
                advance:TotalAdvance,
                partyMobileNumber: body.partyMobileNumber,
                parti1: body.parti1,
                parti2: body.parti2,
                parti3: body.parti3,
                parti4: body.parti4,
                parti5: body.parti5,
                parti6: body.parti6,
                parti7: body.parti7,
                parti8: body.parti8,
                parti9: body.parti9,
                parti10: body.parti10,
                sq1: squarefeet1,
                sq2: squarefeet2,
                sq3: squarefeet3,
                sq4: squarefeet4,
                sq5: squarefeet5,
                sq6: squarefeet6,
                sq7: squarefeet7,
                sq8: squarefeet8,
                sq9: squarefeet9,
                sq10: squarefeet10,
                rate1: body.rate1,
                rate2: body.rate2,
                rate3: body.rate3,
                rate4: body.rate4,
                rate5: body.rate5,
                rate6: body.rate6,
                rate7: body.rate7,
                rate8: body.rate8,
                rate9: body.rate9,
                rate10: body.rate10,
                Total1: t1,
                Total2: t2,
                Total3: t3,
                Total4: t4,
                Total5: t5,
                Total6: t6,
                Total7: t7,
                Total8: t8,
                Total9: t9,
                Total10: t10,
                width1: body.width1,
                width2: body.width2,
                width3: body.width3,
                width4: body.width4,
                width5: body.width5,
                width6: body.width6,
                width7: body.width7,
                width8: body.width8,
                width9: body.width9,
                width10: body.width10,
                height1: body.height1,
                height2: body.height2,
                height3: body.height3,
                height4: body.height4,
                height5: body.height5,
                height6: body.height6,
                height7: body.height7,
                height8: body.height8,
                height9: body.height9,
                height10: body.height10,
                GSTNo:body.GSTNo,
                partyAddress:body.partyAddress
            }
        })
        if (updateTotal) {
            const updateT11 = await billModel.findOneAndUpdate({
                _id: updateTotal._id
            }, {
                $set: {
                    Total11: (t1 || 0) +
                        (t2 || 0) +
                        (t3 || 0) +
                        (t4 || 0) +
                        (t5 || 0) +
                        (t6 || 0) +
                        (t7 || 0) +
                        (t8 || 0) +
                        (t9 || 0) +
                        (t10 || 0)
                }
            })
            if (updateT11) {
                res.status(200).json({
                    title: "success",
                    message: "Your bill Successfully Added",
                    status: true,
                    data:updateT11
                })
            }
        }
       }
    } catch (err) {
        // res.status(500).json({
        //     title: "error",
        //     message: "Internal Server Error",
        //     status: false,
        //     error: err
        // })
        console.log("273",err)
    }
}

exports.getPendingBills = async (req, res, next) => {
    try {
        let data = await billModel.find({billStatus:"Pending"}).sort({_id:-1})
        if (data) {
            res.status(200).json({
                title: "success",
                message: "All Bills Successfully Fetched",
                status: true,
                data: data
            })
        }
    } catch (err) {
        res.status(200).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}

exports.getGSTBills = async (req, res, next) => {
    try {
        let data = await billModel.find({withGST:"Yes"}).sort({_id:-1})
        if (data) {
            res.status(200).json({
                title: "success",
                message: "All Bills Successfully Fetched",
                status: true,
                data: data
            })
        }
    } catch (err) {
        res.status(200).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}

exports.getNonGSTBills = async (req, res, next) => {
    try {
        let data = await billModel.find({withGST:"No"}).sort({_id:-1})
        if (data) {
            res.status(200).json({
                title: "success",
                message: "All Bills Successfully Fetched",
                status: true,
                data: data
            })
        }
    } catch (err) {
        res.status(200).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}



exports.getCompletedBills = async (req, res, next) => {
    try {
        let data = await billModel.find({billStatus:"Completed"}).sort({_id:-1})
        if (data) {
            res.status(200).json({
                title: "success",
                message: "All Bills Successfully Fetched",
                status: true,
                data: data
            })
        }
    } catch (err) {
        res.status(200).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}

exports.getReportsBills = async (req, res, next) => {
    try {
        const { startDate, endDate,partyName } = req.body;
        console.log("486",req.body)
        if(partyName === ""){
            // Parse the start and end dates
            const start = new Date(startDate);
            const end = new Date(endDate);

            // Adjust the end date to include all bills on the end date
            end.setDate(end.getDate() + 1);

            // Query the database for bills between the start and end dates
            let data = await billModel.find({
                // billStatus: "Completed",
                createdAt: { $gte: start, $lt: end }
            }).sort({_id:-1})

            if (data) {
                console.log("563",data)
                res.status(200).json({
                    title: "success",
                    message: "Completed Bills Successfully Fetched",
                    status: true,
                    data: data
                });
            }
        }else{
            var search = req.body.partyName;
            console.log("573",search)
            const start = new Date(startDate);
            const end = new Date(endDate);
            end.setDate(end.getDate() + 1);
            if (search == "" || search == null) {
                search_query = {
                    "partyName": {
                        $ne: null
                    }
                };
            } else {
                search_query = {
                    $or: [{
                        "partyName": {
                            $regex: new RegExp(".*" + search + ".*", "i")
                        }
                    }],
                    createdAt: { $gte: start, $lt: end }
                };
                
                let data = await billModel.find(search_query).sort({_id: -1});
                
                if (data) {
                    console.log("563", data);
                    res.status(200).json({
                        title: "success",
                        message: "Completed Bills Successfully Fetched",
                        status: true,
                        data: data
                    });
                }
            }   
        }
    } catch (err) {
        // res.status(500).json({
        //     title: "error",
        //     message: "Internal Server Error",
        //     status: false,
        //     error: err.message
        // });
        console.log(err)
    }
};


exports.getPendingBillsCount = async (req, res, next) => {
    try {
        let data = await billModel.find({billStatus:"Pending",active:true});
        if (data) {
            res.status(200).json({
                title: "success",
                message: "All Bills Successfully Fetched",
                status: true,
                data: data.length
            });
        }
    } catch (err) {
        res.status(500).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        });
    }
};

exports.getCompletedBillsAmount = async (req, res, next) => {
    try {
        let data = await billModel.find({ billStatus:"Completed",active:true });

        if (data) {
            // Calculate the sum of the Total11 field
            let totalSum = data.reduce((acc, bill) => acc + bill.Total11, 0);

            res.status(200).json({
                title: "success",
                message: "Completed Bills Successfully Fetched",
                status: true,
                data: totalSum
            });
        }
    } catch (err) {
        res.status(500).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        });
    }
};

exports.getAllBillsAmount = async (req, res, next) => {
    try {
        let data = await billModel.find({active:true});

        if (data) {
            // Calculate the sum of the Total11 field
            let totalSum = data.reduce((acc, bill) => acc + bill.Total11, 0);

            res.status(200).json({
                title: "success",
                message: "All Bills Successfully Fetched",
                status: true,
                data: totalSum
            });
        }
    } catch (err) {
        res.status(500).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        });
    }
};

exports.getPendingBillsAmount = async (req, res, next) => {
    try {
        let data = await billModel.find({ billStatus: "Pending",active:true });

        if (data) {
            // Calculate the sum of the Total11 field
            let totalSum = data.reduce((acc, bill) => acc + bill.Total11, 0);

            res.status(200).json({
                title: "success",
                message: "Pending Bills Successfully Fetched",
                status: true,
                data: totalSum
            });
        }
    } catch (err) {
        res.status(500).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        });
    }
};

exports.getAllBillsCount = async (req, res, next) => {
    try {
        let data = await billModel.find({active:true})
        if (data) {
            res.status(200).json({
                title: "success",
                message: "All Bills Successfully Fetched",
                status: true,
                data: data.length
            })
        }
    } catch (err) {
        res.status(200).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}

exports.getCompletedBillsCount = async (req, res, next) => {
    try {
        let data = await billModel.find({billStatus:"Completed",active:true});
        if (data) {
            res.status(200).json({
                title: "success",
                message: "All Bills Successfully Fetched",
                status: true,
                data: data.length
            });
        }
    } catch (err) {
        res.status(500).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        });
    }
};

// exports.search = async (req, res, next) => {
//     try {
//         const {partyName } = req.body;
//             var search = req.body.partyName;
//             console.log("573",req.body)
//             // if (search == "" || search == null) {
//             //     search_query = {
//             //         "partyName": {
//             //             $ne: null
//             //         },
//             //         "createdAt": {
//             //             $ne: null
//             //         }
//             //     };
//             // } else {
//             //     search_query = {
//             //         $or: [
//             //           {
//             //             "partyName": {
//             //               $regex: new RegExp(".*" + search + ".*", "i")
//             //             }
//             //           },
//             //           {
//             //             $expr: {
//             //               $eq: [ { $year: "$createdAt" }, req.body.selectedYear ]
//             //             }
//             //           }
//             //         ]
//             //       };
//             if (search == "" || search == null) {
//                 // Default query if no search input
//                 search_query = {
//                     "partyName": { $ne: null },
//                     "createdAt": { $ne: null }
//                 };
//             } else {
//                 search_query = {
//                     $and: [
//                         {
//                             // Null safety for both fields
//                             "partyName": { $ne: null },
//                             "createdAt": { $ne: null }
//                         },
//                         {
//                             // OR condition for matching either partyName or createdAt (year)
//                             $or: [
//                                 {
//                                     "partyName": {
//                                         $regex: new RegExp(".*" + search + ".*", "i")  // Match partyName with search
//                                     }
//                                 },
//                                 {
//                                     $expr: {
//                                         $eq: [ { $year: "$createdAt" }, req.body.selectedYear ]  // Match year of createdAt
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 };
            
//                 let data = await billModel.find(search_query).sort({_id: -1});
                
//                 if (data) {
//                     console.log("563", data);
//                     res.status(200).json({
//                         title: "success",
//                         message: "Completed Bills Successfully Fetched",
//                         status: true,
//                         data: data
//                     });
//                 }
//             }   
        
//     } catch (err) {
//         // res.status(500).json({
//         //     title: "error",
//         //     message: "Internal Server Error",
//         //     status: false,
//         //     error: err.message
//         // });
//         console.log(err)
//     }
// };


exports.search = async (req, res, next) => {
    try {
        const { partyName, selectedYear } = req.body;

        let match_query = {
            "partyName": { $ne: null },
            "createdAt": { $ne: null }
        };

        // Add search condition for partyName if provided
        if (partyName) {
            match_query["partyName"] = {
                $regex: new RegExp(".*" + partyName + ".*", "i") // Match partyName with search input
            };
        }

        // Add search condition for selectedYear if provided
        if (selectedYear) {
            match_query["$expr"] = {
                $eq: [{ $year: "$createdAt" }, parseInt(selectedYear)] // Match year of createdAt with selectedYear
            };
        }

        // Use aggregation to group by partyName
        let data = await billModel.aggregate([
            { $match: match_query },
            {
                $group: {
                    _id: "$partyName",
                    bills: { $push: "$$ROOT" }, // Collect all bills for each partyName
                    count: { $sum: 1 } // Count the number of bills for each partyName
                }
            },
            { $sort: { _id: 1 } } // Sort the results by partyName
        ]);

        if (data) {
            console.log("563", data);
            res.status(200).json({
                title: "success",
                message: "Bills Successfully Fetched",
                status: true,
                data: data
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err.message
        });
    }
};








exports.getAllBillsGroupBy = async (req, res, next) => {
    try {
        const data = await billModel.aggregate([
            {
                $group: {
                    _id: "$partyName",
                    partyName: { $first: "$partyName" }, // Get the partyName from the grouped data
                    invoiceNumbers: { $push: "$invoiceNumber" } // Collect invoice numbers for each partyName
                }
            },
            {
                $sort: { _id: -1 } // Sort by _id in descending order
            },
            {
                $project: {
                    _id: 1, // Exclude the _id field
                    partyName: 1, // Include the partyName field
                    invoiceNumbers: 1 // Include the invoiceNumbers field
                }
            }
        ]);
        if (data) {
            res.status(200).json({
                title: "success",
                message: "All Bills Successfully Fetched",
                status: true,
                data: data
            })
        }
    } catch (err) {
        res.status(200).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}

exports.getLadgerBillById = async (req, res, next) => {
    try {
        const currentDate = new Date();
        const startDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
        const endDate = currentDate;
        const body = req.query
        let data = await billModel.find({
            partyName: body.partyName,
            createdAt: {
                $gte: startDate,
                $lte: endDate   
            },
            active:true
        })
        if (data) {
            res.status(200).json({
                title: "success",
                message: "Data Successfully Fetched",
                status: true,
                data: data
            })
        }
    } catch (err) {
        res.status(200).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        })
    }
}

// exports.getMonthlyBillsData = async (req, res, next) => {
//     try {
//         const { year } = req.query; // Get the financial year from the query parameter
//         const results = [];
        
//         // Parse the financial year to get start and end years
//         const [startYear, endYear] = year.split('-').map(Number);

//         // Loop through the 12 months of the financial year
//         for (let i = 0; i < 12; i++) {
//             // Calculate the start and end date for each month
//             // Financial year starts in April
//             const startDate = new Date(startYear, i >= 3 ? i - 3 : i + 9, 1); // Adjust month for fiscal year
//             const endDate = new Date(startYear, i >= 3 ? i - 3 + 1 : i + 9, 0); // Last day of the month

//             // Fetch pending bills count for the month
//             const pendingCount = await billModel.countDocuments({
//                 createdAt: {
//                     $gte: startDate,
//                     $lte: endDate
//                 },
//                 billStatus: "Pending"
//             });

//             // Fetch completed bills count for the month
//             const completedCount = await billModel.countDocuments({
//                 createdAt: {
//                     $gte: startDate,
//                     $lte: endDate
//                 },
//                 billStatus: "Completed"
//             });

//             // Push the results for the month into the results array
//             results.push({
//                 month: startDate.toLocaleString('default', { month: 'long', year: 'numeric' }), // Format month name and year
//                 pendingCount,
//                 completedCount
//             });
//         }

//         res.status(200).json({
//             title: "success",
//             message: "Data Successfully Fetched",
//             status: true,
//             data: results // Return the counts for the last 12 months
//         });
//     } catch (err) {
//         res.status(500).json({
//             title: "error",
//             message: "Internal Server Error",
//             status: false,
//             error: err
//         });
//     }
// };


// exports.getMonthlyBillsData = async (req, res, next) => {
//     try {
//         console.log("1140",req.query)
//         const { year } = req.query; // Get the financial year from the query parameter
//         const results = [];
        
//         // Parse the financial year to get start and end years
//         const [startYear, endYear] = year.split('-').map(Number);

//         // Loop through the 12 months of the financial year
//         for (let i = 0; i < 12; i++) {
//             // Calculate the start and end date for each month
//             // Financial year starts in April
//             const startDate = new Date(startYear, i >= 3 ? i - 3 : i + 9, 1); // Adjust month for fiscal year
//             const endDate = new Date(startYear, i >= 3 ? i - 3 + 1 : i + 9, 0); // Last day of the month

//             // Fetch pending bills count and sum for the month
//             const pendingBills = await billModel.aggregate([
//                 {
//                     $match: {
//                         createdAt: {
//                             $gte: startDate,
//                             $lte: endDate
//                         },
//                         billStatus: "Pending"
//                     }
//                 },
//                 {
//                     $group: {
//                         _id: null,
//                         count: { $sum: 1 },
//                         totalAmount: { $sum: "$Total11" }
//                     }
//                 }
//             ]);

//             const pendingCount = pendingBills.length > 0 ? pendingBills[0].count : 0;
//             const pendingAmount = pendingBills.length > 0 ? pendingBills[0].totalAmount : 0;

//             // Fetch completed bills count and sum for the month
//             const completedBills = await billModel.aggregate([
//                 {
//                     $match: {
//                         createdAt: {
//                             $gte: startDate,
//                             $lte: endDate
//                         },
//                         billStatus: "Completed"
//                     }
//                 },
//                 {
//                     $group: {
//                         _id: null,
//                         count: { $sum: 1 },
//                         totalAmount: { $sum: "$Total11" }
//                     }
//                 }
//             ]);

//             const completedCount = completedBills.length > 0 ? completedBills[0].count : 0;
//             const completedAmount = completedBills.length > 0 ? completedBills[0].totalAmount : 0;

//             // Push the results for the month into the results array
//             results.push({
//                 month: startDate.toLocaleString('default', { month: 'long', year: 'numeric' }), // Format month name and year
//                 pendingCount,
//                 pendingAmount,
//                 completedCount,
//                 completedAmount
//             });
//         }

//         res.status(200).json({
//             title: "success",
//             message: "Data Successfully Fetched",
//             status: true,
//             data: results // Return the counts and amounts for each month
//         });
//     } catch (err) {
//         res.status(500).json({
//             title: "error",
//             message: "Internal Server Error",
//             status: false,
//             error: err
//         });
//     }
// };


exports.getMonthlyBillsData = async (req, res, next) => {
    try {
        console.log("1140", req.query);
        const { year } = req.query; // Get the financial year from the query parameter
        const results = [];

        // Parse the financial year to get start and end years
        const [startYear, endYear] = year.split('-').map(Number);
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth(); // Get current month (0-11)

        // Loop through the 12 months of the financial year
        for (let i = 0; i < 12; i++) {
            // Calculate the start and end date for each month
            // Financial year starts in April
            const startDate = new Date(startYear, i >= 3 ? i - 3 : i + 9, 1); // Adjust month for fiscal year
            let endDate;

            // Set the end date to today if it's the current month; otherwise, set to the last day of the month
            if (
                startDate.getFullYear() === currentYear &&
                startDate.getMonth() === currentMonth
            ) {
                endDate = currentDate; // End date as today for the current month
            } else {
                endDate = new Date(startYear, i >= 3 ? i - 3 + 1 : i + 9, 0); // Last day of the month
            }

            // Fetch pending bills count and sum for the month
            const pendingBills = await billModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: startDate,
                            $lte: endDate
                        },
                        billStatus: "Pending"
                    }
                },
                {
                    $group: {
                        _id: null,
                        count: { $sum: 1 },
                        totalAmount: { $sum: "$Total11" }
                    }
                }
            ]);

            const pendingCount = pendingBills.length > 0 ? pendingBills[0].count : 0;
            const pendingAmount = pendingBills.length > 0 ? pendingBills[0].totalAmount : 0;

            // Fetch completed bills count and sum for the month
            const completedBills = await billModel.aggregate([
                {
                    $match: {
                        createdAt: {
                            $gte: startDate,
                            $lte: endDate
                        },
                        billStatus: "Completed"
                    }
                },
                {
                    $group: {
                        _id: null,
                        count: { $sum: 1 },
                        totalAmount: { $sum: "$Total11" }
                    }
                }
            ]);

            const completedCount = completedBills.length > 0 ? completedBills[0].count : 0;
            const completedAmount = completedBills.length > 0 ? completedBills[0].totalAmount : 0;

            // Push the results for each month into the results array
            results.push({
                month: startDate.toLocaleString('default', { month: 'long', year: 'numeric' }), // Format month name and year
                pendingCount,
                pendingAmount,
                completedCount,
                completedAmount
            });
        }

        res.status(200).json({
            title: "success",
            message: "Data Successfully Fetched",
            status: true,
            data: results // Return the counts and amounts for each month
        });
    } catch (err) {
        res.status(500).json({
            title: "error",
            message: "Internal Server Error",
            status: false,
            error: err
        });
    }
};




