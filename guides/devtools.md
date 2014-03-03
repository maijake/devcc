#o Node Version Manager - nvm

## nvm installation

[Node version manager](https://github.com/creationix/nvm) installation

	git clone https://github.com/creationix/nvm.git ~/.nvm
	

Add to `~/.bashrc`, `~/.profile`, etc

	source ~/.nvm/nvm.sh

More details on [nvm on github](https://github.com/creationix/nvm)

## nvm use

Install node version
	
		nvm install 0.11

and to choose the version

	nvm use 0.11
	
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
