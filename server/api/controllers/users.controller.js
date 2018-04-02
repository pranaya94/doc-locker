const mongoose = require('mongoose')
const User = mongoose.model('User')
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

module.exports.register = function(req, res){
	console.log('registering user')
	console.log(req.body)
	let email = req.body.email
	let password = req.body.password

	User
		.findOne({
			email: email
		}).exec(function(err,user){
			if(err){
				console.log(err)
				res.status(401).json(err)
			}else{
				console.log('user found',user)
				if(user){
					res
						.status(400)
						.end()

						return
				}}})

	User.create({
		email: email,
		password: bcrypt.hashSync(password,bcrypt.genSaltSync(10))
	}, function(err,user){
		if(err){
			console.log(err)
			res
				.status(400)
				.json(err)
		}else{
			console.log('user created',user)
			res
				.status(201)
				.json(user)
		}
	})
}

module.exports.login = function(req,res){
	console.log('logging in user')
	let email = req.body.email
	let password = req.body.password
	console.log(email)
	User
		.findOne({
			email: email
		}).exec(function(err,user){
			if(err){
				console.log("here")
				console.log(err)
				res.status(401).json(err)
			}else{
				if(!user){
					res
						.status(401)
						return
				}
				if(bcrypt.compareSync(password,user.password)){					
					let token = jwt.sign({email: user.email}, //payload
						's3cr3t', //secret
						{expiresIn: 3600}
					)					
					res
					.status(200)
					.json({success: true, token: token})
					
				}else{
					res
						.status(401)
						.json('UnAuthorized')
				}
			}			
		})
}

module.exports.authenticate = function(req, res, next){
	let headerExists = req.headers.authorization
	if(headerExists){
		let token = req.headers.authorization.split(' ')[1]
		jwt.verify(token,'s3cr3t',function(error,decoded){
			if(error){
				console.log(error)
				res.status(401).json('Unauthorized')
			}else{
				req.email = decoded.email
				next()
			}
		})
	}else{
		res.status(403).json('No token provided')
	}
}


module.exports.indexAuthenticate = function(req, res){
	console.log("index auth request received")
	let headerExists = req.headers.authorization
	if(headerExists){
		let token = req.headers.authorization.split(' ')[1]
		jwt.verify(token,'s3cr3t',function(error,decoded){
			if(error){
				console.log(error)
				res.status(401).json('Unauthorized')
			}else{
				req.email = decoded.email
				res
					.status(200)
					.end()
				}
		})
	}else{
		res.status(403).json('No token provided')
	}
}