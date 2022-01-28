canvas=document.getElementById("screen");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_x=500;
rover_y=500;
marsArray=["marsey dude.jpg","marsy dude 2.jpg","mars.jpg","impasta.jpg","hey im diffrent.jpg"];
randomnumber=Math.floor(Math.random()*5);


mrs=marsArray[randomnumber];
rr="rover.png";

function add(){
 mars_image=new Image();
    mars_image.onload=upload_background;
    mars_image.src=mrs;
    
    rover_image=new Image();
    rover_image.onload=upload_rover;
    rover_image.src=rr;
    
}
function upload_background()
{
ctx.drawImage(mars_image,0,0,canvas.width,canvas.height);    
}
function upload_rover()
{
ctx.drawImage(rover_image,rover_x,rover_y,rover_width,rover_height);    
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    if (keypressed=='38'){
        up();
    }
    if (keypressed=='40'){
        down();
    }
       if (keypressed=='37'){
        left();
    }
       if (keypressed=='39'){
        right();
    }
    
}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
upload_background();
        upload_rover();}}

function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
upload_background();
        upload_rover();}}

function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
upload_background();
        upload_rover();}}

function right(){
    if (rover_x<=700){
        rover_x=rover_x+10;
upload_background();
        upload_rover();}}