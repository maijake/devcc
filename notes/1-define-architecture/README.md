# <a id="1-DEFINE ARCHITECTURE">On Defining Architectures</a>

Having `functional`requirements is not enough to start systems
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

The common engineering practice is to create amodel the system and
analyze it to give answers to these kind of questions.


## Architecture Description Core Concepts

Architecture Description is formally defined in
[IEEE_1471](http://en.wikipedia.org/wiki/IEEE_1471), and subsequent
standards.

*Architectures* are documented to answer *stakeholder* *concerns*. 
This also means that the quality of an *architecture description* 
is determined by how well it can be used to communicate key aspects to 
the *stakeholders*.

The key terms are:

* **architecture**: of a software intensive system is the structure or
    structures of the system, which comprises software elements, the
    externally visible properties of those elements, and the
    relationships among them
	
* **stakeholder** : is person, group, or entity with an interest about
    realization of the *architecture*
	
* **consern**: about an architecture is a requirement, an objective,
    or intention, or an aspiration a *stakeholder* has for that
    *architecture*

* **architecture description**: is a set of products that documents an
    architecture in a way that its stakeholders can understand and
    demonstrates that the architecture has met their *conserns*

It is not possible to capture the functional features and the quality
properties (of a large system ) in single comprehensive
model. Normally we create several **views** for addressing concerns of
specific stakeholders. Commonly used views are called **viewpoints**,
which define patterns, templates, and conventions for constructing one
type of view. Examples of *viewpoints* are development, physical,
logical viewpoints.

Other information: 

* [Architecture Description Terms and Their Relationships](http://pubs.opengroup.org/architecture/archimate-doc/ts_archimate/ts_archimate_files/image113.jpg)

* [Software Systems Architecture: Working With Stakeholders Using Viewpoints and Perspectives](http://www.amazon.com/Software-Systems-Architecture-Stakeholders-Perspectives/dp/0321112296/ref=sr_1_2?ie=UTF8&qid=1391965499&sr=8-2&keywords=software+systems+architecture)


## Architecture Design Process in Project Context

Before starting architecture design, the scope and constraints of the
design need to be identified and ratified by the work initiator.

The object of Architecture Design is to address the concerns of
stakeholders. The first step is to identify the stakeholders, and to
create a working relationship with them.

Working with stakeholders should start with collecting their first
cut concerns, documenting, and prioritizing them. 

Once we have identified, and prioritized the initial concerns, we
start the iterative phase, where

* make architectural design decisions (=address the concerns)
* model the architecture using various diagramming, and documenting
  techniques (see below)
* validate the architecture with the stakeholders (are we building the
  right system?)
* document the architectural design decisions made (*a task which is
  too often neglected!!*)

## Architecture Design Process in Corporate Context

In corporate context, we need to have more "structure" e.g.
"[Architecture framework](http://en.wikipedia.org/wiki/Architecture_framework)"
, and
"[Enterprise architecture framework](http://en.wikipedia.org/wiki/Enterprise_architecture_framework)",
to manage the complexities of multiple stakeholders, many (old)
systems, several parallel projects etc.

Our exercise, is not too complicated, and the following ment to point
out a couple of better known corporate architecture frameworks:

* [The Open Group Architecture Framework](http://en.wikipedia.org/wiki/The_Open_Group_Architecture_Framework)
  
* [Zachman Framework](http://en.wikipedia.org/wiki/Zachman_Framework)


## Techniques, diagrams, and templates

It is often advisable to have one overall **Systems Architecture
Diagram**, which communicates the essence of the target
system. [wikipedia](http://en.wikipedia.org/wiki/Systems_architecture)

In Architecture Design, we aim at identifying elements, which have 1)
clearly defined responsibilities, 2) have a well defined boundary, 3)
and clearly defined interfaces. The main division of the system to
these "architectural elements" is documented using **Logical
Architecture Diagram**.

**Integration Architecture Diagrams** model communication needs such as

* the target system interfacing with external systems
* user accessing the system
* system parts communicating with each other
* the system accessing its data store

When analyzing data intensive systems, we may use **Data Architecture
Diagrams** to document data stores and their relationships. The
diagrams may also show a high level data elements. More detailed data
modeling is normally done in requirement analysis.

Notice: Architecture Design is targeted to address concerns of
particular stakeholders. There is no single canonical way of
documenting these diagrams. This is apparent in the following queries:


* [systems architecture](https://www.google.com/search?q=development+architecture&source=lnms&tbm=isch&sa=X#q=systems+architecture&tbm=isch)

* [logical  architecture](https://www.google.com/search?q=development+architecture&source=lnms&tbm=isch&sa=X#q=logical++architecture&tbm=isch)

* [data architecture](https://www.google.com/search?q=development+architecture&source=lnms&tbm=isch&sa=X#q=data++architecture&tbm=isch)

* [integration architecture](https://www.google.com/search?q=development+architecture&source=lnms&tbm=isch&sa=X#q=integration+++architecture+&tbm=isch)

* [installation  architecture diagram](https://www.google.com/search?q=development+architecture&source=lnms&tbm=isch&sa=X#q=installation++architecture+diagram&tbm=isch)

* [development architecture](https://www.google.com/search?q=development+architecture&source=lnms&tbm=isch&sa=X)

* [deployment  architecture](https://www.google.com/search?q=development+architecture&source=lnms&tbm=isch&sa=X#q=deployment++architecture+&tbm=isch)


[up](../README.md) [resume](../README.md#DEFINE-ARCHITECTURE) [top](README.md)

