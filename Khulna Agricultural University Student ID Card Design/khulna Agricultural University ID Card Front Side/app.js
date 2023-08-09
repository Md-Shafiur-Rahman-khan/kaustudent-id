//function to toogle the name of the button
let btnPreview = document.querySelector('button');
btnPreview.addEventListener('click', () => {
    if(inputfields["name"].value != "" 
    && inputfields["Faculty"].value != ""
    && inputfields["ID No"].value != ""
    && inputfields["Reg No"].value != ""
    && inputfields["Session"].value != ""
	&& inputfields["Mobile No"].value != ""
	&& inputfields["D.O.B."].value != ""
	&& inputfields["Blood Group"].value != ""
    && inputfields["Hall Name"].value != ""){
        if(btnPreview.innerText == "Edit"){
            btnPreview.innerText = "Preview";
        }
        
        else{
            btnPreview.innerText = "Edit";
        }
    }
    
} );



//main work
const image = document.querySelector('#file-ip-1-preview');
const output = document.querySelector('.output');
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const inputfields = document.querySelector('.input-fields');


function toggle2(){
    output2.innerHTML=``
                 };




function toggle(){
         output.innerHTML=`
		 
		 <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["name"].value} </p>
         <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["Faculty"].value} </p>
         <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["ID No"].value} </p>
         <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["Reg No"].value} </p>
		 <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["Mobile No"].value} </p>
		 <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["D.O.B."].value} </p>
         <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["Blood Group"].value} </p>
         <p style="text-transform: uppercase; font-weight: bold; font-family: Georgia, 'Times New Roman', Times, serif;">:  ${inputfields["Hall Name"].value} </p>
		 `
                      };
					  
					  
				  
					  



function toggle1(){
            output1.innerHTML=`
          <p style="color: red; text-align: center; font-weight: bold;">${inputfields["Session"].value}</p>`
   
           };
   
   


    function showPreview(event){
        if(event.target.files.length > 0){
          var src = URL.createObjectURL(event.target.files[0]);
          var preview = document.getElementById("file-ip-1-preview");
          preview.src = src;
          preview.style.display = "block";
        }
      }