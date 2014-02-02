# <a id="0-WHY-VCS">Why version control systems </a>

## Reasons for using version control systems

Some reasons for using version control systems:

* **undo changes**: its always helpful to go back (or at least to have
  to option to to go back) if a future revision of your application
  doesn’t work as expected after a change
  
* **concurrent file editing**: vcs system help to resolve conflicts,
  when multiple developers need to edit the same file. A conflict may
  be resolved beforehand using by **locking** (i.e. vcs allows only
  one developer modify a file at a time) or by afterwards by
  **merging** (i.e. when vcs detects that a conflict has occurred and
  helps in merging the conflicting changes). The merge may be done
  **automatically** (if concurrent changes are in different part of a
  file), or may **manual assistance** (if the changes affect the part
  of the file).
  
* **tagging**/**labeling**: the ability to create a snapshot of the
    codebase at any given moment. The tool allows to go resume the
    tagged -state, in any later time.
	
* **collaboration**: multiple developers share their work in a common
    repository, which vcs manages 
	
* supports **branching**: enables developers to work parallel in parts
    of software. For example, parallel working is initiated, when a
    version of a software product is released, and its development
    continues.
  
See more details in
[wiki article on revision control systems](http://en.wikipedia.org/wiki/Revision_control)

### Distributed or centralized version control system






[top](../README.md)  [resume](../README.md#0-SETUP-DEVCC) 

