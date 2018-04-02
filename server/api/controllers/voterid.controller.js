const mongoose = require('mongoose')
const Voterid = mongoose.model('Voterid')

module.exports.voteridGetOne = function(req, res){

	let email = req.email
	console.log("Get Voterid for : " + email)
	Voterid
		.findOne({email : email})
		.exec(function(err,thisVoterid){
				
				let response = {
					status : 200,
					message : thisVoterid
				}
				if(err){
					response.status = 400
					response.message = err					
				}
				else if(!thisVoterid){
					response.status = 404
					response.message = {
						message : "Voterid not found"
							}
					}else{
					response.status = 200
					response.message = thisVoterid
					}
				console.log(response.message)
				res
				   .status(response.status)
				   .json(response.message)
			
		})
	
}

module.exports.voteridAddOne = function(req,res){
	let email = req.email

	// remove older version
	Voterid
    .remove({email : email},function(err,doc){
        if(err){
            console.log("error deleting Voterid")
        }else{
            console.log("Voterid deleted")
        }
     })


	Voterid
		.create({
			  email : email,
              voteridNumber : req.body.voteridNumber,
              name : req.body.name,
              dob : req.body.dob,
              address : req.body.address,
              sex : req.body.sex,
              fathersName : req.body.fathersName,
              issueDate : req.body.issueDate
		   },function(err,doc){
			if(err){
				console.log(err)
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

module.exports.voteridUpdateOne = function(req,res){

	let email = req.email
    Voterid
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
						message : "Voterid not found"
					}
				}
				if(response.status!==200){
				res
					.status(response.status)
					.json(response.message)
				}else{
                    doc.email = email,
                    doc.voteridNumber = req.body.VoteridNumber,
                    doc.name = req.body.name,
                    doc.dob = req.body.dob,
                    doc.address = req.body.address,
                    doc.sex = req.body.sex,
                    doc.fathersName = req.body.fathersName,
                    doc.issueDate = req.body.issueDate
					
					doc.save(function(err,VoteridUpdated){
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

module.exports.voteridDeleteOne = function(req,res){
	let email = req.email
Voterid
    .remove({email : email},function(err,doc){
        if(err){
            console.log("error deleting Voterid")
            res
                .status(404)
                .json(err)
        }else{
            console.log("Voterid deleted")
            res
                .status(204)
                .json()
        }
     })
}