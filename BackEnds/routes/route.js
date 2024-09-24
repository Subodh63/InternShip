const express = require('express');
const router = express.Router();
const Cont = require('../models/contact');
const User = require('../models/user');
const contact = require('../models/contact');
const Employee = require('../models/employees');
const Table = require('../models/table');

router.post("/contact", async (req, res) => {
    try {
        const data = new Cont(req.body);
        const saved = await data.save();
        if (saved) {
            res.status(201).json({
                message: "data submited successfully"
            });
        } else {
            res.status(400).json({
                error: "data not submit"
            });
        }

    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        })
    }

})
router.post("/user", async (req, res) => {
    try {
        const data = new User(req.body);
        const saved = await data.save();
        if (saved) {
            res.status(201).json({
                message: "data submited successfully"
            });
        } else {
            res.status(400).json({
                error: "data not submit"
            });
        }

    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        })
    }


})
router.get("/contact", async (req, res) => {
    try {
        const data = await Cont.find();
        res.status(201).send(data);

    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        });
    }

})
router.get("/contact/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Cont.findById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        });
    }
})
router.delete("/contact/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Cont.findByIdAndDelete(id);
        if (data) {
            res.status(200).json({
                message: "data deleted successfully"
            });

        } else {
            res.status(400).json({
                error: "error occurs"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }

})
router.patch("/contact/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Cont.findByIdAndUpdate(id, req.body);
        if (data) {
            res.status(201).json({
                message: "data updated successfully"
            });
        } else {
            res.status(400).json({
                error: "error occurs"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }

})
router.get("/user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        });
    }
})

router.get("/user", async (req, res) => {
    try {
        const data = await User.find();
        res.status(201).send(data);

    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        });
    }

})

router.delete("/user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id);
        if (data) {
            res.status(200).json({
                message: "data deleted successfully"
            });

        } else {
            res.status(400).json({
                error: "error occurs"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }

})

router.patch("/user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndUpdate(id, req.body);
        if (data) {
            res.status(201).json({
                message: "data updated successfully"
            });
        } else {
            res.status(400).json({
                error: "error occurs"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }

})

router.post("/employees", async (req, res) => {
    try {
        const data = new Employee(req.body);
        const saved = await data.save();
        if (saved) {
            res.status(201).json({
                message: "data submited successfully"
            });
        } else {
            res.status(400).json({
                error: "data not submit"
            });
        }

    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        })
    }

})

router.get("/employees", async (req, res) => {
    try {
        const data = await Employee.find();
        res.status(201).send(data);

    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        });
    }

})
router.delete("/employees/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Employee.findByIdAndDelete(id);
        if (data) {
            res.status(200).json({
                message: "data deleted successfully"
            });

        } else {
            res.status(400).json({
                error: "error occurs"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }

})

router.patch("/employees/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Employee.findByIdAndUpdate(id, req.body);
        if (data) {
            res.status(201).json({
                message: "data updated successfully"
            });
        } else {
            res.status(400).json({
                error: "error occurs"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }

})
// Employees table API
router.post("/table", async (req, res) => {
    try {
        const data = new Table(req.body);
        const saved = await data.save();
        if (saved) {
            res.status(201).json({
                message: "data submited successfully"
            });
        } else {
            res.status(400).json({
                error: "data not submit"
            });
        }

    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        })
    }

})
router.get("/table", async (req, res) => {
    try {
        const data = await Table.find();
        res.status(201).send(data);

    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        });
    }

})
// router.patch("/table/:id", async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = await Table.findByIdAndUpdate(id, req.body);
//         if (data) {
//             res.status(201).json({
//                 message: "data updated successfully"
//             });
//         } else {
//             res.status(400).json({
//                 error: "error occurs"
//             });
//         }
//     } catch (error) {
//         res.status(500).json({
//             error: "Server error"
//         });
//     }

// })
router.delete("/table/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Table.findByIdAndDelete(id);
        if (data) {
            res.status(200).json({
                message: "data deleted successfully"
            });

        } else {
            res.status(400).json({
                error: "error occurs"
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Server error"
        });
    }

})
router.get("/table/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Table.findById(id);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({
            error: "server error occurs"
        });
    }
})
// router.patch('/table/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, Address, Country, State, Qualification, Religion } = req.body;

//     try {
//         // Find the employee in the "table" collection by ID
//         const tableData = await Table.findById(id);

//         // Check if the record exists
//         if (!tableData) {
//             return res.status(404).json({ message: 'Record not found' });
//         }

//         // Update the record fields
//         tableData.name = name || tableData.name;
//         tableData.Address = Address || tableData.Address;
//         tableData.Country = Country || tableData.Country;
//         tableData.State = State || tableData.State;
//         tableData.Qualification = Qualification || tableData.Qualification;
//         tableData.Religion = Religion || tableData.Religion;

//         // Save the updated record
//         const updatedTableData = await tableData.save();
        
//         res.status(200).json(updatedTableData);  // Send the updated record data as a response
//     } catch (error) {
//         console.error('Error occurred while updating record:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

router.patch("/table/:id", async (req, res) => {
    try {
        const id = req.params.id; 
        
        // Find and update the document, returning the updated document
        const data = await Table.findByIdAndUpdate(id, req.body, { new: true });
        
        if (data) {
            // Successful update, return the updated data
            res.status(200).json({
                message: "Data updated successfully",
                data: data // Optionally return updated data
            });
        } else {
            // If no document is found
            res.status(404).json({
                error: "Data not found"
            });
        }
    } catch (error) {
        // Handle server error
        res.status(500).json({
            error: "Server error",
            details: error.message // Optionally provide error details
        });
    }
});

  
module.exports = router;