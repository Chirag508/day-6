<html>
	<head>
		
		<title>Demo Javascript</title>
		
		<script type="text/javascript">
			function demoInternalAlert(){
				alert("Internal Alert.");
			}
			
		function demoInternalConfirm(){
				if(confirm("cha!!!!!!!")){
					alert("haan meri jaan");
				}
				else{
					alert("jaNA!!!!!!!!");
				}
			}
			function demoInternalPrompt(){
				var fName=prompt("Enter Firstname Here..");
				var lName=prompt("Enter Lastname Here..");
				alert(fName+" "+lName);
			}

			function bodyBGGreen(){
				document.body.style.backgroundColor="Green";
			}
			function divBGGray(){
				document.getElementById("D1").style.backgroundColor="Gray";
			}

			function divBGDynamic(){
				document.getElementById("D1").style.backgroundColor=prompt("Enter color name here..");
			}
			function bodyBGDynamic(){
				document.body.style.backgroundColor=prompt("Enter color name here..");
			}

			function bodyBGCP1(){
				document.body.style.backgroundColor=document.getElementById("CP1").value;
			}
			function divBGCP2(){
				document.getElementById("D1").style.backgroundColor=document.getElementById("CP2").value;
			}
			function divheight(){
				document.getElementById("D1").style.height=prompt("Enter color name here..");
				document.getElementById("D1").style.width=prompt("Enter color name here..");
			}
		</script>
		<script src="scripts/demo.js" type="text/javascript"></script>
		<style type="text/css">
			body{background-color: rgba(218, 66, 149, 0.637);}
			div{background-color: rgb(105, 173, 230);height: 300px;width: 300px;}
		</style>
		
	</head>
	<body>
		<div id="D1">
			Hello Students
		</div>
		<hr/>
		<input type="button" value="Alert Inline" onclick="alert('Hello Guys')" />&nbsp;&nbsp;
		<input type="button" value="Confirm Inline" onclick="confirm('Are You Sure..??')" />&nbsp;&nbsp;
		<input type="button" value="Prompt Inline" onclick="prompt('Enter Firstname Here..')" />&nbsp;&nbsp;
		<hr/>
		<input type="button" value="Alert Internal" onclick="demoInternalAlert()" />&nbsp;&nbsp;
		<input type="button" value="Confirm Internal" onclick="demoInternalConfirm()" />&nbsp;&nbsp;
		<input type="button" value="Prompt Internal" onclick="demoInternalPrompt()" />&nbsp;&nbsp;
		<hr/>
		<input type="button" value="Alert External" onclick="demoExternalAlert()" />&nbsp;&nbsp;
		<input type="button" value="Confirm External" onclick="demoExternalConfirm()" />&nbsp;&nbsp;
		<input type="button" value="Prompt External" onclick="demoExternalPrompt()" />&nbsp;&nbsp;
		<hr/>
		<input type="button" value="Body Bg Green" onclick="bodyBGGreen()" />&nbsp;&nbsp;
		<input type="button" value="Div Bg Gray" onclick="divBGGray()" />&nbsp;&nbsp;
		<hr/>
		<input type="button" value="Body Bg Prompt" onclick="bodyBGDynamic()" />&nbsp;&nbsp;
		<input type="button" value="Div Bg Prompt" onclick="divBGDynamic()" />&nbsp;&nbsp;
		<hr/>
		<input type="color" id="CP1" onchange="bodyBGCP1()" />&nbsp;&nbsp;
		<input type="color" id="CP2" onchange="divBGCP2()" />&nbsp;&nbsp;
		<hr/>
		<input type="button" value="Body Bg Prompt" onclick="divheight()" />&nbsp;&nbsp;
		
	</body>
</html>