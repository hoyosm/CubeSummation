/* 
 * @@Author: Margarita Hoyos
 */

app.controller("ctrlSummation", function($scope, GenerateMatrix)
{
    $scope.matrix = [];
    $scope.start = { T : 0, N : 0, M : 0 };
    $scope.initializedMatriz = false;
    $scope.messages = "";
    $scope.input = "";
    
    $scope.init = function()
    {
            $scope.messages = "";
            var opc = $scope.input.split("\n");
            if(opc.length > 1)
            {
                $scope.start.T = opc[0];
                if(validate("T"))
                {
                    var line = 1;
                    for( var i=0; i<$scope.start.T; i++ )
                    {
                        if(line < opc.length)
                        {
                            var MN = opc[line].split(" ");
                            $scope.start.N = parseInt(MN[0]);
                            $scope.start.M = parseInt(MN[1]);
                            if( validate("M") && validate("N") )
                            {
                                GenerateMatrix.reset();
                                GenerateMatrix.initMatrix($scope.start.N);
                                $scope.matrix = GenerateMatrix.getMatrix();
                                
                                for(var j = (line+1); j<=($scope.start.M+line); j++ )
                                {
                                    var params = opc[j].split(" ");
                                    if( params[0] === "UPDATE" )
                                    {
                                        GenerateMatrix.update(params[1], params[2], params[3], params[4]);
                                    }
                                    else if( params[0] === "QUERY" )
                                    {
                                        $scope.messages += GenerateMatrix.query(params[1], params[2], params[3], params[4], params[5], params[6]);
                                    }
                                }
                            }
                            else
                            {
                                $scope.messages += "M and N arn't valid values M = " + $scope.start.M + " N = " + $scope.start.N;
                            }
                            line = (line+$scope.start.M+1);
                        }
                    }
                }
                
            }
            else
            {
                $scope.messages = "Please, write the case for solve it";
            }
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
}); 
