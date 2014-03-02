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
	
on Mac, and on Windows 	[download installer](http://git-scm.com/downloads)

## Using git (download devcc)
This is just a short (Crash Course) introduction to git.
[More comprehensive tutorials](https://www.google.com/search?q=git+tutorial&btnG=Search)
exist.

To download [devcc](https://github.com/sorsis3/devcc) open a terminal
window and change the working directory *&lt;some working directory&gt;*

	cd <some working directory>
	
and issue the command
	
	git clone https://github.com/sorsis3/devcc
	
Now You should have content of
[devcc](https://github.com/sorsis3/devcc) in the sub-directory `devcc`
under *&lt;some working directory&gt;*.

## Using git (short version)


First go to a working directory *&lt;some working directory&gt;*

	cd <some working directory>
	
Create a sub-directory `test` and change working directory to this
newly created directory

	mkdir test
	cd test
	
Create a file `temp.txt`

	echo "Hello world" >temp.txt
	
Init a a local git repo in directory `test`. This command will create
a (hidden) directory `.git`, which contains the bookkeeping
information for the repo.

	git init
	
Show status

	git status	
	
Add the newly created file to git repo

	git add temp.txt

Show status

	git status

Make the addition permanent by committing it to the repo


	git commit -m "first commit"
	
## Using git (create a github account)

Browse to [Join Github](https://github.com/join), add create a new
account by entering

* Username for your *&lt;your github account&gt;*
* email address (where git hub will send a confirmation email)
* password for the github account

You may also consider installing a
[git&github client](https://www.google.com/search?q=github+client&btnG=Search).

## Using git (short version continues)

Associate your *&lt;your github account&gt;* as remote to your local git repo:

	git remote add origin git@github.com:<your github account user name>/test.git
	
Push the changes to your remote github account

	git push -u origin master

And browse to *&lt;your github account&gt;* to see the changes published

	https://github.com/<your github account user name>
	
## Update master branch in github

Make sure you are in master

	git checkout master 

Check if you already have `author` remote pointing to the original repo

	git remote -v
	
add if `author` remote is not defined (**needs to be done only once**)

	git remote add author <original repo-forked>

fetch author state

	git fetch author
	
make sure that you are on master branch	

	git status
	
merge `author` to you `master` branch

	git merge author/master
	
push changes in my `master` branch to github

	git push origin master
	
	
	

[top](../README.md)  [resume](../README.md#0-SETUP-DEVCC) 
