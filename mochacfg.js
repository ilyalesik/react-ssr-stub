var imageFunction = function(){ return null; };
require.extensions['.png'] = imageFunction;
require.extensions['.jpg'] = imageFunction;
require.extensions['.css'] = imageFunction;
require.extensions['.scss'] = imageFunction;