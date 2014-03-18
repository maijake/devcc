"use strict";

describe( "render-context", function() {

    // inject to access SUT
    var test_injector;

    // System Under Test
    var sutFunction;

    // name of the SUT
    var sutModule="Demo";
    var sutName="RenderContext";
    
    // ------------------------------------------------------------------
    // Interface to angular

    before( function() {
	// Inject main module & services
	test_injector = angular.injector(['ng', sutModule ]);
	assert( test_injector, "Could not access test_injector" );
	sutFunction = test_injector.get( sutName );
    });

    it("should be accessible in module " + sutModule  , function() {
	should.exist( sutFunction );
    });

    describe( sutName, function() {

	it("should be an Function",  function() {
	    sutFunction.should.be.an( 'Function' );
	});

    });


    // ------------------------------------------------------------------
    // sutFunction context && create subObject

    describe( sutName + " function", function() {

	// reset automagically so if you don’t want to manually restore
	var sandbox;

	// original from injector
	var  request_context_name = "requestContext";
	var request_context;

	// used by render context
	var stubbed_request_context;

	// place holder for the object create by sutFunction
	var sutObject;

	// sanbox

	beforeEach( function() {
	    
	    // Access the real thing
	    request_context = test_injector.get( request_context_name  );

	    // Create a sanbox 
	    sandbox = sinon.sandbox.create();

	    // Stub the service
	    // sinon.stub( request_context, "getNextSection" );

	    // stubbed_request_context = sandbox.stub( request_context );
	    stubbed_request_context = sandbox.stub( request_context );

	    // extend stub: return a value
	    stubbed_request_context.getNextSection.onCall( 0 ).returns( "BBB" );

	    // !!!! Should work - could not make it !!!!!
	    // extend stub: return a value
	    // stubbed_request_context.getNextSection.returns( "BBB" );


	    // sutFuction  creates sutObject
	    sutObject = sutFunction( stubbed_request_context, "a.b.c", [] );
	    
	});
	
	afterEach( function() {
	    // Reset after each test
	    sandbox.restore();

	});

	it("should have access to " +  request_context_name , function() {
	    should.exist( request_context );
	});

	it("should have access to stubbed " +  request_context_name , function() {
	    should.exist( stubbed_request_context );
	});

	it("should create sutObject" , function() {
	    should.exist( sutObject );
	});


	// ------------------------------------------------------------------
	// sutObject signature

	describe( "sutObject",  function() {

	    it("should implement 'getNextSection' -function" , function() {
		sutObject.should.have.property( 'getNextSection' ).to.be.a( 'Function');
	    });
	    it("should implement 'isChangeLocal' -function" , function() {
		sutObject.should.have.property( 'isChangeLocal' ).to.be.a( 'Function');
	    });
	    it("should implement 'isChangeRelevant' -function" , function() {
		sutObject.should.have.property( 'isChangeRelevant' ).to.be.a( 'Function');
	    });
	});

	// ------------------------------------------------------------------
	// sutObject.getNextSection

	describe( "sutObject.getNextSection",  function() {

	    it("should call requestContext.getNextSection" , function() {
		var section = sutObject.getNextSection();
		section.should.eql( "BBB" );
		stubbed_request_context.getNextSection.callCount.should.eql( 1 );
	    });
	});

    }); 


}); // 
