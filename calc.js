function  calc(){
	var n1=document.getElementById('num1').value

    var n2=document.getElementById('num2').value
    
    n1=parseFloat(n1)
    n2=parseFloat(n2)
                
    var a=document.getElementById('act').value
    var r=0

    if(a==1) r=n1+n2
    if(a==2) r=n1-n2
    if(a==3) r=n1*n2
    if(a==4){
    	
    if(n2==0){
    	alert("на 0 делить нельзя")
		document.getElementById("num2").value=""
		document.getElementById("num2").focus()
		}	

		else r=n1/n2
	}               
document.getElementById("result").value=r 
}