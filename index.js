function receivesAFunction(fctn){
    fctn()
};

function returnsANamedFunction(){
   return function namedFctn(){"see its named"};
};
function returnsAnAnonymousFunction(){
    return function(){'anon'};
};