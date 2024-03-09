const { execSync } = require('child_process');
const fs = require('fs');
// import {python_compiler} from '../compiler/python_compiler';

module.exports.index = function(req, res){
    //return res.end('<h1>Running</h1>');
    return res.render('home/index', {title: " Home"})
}

module.exports.about_us = function(req, res){
    //return res.end('<h1>Running</h1>');
    return res.render('home/about_us', {title: " About Us"})
}



