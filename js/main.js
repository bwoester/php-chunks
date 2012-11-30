if (!!window.EventSource)
{
    var source = new EventSource('chunks.php');
    
    source.addEventListener('message', function(e) {
        //console.log(e.data);
        $("#sseList").prepend('<li>'+e.data+'</li>');
    }, false);
    
    source.addEventListener('open', function(e) {
        // Connection was opened.
    }, false);
    
    source.addEventListener('error', function(e) {
        if (e.readyState == EventSource.CLOSED) {
            // Connection was closed.
        }
    }, false);

}
else
{
    console.log("EventSource not available");
    // Result to xhr polling :(
}
