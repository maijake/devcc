# <a id="DEVCC">devcc</a>

Developer Crash Course or Carbon Copy (as You like). 

The contents aims at creating understanding 

* WHY developers do some things they do
* HOW these things may done using some tools in a fictitious project

## <a id="0-SETUP-DEVCC">Setup devcc environment</a>

Like developers normally do (or as they normally
[SHOULD do](0-why-vcs/README.md)), we are using a version control tool
to manage our content. Our choice is a tool called `git`, and we store
our content [in a repository](https://github.com/sorsis3/devcc) on
[github](http://github.com) service.


* You need to [install git](0-init-git/README.md) to download
[devcc](https://github.com/sorsis3/devcc) to Your computer. 

* Our fictitious project uses `github`, and and a
[github -account](https://github.com/join) is needed to demonstrate
collaboration.

* You need to be familiar with the command line tool on the operating
system
([Windows](https://www.google.com/search?q=command+line+tool+windows),
[Mac](https://www.google.com/search?q=command+line+tool+mac) or
[Linux](https://www.google.com/search?q=command+line+tool+linux&btnG=Search))
You are using.

* You need to have an editor, which, 
  * allows opening several windows (because implementing some feature
  in a software requires changing)
  * has a syntax highlight support

## <a id="0-MANAGE-DEVELOPMENT">Manage development</a>

We plan to use [Scrum](0-agile/README.md) to manage development in
devcc.

## <a id="1-DEFINE-REQUIREMENTS">Define requirements</a>

In this exercise, we assume that the necessary preliminary work,
e.g. documenting our goal as a
[Concept Paper](http://www.wikihow.com/Write-a-Concept-Paper), has
been done, and that the funding of the development work is secured.

Throughout the entire project we need to ensure the adequacy of
funding. We must constantly track the amount of work done, and the
amount of work left to create a deliverable product satisfying our
goals.

Initially, we need to have requirements of the target system detailed
enough so that we can bootstrap
[our development process](README.md#0-MANAGE-DEVELOPMENT).  In order
to monitor progress, we must have an understanding of the whole scope
of the system already at the start.

There [many techniques](1-define-requirements/README.md) for defining
requirements of a system.  In this exercise, we give
[DevCC functional requirements](1-spec/README.md) as screen mockups
using
[Twitter Bootstrap 3.0 Ui Mockup Templatetes](http://keynotopia.com/bootstrap/)
by [Keynotopia]http://keynotopia.com/).


## <a id="1-DEFINE-ARCHITECTURE">Define Architecture</a>

Having `functional`requirements is not enough to start system
development. At the start (and trough out the whole system life cycle)
we need to have understanding of several `non-functional` aspects of
the system, such as:

* How do we split the (possibly large) overall system into more
  manageable pieces?
* How do we integrate the these pieces together?
* What is the platform on which the system operates?
* How do we integrate the system with its surroundings?
* What development tools are used?
* What is the performance of the system?  How can we increase (scale
  up) its performance?
* How secure is the system?
* etc.

The common engineering practice is create a
[Systems Architecture](http://en.wikipedia.org/wiki/Systems_architecture)
model, and use it in analysis to give answers to questions, such as
above. 

[](1-architecture#README.md)
[derived Systems Architecture](1-define-architecture/README.md) for 


[top](README.md) 


