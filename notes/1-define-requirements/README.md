# <a id="1-DEFINE-REQUIREMENTS">Define Requirements</a>

On a very high level, requirements analysis may considered as a
process of reducing ignorance so that we may demonstrate our lack of
ignorance in some tangible form, such as by building a system that
satisfies the
user.[The Five Orders of Ignorance](http://www-plan.cs.colorado.edu/diwan/3308-s10/p17-armour.pdf)

Initially, when we start a project, we know from the experience that
there will be questions that we are currently unaware of. Therefore,
we should have (and follow) some process, which guarantees that we
will cover the unknown terrain, allowing us to identify the unknown
questions, and to find answers to them - to the sufficient extent.

## Definitions

[Wiki](http://en.wikipedia.org/wiki/Requirement) gives the following
definition: In product development and process optimization, a
**requirement** is a singular documented physical and functional need
that a particular design, product or process must be able to perform.

**Functional requirements** state what the system is required to
do. **Data requirements** define what are the inputs and outputs of
the system, and what data the system should manage. **Quality
Requirements** (Aka **Non-Functional Requirements**) specify how well
the system should perform its intended functions.

[Acceptance Criteria](http://www.businessdictionary.com/definition/acceptance-criteria.html):
Specified indicators or measures employed in assessing the ability of
a component, structure, or system to perform its intended function.


## Requirement Classifications

### Product vs. process requirements

[Wiki](http://en.wikipedia.org/wiki/Requirement) identifies two
viewpoints to take, when defining requirements

* **Product requirements** prescribe properties of a system or product
--> specify automation required to support a process requirement

* **Process requirements** prescribe activities to be performed by the
    organization --> specify activities requiring support from a
    system

These two viewpoints may combined, for example in
[a diagram with process and system viewpoints](http://www.ibm.com/developerworks/bpm/bpmjournal/1302_husain/images/Business_Process_Definition.jpg)

### Requirement Levels

[The introductory chapter](http://www.itu.dk/people/slauesen/Reqs/SoftwReqsPre.pdf)
of the book
[Software Requirements: Styles & Techniques](http://www.amazon.com/Software-Requirements-Techniques-Soren-Lauesen/dp/0201745704)
gives examples of expressing requirements on various level
* **WHY: Goal-level requirement**: why the customer wants to spend money on the product. 
* **WHAT: Domain-level requirement**: support user tasks xx to yy.
* **HOW: Product-level requirement**: a function to be provided by the product.
* **HOW: Design-level requirement**: details of the product interface.

## Quality of Requirements  

There are several characterizations for a good requirement:

* A requirement must specify *what* the system should do without specifying *how*.

* it should be [SMART](http://en.wikipedia.org/wiki/SMART_criteria):
**S**pecific, **M**easurable, **A**ssignable, **R**ealistic,
**T**ime-related
  
* it should have
[INVEST properties](http://en.wikipedia.org/wiki/INVEST_%28mnemonic%29):
**I**ndependent, **N*egotiable, **V**aluable, **E**stimatable,
**S**mall, **T**estable
  
* it should have the
  [characteristics as defined in wiki](http://en.wikipedia.org/wiki/Requirement):
  Cohesive, Complete, Consistent, Atomic, Traceable, Current,
  Unambiguous, Specify Importance, Verifiable
  
* it should pass the
  [checklist 1](http://www.utm.mx/~caff/doc/OpenUPWeb/openup/guidances/checklists/good_requirements_594ACCBD.html)
  Is the requirement correct?, Is the requirement complete?, Is the
  requirement clear?, Is the requirement consistent? Is the
  requirement verifiable? Is the requirement traceable?, Is the
  requirement feasible? Is the requirement design independent?, Is the
  requirement atomic?
	
* it should pass the
  [checklist 2](http://www.slideshare.net/guest24d72f/8-characteristics-of-good-user-requirements-presentation)
  Verifiable, Clear and concise, Complete, Consistent, Traceable,
  Viable, Necessary, Implementation free

## Requirements and Acceptance Criterion

The importance of defining *Acceptance Criterion* at the same time as
defining the requirements has been increasingly recognized during the
last decades:

* The
  [old school waterfall](http://en.wikipedia.org/wiki/Waterfall_model)
  model presented testing acceptance criteria as a separate step
  towards the end of the
  [development process](http://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Waterfall_model.svg/350px-Waterfall_model.svg.png)

* The
  [v-model](http://en.wikipedia.org/wiki/V-Model_%28software_development%29)
  identified Acceptance Test Design and Acceptance Test
  [following](http://upload.wikimedia.org/wikipedia/commons/thumb/9/96/V-model.JPG/420px-V-model.JPG)
  Requirements Analysis.

* Contemporary agile methodologies consider
  [user story requirements](http://en.wikipedia.org/wiki/User_story)
  to (in-complete) informal statements as long as the corresponding
  acceptance criterion are lacking.

## Techniques

The book
[Software Requirements: Styles & Techniques](http://www.amazon.com/Software-Requirements-Techniques-Soren-Lauesen/dp/0201745704)
describes some techniques for documenting requirements

* Data requirements styles: 

  * **Data Windows**: Simplified screen pictures with graphics and
  realistic data (but no buttons and menus).

  * **Data dictionary**: A textual description of data inside and
  outside the product. See examples of
  [data dictionary templates](https://www.google.com/search?q=er+data+dictionary+template&source=lnms&tbm=isch)

  * **Data model**: A block and arrow diagrams describing data
  inside/outside the system together. See
  [ER-model examples](https://www.google.com/search?q=er+diagram&tbm=isch)
  and [UML -model diagrams](https://www.google.com/search?q=uml+data+model+diagram&tbm=isch)
  
* Functional requirement style:

  * **Context Diagram**: A diagram of the product and its
  surroundings. See
  [examples of context diagrams](https://www.google.com/search?q=context+diagrams&tbm=isch)
  
  * **High-level Tasks**: Total business case as seen by the client
      (as opposed on concentrating on product surroundings)
  
  * **Task Descriptions**: Structured text describing user
      tasks. Search google [for task description templates](https://www.google.com/search?q=task+description+template)
	  
  * **Feature List**: List of requirements in the form *The product
  shall ...*. See examples of
  [feature lists](https://www.google.com/search?q=feature+lists&tbm=isch)

  * **Event list and function lists**: Events to be handled by the product
  (or a list of product functions). Events to be handled by
  human+computer (or a list of user tasks).
  
  * **Use case**: Primarily the products part of a task, including its
      interactions with the user. See
      [examples of use case diagrams](https://www.google.com/search?q=use+case+diagram&tbm=isch)
      and
      [examples of use case templates](http://en.wikipedia.org/wiki/Use_case#Templates),
      on documenting use cases.

  * **Scenarios**: A case story illustrating one or more user tasks,
      or a specific cases to be tested.

  * **Screens and prototypes**: Screen pictures with buttons and menus +
  descriptions of the functionality.
  
  * dataflow diagrams: A diagram showing functions, and data flowing
    between the functions
    [Examples of dataflow diagrams](https://www.google.com/search?q=dataflow+diagrams&tbm=isch)

Many agile methods suggest using **User Stories**: i.e. to use or more
sentences in the everyday or business language of the end user that
captures what the user needs to do as part of his or her job function.
They are often written using the format
[canonized by Mike Cohn](http://www.mountaingoatsoftware.com/agile/user-stories).
They should be associated with **acceptance criteria**, which may
documented using
[Gherking](https://github.com/cucumber/cucumber/wiki/Gherkin) syntax.

## On the applicability of the techniques

The key is that there is a common language that people in different
roles can understand same way to describe the product being defined.

The techniques have different strengths. Some have better support for
**validation** (the check that requirements match the actual demands),
and some have better support for **verification** (the check that
product fulfills the requirements).

The techniques can combined together in various ways, e.g.

  * draw a **Context Diagram** to give an overview of system, and to
	identify stakeholders/users
  * create **Task Descriptions** to document process steps, use **Data
    Windows** to document data requirements of a process step
  * extract **Feature Lists** from *Task Descriptions*

Or 

  * Use **High-level Tasks** to identify business value for customer
  * use **Scenarios** to illustrate, and to understand finer details
  * document *Scenarios* in **User Story** format, and associate
  **Acceptance Criteria** define the context.

## Documenting Requirements

Agile manifesto values Working software over comprehensive
documentation. This is not to understand that documentation should be
neglected.

Example Table of Contents for Requirements Specification Documents

Example 1 (a short version)
``` 
1. Introduction
2. Business background
3. Main domain concepts
4. System overview
5. User groups
6. Functional requirements
7. Non-functional requirements
8. Constraints
```

Example 2 (a longer version)

```
1.Introduction
  1.1.Document Purpose
  1.2.Intended Audience
  1.3.Project Background
  1.4.Purpose of the Business Requirements
  1.5.Business Goals/Objectives to be achieved
  1.6.Benefits/Rationale
  1.7.Stakeholders
  1.8.Dependencies on existing systems
  1.9.References
  1.10.Assumptions
2.Requirements Scope
  2.1.In Scope 
  2.2.Out of Scope
3.Functional Requirements
  3.1.Actor Profiles Specification
  3.2.Essential Use Case Diagram
  3.3.Essential Use Case Specifications
  3.4.Function Hierarchy Diagram	
  3.5.Function Definition Report	
  3.6.Business Rules	
4.Data Requirements	
  4.1.Data Architecture	
      4.1.1.Domain Class Diagram	
      4.1.2.Entity Relationship Diagram	
  4.2.Data Volumes	
  4.3.Data Conversion	
  4.4.Data Retention and Archiving	
  4.5.FOI/Privacy Implications	
  4.6.Data Definition Reports	
      4.6.1.Domain Class Definition Report	
      4.6.2.Entity Definition Report	
5.Non-Functional requirements
  5.1.Security Requirements	
      5.1.1.Authentication	
      5.1.2.Authorization and Access Controls	
      5.1.3.Information Security Classification and labeling	
  5.2.Availability Requirements	
  5.3.Usability Requirements	
  5.4.System Help Requirements	
  5.5.Performance Requirements 	
  5.6.Scalability Requirements	
      5.6.1.User Scalability	
      5.6.2.Application Scalability	
6.Interface Requirements	
  6.1.User Interface Requirements	
  6.2.System Interface Requirements	
7.Business Glossary	
```

[top](README.md)

