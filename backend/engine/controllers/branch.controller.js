const branchSchema = require ('../models/branch.model');


const BranchController = {
    getAllNamesBranches: async (req,res,next) => {
        try {
            const branch = await branchSchema.aggregate([
                { $project: { _id:0, name_branch: 1 } } // Filtra solo el campo "email"
            ]);
            if (!branch || branch.length === 0) {
                return res.status(404).json({ message: 'Branches not found' });
            } else {
                res.status(200).json(branch);
            }
            
        } catch (err) {
            return res.status(500).send('Branches - Server error');
        }
    },
    getAllBranches: async (req,res,next) => {

    },
    getAllBranchesWithHousedPackages: async (req,res,next) => {

    },
}

module.exports = BranchController;