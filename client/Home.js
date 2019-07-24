import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './assets/main.css'

class EZT extends Component{
      uploadQuestionsXML = async (e)=>{
         e.preventDefault();
         let formData = new FormData()
           formData.set('uploaded_xlsx', e.target.elements.uploaded_xlsx.files[0])
           const result = await axios.post('/api/upload-xlsx', formData, {
               headers: {
                'content-type': 'multipart/form-data'
                }
              }
           )
           console.log(result.data);
         document.getElementById('show_xml').value = result.data.xml;
      }
      copyToClipboard = (e)=>{
  	  	 console.log(e);
  	  	 e.target.innerHTML = "copied";
  	  	 let a = document.getElementById('show_xml');copy_clipboard
  	  	     a.select();
  	  	     document.execCommand("copy");
  	  	 setTimeout(()=>{
              document.getElementById('copy_clipboard').innerHTML = "copy to clipboard";
  	  	 }, 200);
  	  }
      render(){
          return (
            <Fragment>
 	           <main className="main-content-box">
 	            	 <div className="flex main-content-wrapper">
 		        	     <div className="flex space-bw main-content">
 		        	     <div className="ques-table">
                   <form noValidate  method="post" encType="multipart/form-data" onSubmit={this.uploadQuestionsXML}>
                     <table className="padding-botm-8">
                      <tbody>
 										   <tr className="margin-top-5">
 									        <td><input type="file" className="custom-file-input" id="uploaded_xlsx" name="uploaded_xlsx" /></td>
 										    <td><button  className="btn-default margin-top-20">upload</button></td>
 									       </tr>
 									       <tr className="margin-top-5">
 									        <td><button  className="btn-default margin-top-20" id="copy_clipboard" onClick={this.copyToClipboard}>copy to clipboard</button></td>
 									       </tr>
 									     </tbody>
 										</table>
 								   </form>
 			        	 	  </div>
                    <div>
                    	<textarea id="show_xml" rows="30" cols="80" placeholder="Output as XML"></textarea>
                    </div>

 		        	      </div>
 		             </div>
 	           </main>
            </Fragment>
          )
      }
}

export default EZT;
