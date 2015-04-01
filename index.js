#!/usr/bin/env node

var path = require('path');

var browserLessons = require('browser-lessons');

browserLessons( {

	name: 'Jam3 Tween Lesson',
	description: 'This is a lesson on what a Tweening engine is and how to use them.',
	pathLessons: path.join(__dirname, 'lessons')
});