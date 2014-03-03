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
	
on Mac, and on Windows
[download installer](http://git-scm.com/downloads)

## Using git (download devcc) This is just a short (Crash Course)
introduction to git.
[More comprehensive tutorials](https://www.google.com/search?q=git+tutorial&btnG=Search)
exist.

To download [devcc](https://github.com/sorsis3/devcc) open a terminal
window and change the working directory *&lt;some working
directory&gt;*

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

	mkdir test cd test
	
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

Associate your *&lt;your github account&gt;* as remote to your local
git repo:

	git remote add origin git@github.com:<your github account user
	name>/test.git
	
Push the changes to your remote github account

	git push -u origin master

And browse to *&lt;your github account&gt;* to see the changes
published

	https://github.com/<your github account user name>
	
## Merging and Version control workflows

Multiple versions of the same software to be deployed in different
sites, or a team of software's developers working simultaneously on
updates, result to the need of
[branching](http://en.wikipedia.org/wiki/Branching_%28revision_control%29)
and
[merging](http://en.wikipedia.org/wiki/Merge_%28revision_control%29).

Branching is the duplication of an version control object. Some reason for
branching are for example

* **branch by feature**: A branch is created, at the start of feature
    implementation, and it is merged to the mainline, when the feature
    implementation is finished.

* **branch by team**: large team of developers working on multiple
    team. Objective is to have the mainline always releasable. Each
    team is assigned a branch, which will be merged to the mainline,
    when the team has it's branch stable.
	
In merging, multiple changes are combined together.  It is the
opposite action of branching. Merging becomes increasingly difficult,
when more time has elapsed since the change, when the number of
changes increase, changes contain large rewrites, changes are
semantically incompatible or conflicting, etc.


[Continuous Delivery](http://www.amazon.com/gp/product/0321601912)
promotes development on mainline (i.e. avoid branching) with
developers committing small changes to main branch. It identifies
three good reason to create a separate branch:

* create a **branch for a release** version of the application:
  release branches are never merged to the mainline, fixes on release
  branch are merged to the mainline
* **spike a branch** to test the feasibility of a new feature: spiked
  branch is thrown away and it is not merged to the mainline
* create a (**short lived branch**) to implement a feature, which
  requires large changes to the application, and the code base does
  not support the changes to be implemented incrementally. Once the
  feature is implemented, the changes are merged to the main line


Rebasing may be used to
[counter act branch divergence](http://mettadore.com/analysis/a-simple-git-rebase-workflow-explained/)
In rebased workflow, changes on the mainline are applied periodically
to the branch. After rebase, the branch is updated as if it were
created from latest mainline head.

### Rebase based workflow in git

Main main branch `author` in address
`https://github.com/sorsis3/git-test`, and local repo created with the
command

	git clone https://github.com/sorsis3/git-test

A branch in fork `https://github.com/sorsis4/git-test`, and local repo
created with the command

	git clone https://github.com/sorsis4/git-test
	

In `sorsis4/git-test` add remote `author` with the command

	git remote add author https://github.com/sorsis3/git-test
	
and fetch the content of the mainline from the remote `author`

	git fetch author	

Now it is possible to create a tracking branch `author-track` with the command
	
	git checkout -b author-track --track author/master


In mainline `sorsis3` do some changes, commit, and push the

	echo `date` >> main-sorsis3-changes.txt	

In bracnch `sorsis4` show existing branches are shows with the command

	git branch
	
and in this case we have

	author-track
	master

Switch to the tracking  branch on `sorsis3` the mainline

	git checkout author-track
	
and update the tracking branch `author-track` 

	git fetch
	git pull

You may now show the differences

	git diff master..author-track

Swithch to master branch of the `sorsis4` frok

	git checkout master
	
	
and rebase (i.e. bring the changes on mainline `sorsis3` ) to the
`sorsis4` -fork

	git rebase author-track
	
Now the diff command should not have changes made in `main-sorsis3-changes.txt`

	git --no-pager diff master..author-track

If may deliver the changes made to `sorsis4` -fork by pushing them to
github, and by making a pull request there for `sorsis3`, to merge the
changes.


	
## Send a pull request on GitHub for only latest commit

I want to send a pull request, but only want to include the last
commit.

[Stackoverflow](http://stackoverflow.com/questions/5256021/send-a-pull-request-on-github-for-only-latest-commit)


Basically you (**Notice** stackoverflow uses `upstream`, we are using
remote `author`)

* create a new branch for remote `author`: `git checkout -b
  branch-author author/master`
* cherry-pick (=to choose a commit from one branch and apply it onto
  another) = `git cherry-pick <SHA hash of commit>`
* push the branch to remote `origin` `git push origin branch-author`

[top](../README.md) [resume](../README.md#0-SETUP-DEVCC)
