
Tests.test_QuickSortNumeric = function()
{
	log.debug("Hey, I am about to run test_QuickSortNumeric, here we go...");
	var arry = [10, 23, 49, 23, -93, 0, -1, 45, 11, 89,78, 2, 5, 48, 20, 44, 49, 123, 6, 1];

	qsort(arry, 0, (arry.length-1) );
	
	return JUAssert.equals(arry,[-93,-1,0,1,2,5,6,10,11,20,23,23,44,45,48,49,49,78,89,123]);
}

Tests.test_SomethingWrong = function()
{
	log.warn("This test doesn't do anything but fail... here we go");
	log.error("This is an error in the log, but now here comes the JUAssert.fail()");
	return JUAssert.fail();
}

Tests.test_QuickSortAlpha = function()
{
	arry = ["hello", "there", "my", "name", "is", "rob","what", "is", "your", "name", "again", "hi"];
	
	qsort(arry, 0, (arry.length-1) );
	
	return JUAssert.equals(arry,["again","hello","hi","is","is","my","name","name","rob","there","what","your"]);
}

