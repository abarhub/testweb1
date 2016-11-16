/**
 * Created by Alain on 16/11/2016.
 */

angular.module('myApp', []);

angular.module('myApp').controller('MyControler',function(){

    var mv=this;

    mv.user={
        name:'john  doe   et  test',
        accountType: 'test',
        balance: 42000.45,
        lastLogin: new Date()
    };
});

angular.module('myApp').filter('capitalize',function(){

    return function(value){

        var mots=value.split(' ');

        var res=[];

        angular.forEach(mots,function(mot){
            if(mot.trim().length>0){
                var tmp=mot.trim();
                tmp=tmp.substring(0,1).toUpperCase()+tmp.substring(1).toLowerCase();
                res.push(tmp);
            }
        })

        return res.join(' ');
    }

});
