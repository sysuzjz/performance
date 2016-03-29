module.exports = function(grunt) {

    // load tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // [
    //     'grunt-contrib-jshint',
    //     'grunt-contrib-qunit',
    //     'grunt-contrib-watch',
    //     'grunt-contrib-clean',
    //     'grunt-contrib-copy',
    //     'grunt-contrib-concat',
    //     'grunt-contrib-uglify',
    //     'grunt-contrib-cssmin',
    //     'grunt-contrib-concat',
    //     'grunt-contrib-less',
    //     'grunt-contrib-coffee',
    //     'grunt-usemin',
    //     'grunt-filerev'
    // ].forEach(function(task) { grunt.loadNpmTasks(task); });
    // setup init config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // clean up the `dist/` directory, i.e., delete files
        clean: {
            dist: {
                src: [
                    'css/compressed/*',
                    'js/compressed/*',

                    // funny dance to keep old versioned dist/css/*.pkg.*.css
                    '!dist/css/**',
                    'dist/css/*',
                    '!dist/css/*.pkg.*.css',

                    // funny dance to keep old versioned dist/css/*.pkg.*.js
                    '!dist/js/**',
                    'dist/js/*',
                    '!dist/js/*.pkg.*.js'
                ]
            }
        },

        // validate JS files using jshint (great for catching simple bugs)
        jshint: {
            files: ['gruntfile.js', 'js/uncompressed/index.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                },
                ignores: [
                    // enter paths to ignore here, e.g., 'src/js/jquery.js'
                ]
            }
        },
        // 合并css和js文件
        concat: {
            css: {
                src: ['css/uncompressed/bootstrap.css', 'css/uncompressed/*.css'],
                dest: 'css/compressed/all.css'
            },
            js: {
                src: ['js/uncompressed/jquery-*.js', 'js/uncompressed/*.js'],
                dest: 'js/compressed/all.js'
            }
        },
        // 压缩JS
        uglify: {
            build: {
                src: 'js/compressed/all.js',
                dest: 'js/compressed/all-min.js'
            }
        },
        // 压缩CSS
        cssmin: {
            options: {  
                 keepSpecialComments: 0  
            },
            css: {
                src: 'css/compressed/all.css',
                dest: 'css/compressed/all-min.css'
            }
        },

        // watch command to auto-compile files that have changed
        watch: {
            jshint: {
                files: ['js/uncompressed/index.js'],
                tasks: ['jshint']
            }
        }
    });

    // Composite tasks...

    // run tests
    grunt.registerTask('dev', ['jshint', 'watch']);

    // like watch, but build stuff at start too!
    grunt.registerTask('build', [ 'concat', 'cssmin', 'jshint', 'uglify']);

    // full build of project to `dist/`
    grunt.registerTask('default', ['jshint', 'clean', 'concat', 'uglify', 'cssmin']);
};