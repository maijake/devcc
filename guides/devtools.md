#o Node Version Manager - nvm

## nvm installation

[Node version manager](https://github.com/creationix/nvm) installation

	git clone https://github.com/creationix/nvm.git ~/.nvm
	

Add to `~/.bashrc`, `~/.profile`, etc

	source ~/.nvm/nvm.sh

More details on [nvm on github](https://github.com/creationix/nvm)

## nvm use

Install stable (0.10.x) node version
	
	nvm install v0.10.26

and to choose the version

	nvm use 0.10.26
	
More instructions on [nvm on github](https://github.com/creationix/nvm)

## bower - Bower is a package manager for the web

### Install bower

To install bower (globally, under current node version) use the command:

	npm install -g bower

### Use bower

To init `bower.json`

	bower init
	

To add a component, e.g. `bootstrap`,  to `bower.json` issue the command:

	bower install bootstrap --save
	
More instructions on [bower site](https://github.com/bower/bower)	

## Yeoman - the web's scaffolding tool for modern webapps

[Yeoman](http://yeoman.io) scaffolds out a new application, writing
your Grunt configuration and pulling in relevant Grunt tasks and Bower
dependencies that you might need for your build.

To install

	npm install -g yo

In the project root directory issue commands (see more on
[Yeoman](http://yeoman.io) page)

<strike>
	`npm install -g generator-angular  # install generator`
</strike>	
	
	npm install generator-angular  # install generator
	yo angular                        # scaffold out a AngularJS project
	bower install angular-ui          # install a dependency for your project from Bower
	grunt test                        # test your app
	grunt serve                       # preview your app (formerly `grunt server`)
	grunt    
	
