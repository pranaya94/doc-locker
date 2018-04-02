const mongoose = require('mongoose')
const Aadhaar = mongoose.model('Aadhaar')

module.exports.aadhaarGetOne = function(req, res){

	let email = req.email
	console.log("Get Aadhaar for : " + email)
	Aadhaar
		.findOne({email : email})
		.exec(function(err,thisAadhaar){
				
				let response = {
					status : 200,
					message : thisAadhaar
				}
				if(err){
					response.status = 400
					response.message = err					
				}
				else if(!thisAadhaar){
					response.status = 404
					response.message = {
						message : "Aadhaar not found"
							}
					}else{
					response.status = 200
					response.message = thisAadhaar
					}
				console.log(response.message)
				res
				   .status(response.status)
				   .json(response.message)
			
		})
	
}

module.exports.aadhaarAddOne = function(req,res){
	let email = req.email

	//first remove old version
	Aadhaar
		.remove({email : email},function(err,doc){
			if(err){
				console.log("error deleting aadhaar")            
			}else{
				console.log("aadhaar deleted")          
			}
		})


	Aadhaar
		.create({
			  email : email,
              aadhaarNumber : req.body.aadhaarNumber,
              name : req.body.name,
              dob : req.body.dob,
              address : req.body.address
		   },function(err,doc){
			if(err){
				console.log("Error creating aadhaar")
				res
					.status(400)
					.json(err)
				}else {
					res
						.status(201)
						.json(doc)
				}
			}
		)
}

//update not implemented yet
module.exports.aadhaarUpdateOne = function(req,res){

	let email = req.email
    Aadhaar
            .findOne({email : email})
			.exec(function(err,doc){
				let response = {
					status : 200,
					message : []
				}
				if(err){
					response.status = 500
					response.message = err
				}else if(!doc){
					respons.status = 404
					response.message = {
						message : "aadhaar not found"
					}
				}
				if(response.status!==200){
				res
					.status(response.status)
					.json(response.message)
				}else{
                    doc.email = req.email
                    doc.aadhaarNumber = req.body.aadhaarNumber
                    doc.name = req.body.name
                    doc.dob = req.body.dob
                    doc.address = req.body.address
					
					doc.save(function(err,aadhaarUpdated){
						if(err){
							res
								.status(500)
								.json(err)
						}else{
								res
									.status(204)
									.json()
						}
					})
				}
			})
}

module.exports.aadhaarDeleteOne = function(req,res){
	let email = req.email
Aadhaar
    .remove({email : email},function(err,doc){
        if(err){
            console.log("error deleting aadhaar")
            res
                .status(404)
                .json(err)
        }else{
            console.log("aadhaar deleted")
            res
                .status(204)
                .json()
        }
     })
}