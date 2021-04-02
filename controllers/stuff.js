exports.createThing = (req, res, next)=>{
    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId,
    });
    thing.save().then(()=>{
        res.status(201).json({
            message: " Object added to the database",
        });
    }).catch((error)=>{
        res.status(400).json({
            error: error,
        });       
    });
};
