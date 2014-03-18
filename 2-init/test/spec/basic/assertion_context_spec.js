"use strict";

describe( "Unit test context", function() {

    // Components needed to make assertions
    describe( "assertion framework", function() {

	 it( "should have chai assert framework", function() {
	     assert( true, "chai assert missing" );
	 });

	 it( "should have 'should'  assertion framework", function() {
	     should.exist( assert );
	 });

	 it( "should have 'expect'  assertion framework", function() {
	     should.exist( assert );
	 });

    });

    // ------------------------------------------------------------------
    // Three assertion frameworks

    describe( "three ways to do assertions", function() {

	it( "should assertion", function() {
	    var i=5;
	    i.should.eq( 5 );
	});

	it( "expect assertion", function() {
	    var i=5;
	    expect( i ).eql( 5 );
	});
	
	it( "assert", function() {
	    var i=5;
	    assert( i == 5, "i was NOT 5" );
	});
	
    });

    describe( "using done", function() {

	it( "should work in synchronous case", function( done ) {
	    var i=1;
	    i.should.eq( 1 );
	    done();
	});


	it( "should work in asynchronous case", function( done ) {
	    var i=1;

	    setTimeout( 
		// anonymous function
		function() {
		    // i will change after delay
		    i = 2;
		    i.should.eq( 2 );
		    // indicates test finihsed
		    done();
		}, 
		// delay 50 ms
		50 
	    );

	    // 
	    i.should.eq( 1 );
	});


    });

});
