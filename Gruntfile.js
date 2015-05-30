module.exports = function (grunt) {
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		project: {
			app: 'app',
			css: ['<%= project.app %>/styles/sass/main.scss'],
			js: ['<%= project.app %>/js/*.js']
		},
		
		sass: {
			dev: {
				options: {
					compass: true,
					style: 'expanded'
				},
				files: {
					'<%= project.app %>/styles/main.css' : '<%= project.css %>'
				}
			},
			dist: {
				options: {
		      style: 'compressed'
		    },
		    files: {
		      '<%= project.app %>/styles/main.css' : '<%= project.css %>'
		    }
			}
		},

		jshint: {
			all: ['Gruntfile.js', '<%= srcFiles %>']
		},

		watch: {
			// scripts: {
			// 	files: ['<%= srcFiles %>'],
			// 	tasks: ['jshint']
			// },
			sass: {
				files: '<%= project.app %>/styles/sass/{,*/}*.{scss,sass}',
				tasks: ['sass:dev']
			}
		}
		
	});

	// To make grunt aware of the installed plugins
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-notify");
	grunt.loadNpmTasks("grunt-contrib-sass");

	grunt.registerTask("default", ["jshint", "sass:dev"]);
};