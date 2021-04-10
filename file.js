//function f(){
            //var r = Math.round(Math.random * 240 + 14);
            //var g = Math.round(Math.random * 240 + 14);
            //var b = Math.round(Math.random * 240 + 14);
            //var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
            //return color;
        //}
        var x = Math.random()
        if(x<=0.5){
            var a = Math.floor(Math.random()*360)
            alert('You will get the angle of '+a+' degrees')
        }

        function draw(n){
            var canvas = document.getElementById('imgCanvas');
            var ctx = canvas.getContext('2d');
            var rect = canvas.getBoundingClientRect();
            var conx = n.clientX - rect.left;
            var cony = n.clientY - rect.top;
            var u =   Math.floor(Math.random()*50);
            var m =   Math.floor(Math.random()*50);
            ctx.fillStyle = '#'+ Math.floor(Math.random()*16777215).toString(16);
            ctx.beginPath();
            if(x<=0.5){
                ctx.arc(conx,cony,u,0,Math.PI*a/180); 
            }else{
                ctx.fillRect(conx,cony,m,u)
            }
            ctx.fill();
}

