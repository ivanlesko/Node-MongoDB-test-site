var sidebar = require('../helpers/sidebar');

var fs = require('fs'),
	path = require('path');

module.exports = {
	index: function(req, res) {
		var viewModel = {
			uniqueId: 1,
			title: 'Sample Image 1',
			description: '',
			filename: 'sample1.jpg',
			views: 0,
			likes: 0,
			timestamp: Date.now,
			comments: [
				{
					image_id: 1,
					email: 'test@testing.com',
					name: 'Test Tester',
					gravatar: 'https://avatars1.githubusercontent.com/u/5688184?v=3&s=75',
					comment: 'This is a test comment',
					timestamp: Date.now()
				},
				{
					image_id: 1,
					email: 'test@testing.com',
					name: 'Test Tester',
					gravatar: 'https://avatars0.githubusercontent.com/u/6786014?v=3&s=75',
					comment: 'I really like the converging lines of this photo.',
					timestamp: Date.now()
				}
			]
		};

		sidebar(viewModel, function(viewModel){
			res.render('image', viewModel);
		});
	},

	create: function(req, res) {
        var saveImage = function() {
            var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
                imgUrl = '';

            for(var i=0; i < 6; i+=1) {
                imgUrl += possible.charAt(Math.floor(Math.random() * possible.length));
            }

            var tempPath = req.files.file.path,
                ext = path.extname(req.files.file.name).toLowerCase(),
                targetPath = path.resolve('./public/upload/' + imgUrl + ext);

            console.log("temp path: " + tempPath);

            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
                fs.rename(tempPath, targetPath, function(err) {
                    if (err) throw err;

                    res.redirect('/images/' + imgUrl);
                });
            } else {
                fs.unlink(tempPath, function () {
                    if (err) throw err;

                    res.json(500, {error: 'Only image files are allowed.'});
                });
            }
        };

        saveImage();
    },

	like: function(req, res) {
		res.send('The image:like POST controller');
	},

	comment: function(req, res) {
		res.send('The image:comment POST controller');
	}
};