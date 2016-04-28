"use strict"

var koa = require("koa")
var cors = require("koa-cors")
var bodyParser = require("koa-bodyparser")
var co = require("co")
var fs = require("co-fs")

var app = koa()
