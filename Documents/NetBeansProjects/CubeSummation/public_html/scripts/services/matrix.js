/* 
 * @Margarita Hoyos
 */


app.service('GenerateMatrix', function()
{
    var matrix = [];
    var messages = "";
    var summation = 0;
    
    this.initMatrix = function(n)
    {
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
                    //console.log("point (" + point.x + ", " + point.y + ", " + point.z + ")");
                    matrix.push(point);
                }
            }
        }
    };
    
    this.getMatrix = function()
    {
        return matrix;
    };
    
    this.update = function(x, y, z, w)
    {
        for(var i=0; i<matrix.length; i++)
        {
            var point = matrix[i];
            if( point.x === parseInt(x) && point.y === parseInt(y) && point.z === parseInt(z) )
            {
                matrix[i].w = parseInt(w);
                break;
            }
        }
    };
    
    this.query = function(x1, y1, z1, x2, y2, z2)
    {
        summation = 0;
        for(var i=0; i<matrix.length; i++)
        {
            var point = matrix[i];
            if( (point.x >= x1 && point.x <= x2) && (point.y >= y1 && point.y <= y2) && (point.z >= z1 && point.z <= z2) )
            {
                summation += point.w;
            }
        }
        messages = "\n QUERY (" + x1 + "," + y1 + "," + z1 + ") (" + x2 + "," + y2 + "," + z2 + ") => " + summation;
        return messages;
    };
    
    this.getSummation = function()
    {
        return summation;
    };
    
    this.reset = function()
    {
        matrix = [];
        messages = "";
        summation = 0;
    };
});