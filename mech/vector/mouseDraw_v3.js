function addPoint(events, points){
                var context = events.getContext();
                var drawingPos = events.getMousePos();

                if (drawingPos !== null) {
                    points.push(drawingPos);
                }
            }

            function fixVector(events, points){
                            var context = events.getContext();
                            var drawingPos = events.getMousePos();

                            if (drawingPos !== null) {
                                //points.push(drawingPos);
                                topX[thisVector] = drawingPos.x;
                                //alert("hiya "+topX[thisVector]+" "+thisVector);
                                topY[thisVector] = drawingPos.y;
                            }
                        }

            function fixVectorT(events, points){
                          var context = events.getContext();
                          var drawingPos = events.getTouchPos();

                          if (drawingPos !== null) {
                                            //points.push(drawingPos);
                              topX[thisVector] = drawingPos.x;
                                            //alert("hiya "+topX[thisVector]+" "+thisVector);
                              topY[thisVector] = drawingPos.y;
                                        }
                                    }

            function drawPath(canvas, points, canvasImg){
                var context = canvas.getContext("2d");

                // clear canvas
                context.clearRect(0, 0, canvas.width, canvas.height);

                // redraw canvas before path
                context.drawImage(canvasImg, 0, 0, canvas.width, canvas.height);

                // draw patch
                context.beginPath();
                context.lineTo(points[0].x, points[0].y);
                for (var n = 1; n < points.length; n++) {
                    var point = points[n];
                    context.lineTo(point.x, point.y);
                }
                context.stroke();
            }


            function getCanvasImg(canvas){
                var img = new Image();
                img.src = canvas.toDataURL();
                return img;
            }

            window.onload = function(){
                var events = new Events("myCanvas");
                var canvas = events.getCanvas();
                var context = events.getContext();
                var isMouseDown = false;
                var canvasImg = getCanvasImg(canvas);
                var points = [];
                findVector();

                document.getElementById("saveButton").addEventListener("click", function(evt){
                    // open new window with saved image so user
                    // can right click and save to their computer
                    window.open(canvas.toDataURL());
                }, false);

                // initialize drawing params
                var red = 0;//document.getElementById("red").value;
                var green = 0;//document.getElementById("green").value;
                var blue = 0;//document.getElementById("blue").value;
                var size = 2;//document.getElementById("size").value;

                canvas.addEventListener("touchmove", function(){
                    var touchPos = events.getTouchPos();

                    if (touchPos !== null) {
                        var touchX = touchPos.x - 20;
                        var touchY = touchPos.y - 50;

                        //message = "Triangle touch position: " + touchX + "," +touchY;
                        fixVectorT(events, points);
                        plotVector();
                    }
                });

                canvas.addEventListener("mousedown", function(){
                    var drawingPos = events.getMousePos();

                    // update drawing params
                    red = 0;//document.getElementById("red").value;
                    green = 0;//document.getElementById("green").value;
                    blue = 0;//document.getElementById("blue").value;
                    size = 2;//document.getElementById("size").value;

                    // start drawing path
                    context.strokeStyle = "rgb(" + red + "," + green + "," + blue + ")";
                    context.lineWidth = size;
                    context.lineJoin = "round";
                    context.lineCap = "round";
                    //addPoint(events, points);//********************
                    fixVector(events, points);//***
                    isMouseDown = true;
                }, false);

                canvas.addEventListener("mouseup", function(){
                    isMouseDown = false;
                    //if (points.length > 0) {//*********************
                    //    drawPath(this, points, canvasImg);
                    //    // reset points
                    //    points = [];
                    //}
                    plotVector();
                    canvasImg = getCanvasImg(this);
                }, false);

                canvas.addEventListener("mouseout", function(){
                    if (document.createEvent) {
                        var evt = document.createEvent('MouseEvents');
                        evt.initEvent("mouseup", true, false);
                        this.dispatchEvent(evt);
                    }
                    else {
                        this.fireEvent("onmouseup");
                    }
                }, false);

                events.setStage(function(){
                    if (isMouseDown) {
                        //addPoint(this, points);//*****************
                        //drawPath(canvas, points, canvasImg);//*******************
                        fixVector(events, points);//***
                        plotVector();
                    }
                });
            };
