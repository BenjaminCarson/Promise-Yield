;(function( global ) 
{
	global.blc = global.blc || {};
	
	;(function( blc ) 
	{
	
		function extractNextGenVal ( gen , val )
		{
			var value = gen.next ( val );

			if (value.value)
			{
				value.value.then(function( val )
				{
					var value = extractNextGenVal ( gen , val );
				});
			}
		}
	
		blc.promiseYield = function( f )
		{ 
			var gen = f( );

			var value = extractNextGenVal ( gen );
		};
	}( global.blc ));
   

}( this ));