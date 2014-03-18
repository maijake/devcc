"use strict";

describe( "Sinon stub example", function() {

    // ------------------------------------------------------------------
    // SUT

    var mySVC = {
	// Two language
	hello: function () { return "Hello world"; } 
	, hei: function () { return "Hei maailma"; } 
    }
    

    var myCTRL = 
	{ 
	    // Object state
	    lang : 'fi'

	    , setSVC: function( svc ) { this.svc = svc }


	    // Interface
	    , meet: function() { return this.lang == 'fi' ? this.svc.hei() : this.svc.hello(); }
	};

    // ------------------------------------------------------------------
    // Test orginial implementation

    describe( "mySVC default implementation", function() {

	 it( "should greet on 'hello'", function() {
	     mySVC.hello().should.eql( "Hello world" );
	 });

	 it( "should greet on 'hei'", function() {
	     mySVC.hei().should.eql( "Hei maailma" );
	 });

    });

    // Components needed to make assertions
    describe( "myCTRL default", function() {
	
	beforeEach( function() {
	    myCTRL.setSVC( mySVC );
	});

	it( "should have default lang 'fi''", function() {
	     myCTRL.lang.should.eql( "fi" );
	});


	it( "should use default greet 'hei'", function() {
	    myCTRL.meet().should.eql( "Hei maailma" );
	});

    }); //     describe( "myCTRL default", function() {

    // ------------------------------------------------------------------
    // Using sandbox

    describe( "stub SVC", function() {

	// reset automagically so if you don’t want to manually restore
	var sandbox;

	// Stub created 
	var stub_svc;

	beforeEach( function() {

	    // Create a sanbox 
	    sandbox = sinon.sandbox.create();

	    // Stub service
	    stub_svc = sandbox.stub( mySVC );
	});


	afterEach( function() {

	    // Reset after each test
	    sandbox.restore();
	});


	// ------------------------------------------------------------------
	// Demo that stub spies are counting

	it( "should have 'hello' stubbed", function() {
	    // Run action
	    mySVC.hello();
	    // Verify - just to see that spy works
	    stub_svc.hello.callCount.should.eql( 1 );
	});

	describe( "using default lang ('fi')", function() {

	    it( "should call FInnish greet", function() {

		// Act
		myCTRL.meet();

		// Calls finnish greet
		stub_svc.hei.callCount.should.eql( 1 );
		// Does NOT call english greet
		stub_svc.hello.callCount.should.eql( 0 );

	    });

	});

	describe( "using lang='en'", function() {

	    // Temp variable to save the default lang
	    var defaultLang;

	    beforeEach( function() {

		// Remember - so that I can restore it
		defaultLang = myCTRL.lang;

		// Change language
		myCTRL.lang = 'en'

	    });

	    afterEach( function() {
		myCTRL.lang = defaultLang;
	    });

	    it( "should call english greet", function() {

		// Act
		myCTRL.meet();

		// Does NOT call finnish greet
		stub_svc.hei.callCount.should.eql( 0 );
		// Should call english greet
		stub_svc.hello.callCount.should.eql( 1 );
	    });
	    
	}); // 	describe( "using lang='en'", function() {
	
    }); //     describe( "stubbed api", function() {

});
