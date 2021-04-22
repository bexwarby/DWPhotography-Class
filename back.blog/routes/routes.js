const express = require("express")
const router = express.Router()
const signUpTemplateCopy = require("../models/signUpModels")
const bcrypt = require("bcrypt")

/* router.get('/', (req, res) => {
    res.render('photos');
});
 */
router.post("/app", async (request, response) =>{
    
    // generate a salt for the password:
    const saltPassword = await bcrypt.genSalt(10)
    // hash the password. This is what will be secured and sent to the DB:
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    
    const signedUpUser = new signUpTemplateCopy ({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:securePassword,
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
    
})



module.exports = router