# <a id="1-SPEC>Devcc Architecture</a>

## <a id="CONSTRAINTS-AND-SCOPE">Constraints and Scope/a>

* Constraints
  * Max 8 hours

* Objective
  * To identify non-functional requirements in product backlog
  * Address the [documented concerns](README.md#CONCERNS) 
  * Give on overview 
  
* Scope  
  * Define a feasible development pipeline, which
    * uses state of the art tools
	* is "efficient"
	* can scale up

* Working methods
  * --> use bullet lists (to be transferred into product backlog)
  * --> if required Architecture may documented in more polished manner later
  * Tools
    * markdown
	* [Dia](http://en.wikipedia.org/wiki/Dia_%28software%29)
	* [ArgoUML](http://argouml.tigris.org/)


## <a id="CONCERNS">Concerns</a>

* An a professional developer uses the right tools for the right
  job. Installing and managing a large tool set may distract the
  attention from "programming" i.e. from the "real work". How can we
  avoid this in this exercise?
  
* I would like to get a "big picture" of the "developer work", and
  some pointers, how dig deeper on some subject. By the way, what
  these "subjects", any how (I am not sure that I know the before
  hand)
  
* Do we have to install, understand and use all development pipeline
  tools? Are all the tools equally important? What happens if we
  encounter problem with some tool, what do miss if I do not skip
  installing some tool?
  
* We are talking of a "development pipeline". Does this mean that the
  development work goes through some kind of steps. What are these
  steps, and how do they add value to the product being developed?
  

## Reference Architecture

[Continuous Delivery](http://en.wikipedia.org/wiki/Continuous_delivery)
[http://www.thoughtworks.com ](http://www.thoughtworks.com/continuous-delivery)
[Book](http://www.amazon.com/gp/product/0321601912)


![Continuous Delivery Process](http://upload.wikimedia.org/wikipedia/en/7/74/Continuous_Delivery_process_diagram.png)

 a set of validations through which a piece of software must pass on its way to release.
 
 * aiming at
   * short cycle time trough development pipe lin
 

 * continuous unit testing when developing
 * Compiled artifact repository, where compiled code, reports and metadata are managed
 * Commit , integration to main trunk (as opposed to creating branches, which are merged)
 * tested using several techniques, 
   * developer unit tests
   * quality control tools
   * automated acceptance testing, supported by [Continuous Integration](http://en.wikipedia.org/wiki/Continuous_integration)
   
   * potentially releasable
* smoke tests 
* User acceptace test
* Capasity testing

* Increasing confidence as build proceeds through the development pipeline steps
* Environments keep environments as production like
* Fast feedback if errors identified, stop the pipeline
 

## Developer Roles

The following picture shows **Developer Roles** identified in `DevCC` c

![Developer Roles](Roles.png)

* **Developer** : The role, which is being decomposed

  * **Analyst** : Role which is further being decomposed to  *Requirements Analyst*, and *Test Analyst*

    * **Requirements Analyst** : Developer analysing requirements, understand the business needs
  
    * **Test Analyst** : 
	
  * **Architect** : support as mediator between analysts and implementation developers
  
  * **User Interface Developer**: *implementation developer* responsible for user interface functionality

    * **User Interface Layout Developer**: *implementation developer*
        responsible for visual aspect of user interface, implement also unit
      tests for the code

  * **Backed Developer**: *implementation developer* responsible for
      integrating back end systems and datastores, implement also unit
      tests for the code
  
  * **Test Developer**: implement test, which are not unit tests, e.g. acceptance test implementation
  
  * **Infrastructure Developer**: Further decomposed to *Development
      Infrastructure Developer* and *Runtime Infrastructure Management
      Developer*

  * **Development Infrastructure Developer**: deliver environment & configuration for *development*

  * **Runtime Infrastructure Management Developer**: deliver environment & configuration for *runtime*


### Methodologies, Technologies, Tools

* **Requirements Analyst** 
  * **Methodologies**
    * [INVEST requirements](http://en.wikipedia.org/wiki/INVEST_%28mnemonic%29)
  * **Technologies**
  * **Tools**
    * [Free Twitter Bootstrap 3.0 UI Mockup Templates for Keynote and PowerPoint](http://keynotopia.com/bootstrap/)
	* [Office Tools](http://office.microsoft.com/en-us/) or [LibreOffice](https://www.libreoffice.org/)
  
* **Test Analyst** 
  * **Methodologies**
	* [Behavior-driven development](http://en.wikipedia.org/wiki/Behavior-driven_development)
	* [Acceptance Testing](http://en.wikipedia.org/wiki/Acceptance_testing)
  * **Technologies**
  * **Tools**
    * [Cucumber](http://cukes.info/)

* **Architect** : support as mediator between analysts and implementation developers
  * **Methodologies**
  * **Technologies**
  * **Tools**
	* [Dia](http://en.wikipedia.org/wiki/Dia_%28software%29)
	* [ArgoUML](http://argouml.tigris.org/)

* **User Interface Developer**
  * **Methodologies**
    * [Unit testing](http://en.wikipedia.org/wiki/Unit_testing)
    * [Unit testing](http://en.wikipedia.org/wiki/Unit_testing)
  * **Technologies**
	* [css](http://en.wikipedia.org/wiki/Cascading_Style_Sheets)
	* [html](http://en.wikipedia.org/wiki/HTML)
    * [Javascript](http://en.wikipedia.org/wiki/JavaScript)
  * **Tools**
	* [Bower](https://github.com/bower/bower)
	* [AngularJS Framework](http://angularjs.org/)
    * [Twitter Bootstrap](http://getbootstrap.com/)
	* [Karma Test Runner](http://karma-runner.github.io/0.10/index.html)
	* [Mocha Unit test framework](http://visionmedia.github.io/mocha/)
	* [Chai assertion libray](http://chaijs.com/)

* **User Interface Layout Developer**
  * **Methodologies**
  * **Technologies**
	* [css](http://en.wikipedia.org/wiki/Cascading_Style_Sheets)
	* [html](http://en.wikipedia.org/wiki/HTML)
  * **Tools**
    * [Twitter Bootstrap](http://getbootstrap.com/)

* **Backed Developer**
  * **Methodologies**
  * **Technologies**
    * [Javascript](http://en.wikipedia.org/wiki/JavaScript)
  * **Tools**
	* [Bower](https://github.com/bower/bower)
    * [NodeJs](http://nodejs.org/)
	* [Node Package Manager](https://www.npmjs.org/)
	* [ExpressJs](http://expressjs.com/guide.html)

* **Test Developer**
  * **Methodologies**
    * [Continuous Integration](http://en.wikipedia.org/wiki/Continuous_integration)
  * **Technologies**
  	* [Ruby](https://www.ruby-lang.org/en/)
  * **Tools**
    * [Cucumber](http://cukes.info/)
	* [Selenium](http://docs.seleniumhq.org/)
	* [Jenkins](http://jenkins-ci.org/)

* **Development Infrastructure Developer**
  * **Methodologies**
  * **Technologies**
   	* [Ruby](https://www.ruby-lang.org/en/)
  * **Tools**
    * [Node Version Manager](https://github.com/creationix/nvm)
	* [Groom your app’s Ruby environment](https://github.com/sstephenson/rbenv)

* **Runtime Infrastructure Management Developer**
  * **Methodologies**
  * **Technologies**
  	* [Ruby](https://www.ruby-lang.org/en/)
  * **Tools**
    * [Configuration Management Tool Chef](http://docs.opscode.com/)
      * [berkshelf](http://berkshelf.com/)
	  * [Opscode Community Cookbooks](http://community.opscode.com/)


### Architectural Decisions

* Security testing, performance testing not covered here

### Concerns addressed


## System Architecture

![Systems Architecture](SystemArchitecture.jpg)


### Architectural Decisions

### Concerns addressed




## Logical Architecture

### Architectural Decisions

## Development Architectures

### Architectural Decisions

### Concerns addressed




[up](../README.md) [resume](../README.md#1-DEFINE-ARCHITECTURE) [top](README.md)

