module.exports = {
	newest: function() {
		var comments = [
			{
				image_id: 1,
				email: 'test@testing.com',
				name: 'Test Tester',
				gravatar: 'https://avatars1.githubusercontent.com/u/5688184?v=3&s=75',
				comments: 'This is a test comment',
				timestamp: Date.now(),
				image: {
					uniqueId: 1,
					title: 'Sample Image 1',
					description: '',
					filename: 'sample1.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now()
				}
			},
			{
				image_id: 1,
				email: 'test@testing.com',
				name: 'Test Tester',
				gravatar: 'https://avatars1.githubusercontent.com/u/5688184?v=3&s=75',
				comments: 'Another follow up comment!',
				timestamp: Date.now(),
				image: {
					uniqueId: 1,
					title: 'Sample Image 1',
					description: '',
					filename: 'sample1.jpg',
					views: 0,
					likes: 0,
					timestamp: Date.now()
				}
			}
		];

		return comments;
	}
};