const MBS1 = require('../models/miniBrandSeries1Model')

// @desc Get all mini brands series 1
//@route GET /api/mbs1/
//@access Public
exports.getMBS1 = async (req, res, next) => {
    try {
        const mbs1 = await MBS1.find()

        return res.status(200).json({
            success: true,
            count: mbs1.length,
            data: mbs1
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

// @desc add MBS1
//@route POST /api/mbs1/
//@access Public
exports.addMBS1 = async (req, res, next) => {
    try {
        const { set, setName, seriesNo, item, itemNo, itemName, brandName, image, rarity, specialFeatures } = req.body

        const mbs1 = await MBS1.create({
            set, 
            setName, 
            seriesNo, 
            item, 
            itemNo, 
            itemName, 
            brandName, 
            image, 
            rarity, 
            specialFeatures
        })

        return res.status(201).json({
            id: mbs1.id,
            set: mbs1.set, 
            setName: mbs1.setName, 
            seriesNo: mbs1.seriesNo, 
            item: mbs1.item, 
            itemNo: mbs1.itemNo, 
            itemName: mbs1.itemName, 
            brandName: mbs1.brandName, 
            image: mbs1.image, 
            rarity: mbs1.rarity, 
            specialFeatures: mbs1.specialFeatures
        })
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message)

            return res.status(400).json({
                sucess: false,
                error: messages
            })
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
    }
}