# <a id="INSTALL-GIT">Install git</a>

There is nice video explaining (The Basics of Git and
Github)[https://www.youtube.com/watch?v=U8GBXvdmHT4#t=323]. In short
this video tells

* what git is, its background and benefits of using it
* how to use git on command line, and glimpse GUIs working on Mac of
  Windows
* how github adds collaboration support to git

## Installing 

On a Debian-based distribution like Ubuntu, try apt-get:

	apt-get install git
	
on Mac, and on windows 	[download installer](http://git-scm.com/downloads)

## Using git (download devcc)

To download [devcc](https://github.com/sorsis3/devcc) open a terminal
window and change to a working directory *<some working direcotory>*

	cd <some working directory>
	
and issue the commands
	
	git clone https://github.com/sorsis3/devcc
	
Now You should have content of
[devcc](https://github.com/sorsis3/devcc) in a subdirectory `devcc`.

## Using git (short version)

A short example, how to use git

First go to a working directory *<some working direcotory>*

	cd <some working directory>
	
Create a directory `test` and change working directory to this newly
created directory

	mkdir test
	cd test
	
Create a file `

	echo "Hello world" >temp.txt
	
Init a a local git repo

	git init
	
Show status

	git status	
	
Add the newly created file to git repo

	git add temp.txt

Show status

	git status

Make the addition permanent by commitig it to the repo


	git commit -m "first commit"
	
## Create a github account

Browse to [Join Github](https://github.com/join), add create a new
account by entering

* Username
* email address (where git hub will send a confirmation email)
* password for the account

## Using git (short version continues)

Associate your *<your github account user name>* as remote to your local git repo:

	git remote add origin git@github.com:<your github account user name>/test.git
	
Push the changes to github

	git push -u origin master

And browse to *<your github account user name>*

	https://github.com/<your github account user name>


[top](../README.md)  [resume](../README.md#0-SETUP-DEVCC) 

