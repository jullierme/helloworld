module.exports = function(grunt) {
    // Carregue todas as tarefas Grunt declaradas no arquivo package.json de uma vez
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Configura o Grunt
    grunt.initConfig({
        // Tarefa index aux.
        wiredep: {
            target: {
                src: 'index.html' // point to your HTML file.
            }
        },
        // Tarefa copia.
        copy: {
            indexs:{
                files:[
                    {
                        expand: true, //http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
                        src: ['*.html'],
                        dest: 'build/'
                    }
                ]
            },
            views:{
                files:[
                    {
                        expand: true,
                        src: ['views/**'],
                        dest: 'build/'
                    },
                ]
            },
            css:{
                files:[
                    {
                        expand: true,
                        src: ['css/**'],
                        dest: 'build/'
                    }
                ]
            }
        },
        // Tarefa watch
        watch: {
            options: {
                livereload: true
            },
            arquivosweb: {
                files: ['**/*.js', '**/*.html', '**/*.css']
            },
            less:{
                files: ["less/**/*.less","directives/**/*.less"],
                tasks: ["less:app"]
            }
        },
        // Tarefa concatenação.
        concat: {
            principal:{
                src: ['js/*.js'],
                dest: 'build/js/principal.js'
            }
        },
        // Tarefa ngAnnotate.
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            app: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.js']
                   }
               ]
            }
        },

        // Tarefa limpar pastas
        clean: {
            app: {
                src: ['build']
            }
        },

        // Tarefa minificação javascript
        uglify: {
            app: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.js']
                    }
                ]
            }
        },

        // Tarefa minificação css
        cssmin: {
            app: {
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.css']
                    }
                ]
            }
        },

        // Tarefa minificação html
        htmlmin: {
            app: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        src: ['build/**/*.html']
                    }
                ]
            }
        },

        // Tarefa less
        less: {
            app: {
                files: {
                    "css/app.css": "less/app.less"
                }
            }
        },
    });

    //registra uma tarefa
    grunt.registerTask( 'build', [ 'clean', 'copy', 'concat', 'ngAnnotate', 'uglify', 'cssmin', 'htmlmin']);
    grunt.registerTask( 'livereload', [ 'watch' ]);
    grunt.registerTask( 'desenvolvimento', [ 'watch:less' ]);
};

//http-server E:/workspace/angularjs/src/main/webapp