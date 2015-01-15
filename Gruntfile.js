module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    haml: {
      dist: {                            // Target
        files: {                         // Dictionary of files
          'public/index.html': 'src/index.haml'
        }
      },
    },
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'src/styles',
          cssDir: 'public/styles'
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'public',
          keepalive: true
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-haml');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['haml', 'compass', 'connect']);

};