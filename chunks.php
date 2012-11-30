<?php

/**
 * Constructs the SSE data format and flushes that data to the client.
 *
 * @param string $id Timestamp/id of this connection.
 * @param string $msg Line of text that should be transmitted.
 */
function sendMsg( $msg )
{
  echo "data: $msg" . PHP_EOL;
  echo PHP_EOL;
  flush();
}

while (@ob_end_clean());

header("Cache-Control: no-store, no-transform");
header("Content-Type: text/event-stream");

do
{
    set_time_limit( 5 );
    sendMsg( date("c") );
    sleep(1);
} while( true );
