/**
 * Created by Alain on 16/11/2016.
 */

angular.module('myApp', []);

angular.module('myApp').controller('MyControler',function(){

    var mv=this;

    mv.user={
        name:'john doe',
        accountType: 'test',
        balance: 42000.45,
        lastLogin: new Date()
    };
});

angular.module('myApp').filter('capitalize',function(){



});
