const MBS1 = require('../models/miniBrandsSeries1Model')

// @desc Get all mini brands series 1
//@route GET /api/mbs1/
//@access Public
exports.getMBS1 = async (req, res, next) => {
    try {
        const mbs1 = await MBS1.find().sort({itemNo: 1})

        return res.status(200).json(
            {data: mbs1}
        )
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
        const { set, setName, seriesNo, item, itemNo, itemName, brandName, image, rarity, specialFeature } = req.body

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
            specialFeature,
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

//@desc Update MiniBrands entry
//@route PUT /api/mbs1/:itemNo
//@acess Public
exports.updateMBS1 = async (req, res) => {
    try {
        Object.keys(req.body).forEach(key => {
        if ( req.body[key] === null || req.body[key] === 'undefined' || req.body[key] === "" ){
            delete req.body[key]
        }
    })
    const updatedMBS1 = await MBS1.findOneAndUpdate(
        {itemNo: req.body.itemNo},
        {
            $set: req.body
        }
    )
    res.status(200).json(updatedMBS1)

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
    })
}
}