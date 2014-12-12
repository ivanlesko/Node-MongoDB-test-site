module.exports = {
	index: function(req, res) {
		var viewModel = {
			images: [
				{
					uniqueId: 1,
					title: 'Sample Image 1',
					description: '',
					filename: 'sample1.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now
				},
				{
					uniqueId: 2,
					title: 'Sample Image 2',
					description: '',
					filename: 'sample2.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now
				},
				{
					uniqueId: 3,
					title: 'Sample Image 3',
					description: '',
					filename: 'sample3.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now
				},
				{
					uniqueId: 4,
					title: 'Sample Image 4',
					description: '',
					filename: 'sample4.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now
				},
				{
					uniqueId: 5,
					title: 'Sample Image 5',
					description: '',
					filename: 'sample5.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now
				},
				{
					uniqueId: 6,
					title: 'Sample Image 6',
					description: '',
					filename: 'sample6.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now
				},
				{
					uniqueId: 7,
					title: 'Sample Image 7',
					description: '',
					filename: 'sample7.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now
				}
			]
		};

		sidebar(viewModel, function(viewModel) {
			res.render('index', viewModel);
		});
	}
};



