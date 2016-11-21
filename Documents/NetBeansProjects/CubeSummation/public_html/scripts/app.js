/* 
 * @@Author: Margarita Hoyos
 */

var app = angular.module("CubeSummation",[]);

app.controller("ctrlSummation", function($scope)
{
    $scope.result = 'searching...';

    $scope.matrix = [];
    $scope.start = { T : 2, N : 2, M : 5 };
    $scope.initializedMatriz = false;
    $scope.messages = "";
    $scope.input = "";
    //$scope.cases = [];
    
    $scope.init = function()
    {
        if(!$scope.initializedMatriz)
        {
            
            var opc = $scope.input.split("\n");
            console.log(opc);
            if(opc.length > 0)
            {
                $scope.start.T = opc[0];
                console.log("$scope.start.T " + $scope.start.T);
                if(validate("T"))
                {
                    console.log("validate T ");
                    var line = 1;
                    for( var i=0; i<$scope.start.T; i++ )
                    {
                        if(line < opc.length)
                        {
                            var N = opc[line].split(" ")[0];
                            var M = opc[line].split(" ")[1];
                            if( validate("M") && validate("N") )
                            {
                                console.log("validate M N ");
                                $scope.matrix = initMatrix(N);
                                console.log("line " + line);
                                for(var j = (line+1); j<=(M + line); j++ )
                                {
                                    console.log("j " + j + " " + opc[j]);
                                    var params = opc[j].split(" ");
                                    if( params[0] === "UPDATE" )
                                    {
                                        
                                        update(params[1], params[2], params[3], params[4]);
                                    }
                                    else
                                    {
                                        query(params[1], params[2], params[3], params[4], params[5], params[6]);
                                    }
                                }
                            }
                            line = (line + M + 1);
                        }
                    }
                    return "validate true";
                }
                
            }
            else
            {
                $scope.messages = "Please, write the case for solve it";
            }
        }
        else
        {
            return "initializedMatriz";
        }
    };
    
    var initMatrix = function(n)
    {
        var matrix = [];
        for(var i=1; i<=n; i++)
        {
            for(var j=1; j<=n; j++)
            {
                for(var k=1; k<=n; k++)
                {
                    var point =
                    {
                        x: i,y: j, z: k,
                        w: 0
                    };
                    console.log("N " + n);
                    matrix.push(point);
                }
            }
        }
        $scope.initializedMatriz = true;
        return matrix;
    };
    var validate = function(type)
    {
        var r = false;
        switch(type)
        {
            case "N":
                r = ($scope.start.N >= 1 && $scope.start.N <= 100);
                break;
            case "M":
                r = ($scope.start.M >= 1 && $scope.start.M <= 1000);
                break;
            default:
                r = ($scope.start.T >= 1 && $scope.start.T <= 50);
        }
        return r;
    };
    
    var update = function(x, y, z, w)
    {
        for(var i=0; i<$scope.matrix.length; i++)
        {
            var point = $scope.matrix[i];
            if( point.x === parseInt(x) && point.y === parseInt(y) && point.z === parseInt(z) )
            {
                $scope.matrix[i].w = parseInt(w);
                console.log("$scope.matrix[i].w " + $scope.matrix[i].w);
                break;
            }
        }
        
        $scope.messages += " UPDATE";
    };
    var query = function(x1, y1, z1, x2, y2, z2)
    {
        var summation = 0;
        for(var i=0; i<$scope.matrix.length; i++)
        {
            var point = $scope.matrix[i];
            if( (point.x >= x1 && point.x <= x2) && (point.y >= y1 && point.y <= y2) && (point.z >= z1 && point.z <= z2) )
            {
                summation += point.w;
            }
        }
        console.log("query " + summation);
        $scope.messages += "query " + summation;
        return summation;
    };
}); 