try {
    var tl = !!top.location.hostname;
    if(!tl) {
    	//For safari
    	top.location.replace(document.location);
    }
} catch(ex) {
	//For firefox and chrome
    top.location.replace(document.location);
}