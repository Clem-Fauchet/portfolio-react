export const projects = [
	{
		id: 1,
		image: '/static/media/quiz.png',
		title: 'Quiz Harry Potter Houses',
		subTitle: 'Multi options quiz - Which houses do you belong to?',
		use: 'Use of React Hooks - useState/useEffect.',
		description:
			'Relies on user answers selection by updating state and five different results for each houses. Previous button allows user to take back answer and modify count correctly with the new answer.',
		queries: 'Pc first, media queries for mobile.',
		tools: 'Webpack, React.JS, Sass, Git, Photoshop',
		link: 'http://hp-quiz-houses-app.surge.sh/',
	},

	{
		id: 2,
		image: '/static/media/memory.png',
		title: 'Game Harry Potter',
		subTitle: 'Memory cards - Find all the pairs.',
		use: 'Use of React Hooks - useState/useEffect.',
		description:
			"Relies on user's first click and second click, compare card image url and update if matching pair. Block the card board after two clicks and wait for the flipping. Reset button generate a new deck of 18 random cards (9 pairs)",
		queries: 'Pc first, media queries for mobile.',
		tools: 'React.JS, Sass, Git',
		link: 'http://hp-memory-card-app.surge.sh/',
	},

	{
		id: 3,
		image: '/static/media/portfolio.png',
		title: 'First Portfolio',
		subTitle: 'Portfolio to test new skills.',
		use: 'First use of Git and Sass.',
		description:
			'Basic layouts and design, advanced page loading with Javascript animation. SVG animations and titles. Media queries with Bootstrap.',
		queries: 'Mobile first, media queries tablet & PC.',
		tools:
			'HTML, CSS, Javascript, Sass, Bootstrap, Git, Photoshop, Illustrator',
		link: 'https://clem-fauchet.github.io/my-portfolio/',
	},

	{
		id: 4,
		image: '/static/media/compost.png',
		title: "Website Compost'Solidaire",
		subTitle: 'Green association to reduce carbon oxygen.',
		use: 'Use of Wordpress and plugins.',
		description:
			'All designs and architecture. Sketch and graphic chart creation. Technical conception and organization of the website. Building from scratch on Wordpress.',
		queries: 'Pc first, DIVI plugin for media queries.',
		tools: 'Wordpress, CSS, Photoshop',
		link: 'http://www.compostsolidaire.fr/',
	},

	{
		id: 5,
		image: '/static/media/nerdy.png',
		title: 'Bootcamp validation website',
		subTitle: 'Fake event about outside movies projections.',
		use: 'Used everything I have learned.',

		description:
			'Creating everything from scratch. Layouts with HTML/CSS and animations with Javascript. JS plugin for carousel animation. Flexbox and Grid to make it responsive. Complete form with database. Upload on OVH.',
		queries: 'Pc first, media queries tablet & mobile.',
		tools: 'HTML, CSS, Javascript, jquery, Photoshop, Illustrator',
		link: 'http://www.totally-nerdy.fr/index.html',
	},
]
