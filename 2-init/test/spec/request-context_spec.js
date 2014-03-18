"use strict";

describe( "request-context -service", function() {

    // inject to access SUT
    var test_injector;

    // System Under Test
    var sutObject;


    // name of the SUT
    var sutModule="Demo";
    var sutName="requestContext";

    before( function() {
	// Inject main module & services
	test_injector = angular.injector(['ng', sutModule ]);
	assert( test_injector, "Could not access test_injector" );
	sutObject = test_injector.get( sutName );
    });

    it("should be accessible in module " + sutModule  , function() {
	should.exist( sutObject );
    });


    describe( sutName, function() {
	
	it("should be an object",  function() {
	    sutObject.should.be.an( 'Object' );
	});

	it("should define function 'getNextSection'",  function() {
	    sutObject.should.have.property( 'getNextSection' ).to.be.a( 'Function' );
	});

	it("should define function 'getParam'",  function() {
	    sutObject.should.have.property( 'getParam' ).to.be.a( 'Function' );
	});

	it("should define function 'getParamAsInt'",  function() {
	    sutObject.should.have.property( 'getParamAsInt' ).to.be.a( 'Function' );
	});

	it("should define function 'setContext'",  function() {
	    sutObject.should.have.property( 'setContext' ).to.be.a( 'Function' );
	});

	it("should define function 'startsWith'",  function() {
	    sutObject.should.have.property( 'startsWith' ).to.be.a( 'Function' );
	});



    }); // sutName

    describe( "After " + sutName + ".setContext", function() {

	var action="a.b.c"

	beforeEach( function() {
	    sutObject.setContext( action );
	});

	describe( sutName + ".getNextSection", function() {

	    it("should return first section for empty prefix",  function() {
		sutObject.getNextSection( "" ).should.eq( "a" );
	    });

	    it("should return 2nd section",  function() {
		sutObject.getNextSection( "a" ).should.eq( 'b' );
	    });

	    it("should return 3rd section",  function() {
		sutObject.getNextSection( "a.b" ).should.eq( 'c' );
	    });

	    it("should return null for full prefix",  function() {
		should.equal( sutObject.getNextSection( "a.b.c" ), null );
	    });

	    it("should return null for prefix after full prefix",  function() {
		should.equal( sutObject.getNextSection( "a.b.c.d" ), null );
	    });


	    it("should return null if not a prefix",  function() {
		should.equal( sutObject.getNextSection( "xa.b" ), null );
	    });

	    it("should return null if not a proper prefix",  function() {
		should.equal( sutObject.getNextSection( "aa.b" ), null );
	    });
	}); // getNextSection

	describe( sutName + ".startsWith", function() {


	    it("should return true if context action start with prefix",  function() {
		sutObject.startsWith( 'a' ).should.eq( true );
	    });

	    it("should return false if context action doe not start with prefix",  function() {
		sutObject.startsWith( 'b' ).should.eq( false);
	    });

	    it("should return false if prefix is too long to start the action",  function() {
		sutObject.startsWith( 'aa' ).should.eq( false);
	    });

	    
	});  // .getNextSection
    }); // After setContext



}); // 
