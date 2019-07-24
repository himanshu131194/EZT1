import formidable from 'formidable';
import uuidv4 from 'uuid/v4';
import XLSX from 'xlsx';

let counterHint = 0;
let reverse = false;

function internalCategories(type, data){
    return `<internal_category>
                <catid>13570164220533888</catid>
                <title><![CDATA[${type}: ${data}]]></title>
            </internal_category>`;
}


function generateHints(data){
    counterHint++;
    return `<hint>
             <name>hint #${counterHint}</name>
             <type>html</type>
             <value><![CDATA[${data}]]></value>
            </hint>`;

}

function questionProperties(solution){
   return `<questionProperties>
           <property name="pageTag" type="string" value="" />
           <property name="customType" type="string" value="" />
           <property name="completeIncompleteGrading" type="string" value="false" />
           <property name="instructor_info" type="string" value="" />
           <property name="forceManualScoring" type="string" value="automatic" />
           <property name="problemSolution" type="string" value="${solution}" />
           <property name="audioPlayerPosition" type="string" value="above" />
           <property name="useCommonFeedback" type="string" value="true" />
           <property name="aggregatedGrading" type="string" value="false" />
         </questionProperties>`;
}

function rootXML(categories, questionData, commonFeedValue, quesMeta, questionProperties, questionHintValue, randomVariables, listAnswers){
   let commonFeed = '';
   if(commonFeedValue!=='')
      commonFeed = `<commonFeedback><![CDATA[${commonFeedValue}]]></commonFeedback>`;
   let questionStem = `<worksheet><stem><![CDATA[${questionData}]]></stem>${commonFeed}</worksheet>`;

   return `<questionSet><question>
               <format>1</format>
               <ezid>13570164500387354</ezid>
               <version>1561981908321</version>
               <title><![CDATA[Problem ${quesMeta['qtitle']}]]></title>
               <type>${quesMeta['qtype']}</type>
               ${categories}
               ${randomVariables}
               ${questionProperties}
               ${questionStem}
               ${questionHintValue}
               ${listAnswers}
             </question></questionSet>`;
}

function imageAndMmlCover(data){
         console.log(data)
         let k = data.split('.');
         let a = k.pop();
         let b = k.join('');
         if(a=='mml'){
            return "%" + "media:" + b + "."+ a+"%"  ;
            //return `<p>&nbsp;</p><p>${result}</p><p>&nbsp;</p>`;
         }else
            return "%" + "media:" + b + "_"+ a + ".ext"+"%";
}


function splitImageAndMml(str){
       str = str.split('>>');
       //console.log(str);
       let response = '';
       if(str.length>1){
         let media = imageAndMmlCover(str[0]);
             str[0] = imageAndMmlCover(str[0]);
       }

       //check for new line
       let splitter = reverse ? '<<i:' : '<<n:';
       for(let x=0; x<str.length; x++){
           let ele = str[x].split(splitter);
           if(ele.length>1){
              ele[1] = reverse ? imageAndMmlCover(ele[1]) : `<p>&nbsp;</p><p>${imageAndMmlCover(ele[1])}</p><p>&nbsp;</p>`;
              str[x] = ele[0]+ele[1];
           }
       }
       for(let y of str){
           response += y;
       }
       return response;
}


function imageAndMmlgenerate(type, data){
       let result = '';
       if(type==1 || type==0){
          result =  type==0 ? `<p>&nbsp;</p><p>${imageAndMmlCover(data)}</p><p>&nbsp;</p>` : `<p>${imageAndMmlCover(data)}</p>`;
       }else{
           let resultString = data.split('<<i:');
           if(resultString.length==1){
              resultString = data.split('<<n:');
              reverse = true;
           }else{
              reverse = false;
           }
           let response = '';
               if(resultString.length>1){
                   resultString = resultString.map((x)=>{
                         if(x!==''){
                            return !reverse ? splitImageAndMml(x): `<p>&nbsp;</p><p>${splitImageAndMml(x)}</p><p>&nbsp;</p>`;
                         }else{
                            return x;
                         }
                   });
                   console.log(resultString)
                   for(let k=0; k<resultString.length; k++){
                       response += resultString[k];
                   }
               }else{
                   response = data;
               }

              // let newlineString = response.split('<<n:');
              //     console.log(response)
              //        if(newlineString.length>1){
              //           newlineString = newlineString.map((x)=>{
              //                  if(x!==''){
              //                     return `<p>&nbsp;</p><p>${splitImageAndMml(x)}</p><p>&nbsp;</p>`;
              //                  }else{
              //                     return `<p>${x}</p>`;
              //                  }
              //            });
              //            for(let k=0; k<newlineString.length; k++){
              //                response += newlineString[k];
              //            }
              //        }else{
              //            response = data;
              //        }
           //     newlineString = newlineString.map((x)=>{
           //           if(x!==''){
           //              return `<p>&nbsp;</p><p>${splitImageAndMml(x)}</p><p>&nbsp;</p>`;
           //           }else{
           //              return `<p>${x}</p>`;
           //           }
           //     });
           //     let finalResponse = '';
           //     for(let k=0; k<newlineString.length; k++){
           //         finalResponse += newlineString[k];
           //     }
          //
          //
          //  data = data.replace(/<<i:.+>>/, function (match) {
          //             match = match.replace('<<i:', '');
          //             match = match.replace('>>', '');
          //           //  resultString = resultString.match(/<<i:.+>>/)
          //
          //           //  console.log(resultString);
          //             return imageAndMmlCover(match);
          //    }
          //  );
          //  data = data.replace(/<<n:.+>>/ig, function (match) {
          //              match = match.replace('<<n:', '');
          //              match = match.replace('>>', '');
          //              if(match.match('.mml'))
          //                 return `<p>&nbsp;</p><p>${imageAndMmlCover(match)}</p><p>&nbsp;</p>`;
          //              else
          //                 return `<p>${imageAndMmlCover(match)}</p>`;
          //     }
          // );
          result = `<p>${response}</p>`;
       }
       return result;
}
// { col1: 'Category tags' }
// { col1: 'Bloom\'s: Object' }
// { col1: 'Bloom\'s: Verb' }
// { col1: 'Accessibility' }
// { col1: 'ABET Outcomes' }
// { col1: 'Chapter' }
// { col1: 'Difficulty' }
// { col1: 'Section' }
// { col1: 'Topic' }
// { col1: 'Subtopic' }
// { col1: 'Units' }

// { col1: 'Q type', col2: 'WS' }
// { col1: 'Section Break' }
// { col1: 'Custom Question Type Title', col2: 'Numeric Response' }
// { col1: 'Question Title', col2: 1.001 }
function generateRandomVariable(variableValue, variableName='A'){
	       let allVariables = '';
         let varible = variableValue.split('\n');
         let listData = '';
         varible = varible.filter(function (el) {
           return el != '';
         });
         for(let y=0; y<varible.length; y++){
            console.log(varible[y].length)
            varible[y] = varible[y].replace('\r', '');
            listData += "<row><![CDATA["+varible[y]+"]]></row>";
         }
         return `<pooledRandom><name>${variableName}</name><arrayed>true</arrayed>
                      <rows>${listData}</rows>
                     </pooledRandom>`;
}

function generateAnswerTyps(optionValue, type, answerValue){
     if(type.toLowerCase()=='np'){
         return `<numberAnswer>
                   <name><![CDATA${optionValue}]></name>
                   <weight>100</weight>
                   <answerProperties>
                     <property name="completeIncompleteGrading" type="string" value="false" />
                   </answerProperties>
                   <fieldWidth>7</fieldWidth>
                   <correctAnswer><![CDATA[[A(3)]]]></correctAnswer>
                   <formatString><![CDATA[#.####]]></formatString>
                   <precisionString><![CDATA[2]]></precisionString>
                   <units></units>
                   <precisionType>2</precisionType>
                   <engineeringUnits>false</engineeringUnits>
                   <currency>false</currency>
                 </numberAnswer>`
     }else if(type.toLowerCase()=='mcq'){
           if(answerValue){
              answerValue = answerValue.split(',');
              answerValue = answerValue.map((e)=>e.trim());
           }else{
              answerValue = ['1'];
           }
           let options = '';
           console.log(answerValue)
           let multipleCount = optionValue.split(',');
           for(let y=1; y<=multipleCount.length; y++){
               let indexedEle = y.toString();
               let k =  answerValue.indexOf(indexedEle)>=0 ? 'true': 'false';
                   options +=	`<choice>
                                <distractor><![CDATA[${multipleCount[y-1]}]]></distractor>
                                <correct>${k}</correct>
                               </choice>`;
           }
           return `<multipleChoiceAnswer>
                     <name><![CDATA[C]]></name>
                     <weight>100</weight>
                     <answerProperties>
                        <property name="presentation" type="string" value="dropDown" />
                        <property name="completeIncompleteGrading" type="string" value="false" />
                        <property name="width" type="string" value="" />
                        <property name="prompt" type="string" value="" />
                        <property name="scramble" type="string" value="true" />
                     </answerProperties>
                     <choices>
                       ${options}
                     </choices>
                  </multipleChoiceAnswer>`;
     }
}

function uploadXLSX(workbook, inputfiletoread){
         let xlsxJSON = XLSX.utils.sheet_to_json(workbook.Sheets[inputfiletoread], {defVal:""});

         let categoriesXML = '';
         let questionValue = '';
         let commonFeedValue = '';
         let questionPropertiesValue = '';
         let questionHintValue = '';
         let randomVariables = '';
         let listAnswers = '';

             counterHint = 0;

         let questionMeta = {};

         for(let xlsxColumnValeus of xlsxJSON){
             if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='accessibility' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Accessibility', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='abet outcomes' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('ABET Outcomes', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='chapter' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Chapter', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='difficulty' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Difficulty', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='section' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Section', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='topic' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Topic', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='subtopic' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Subtopic', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='units' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Units', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Q type' && xlsxColumnValeus.col2!==undefined){
                questionMeta['qtype'] = xlsxColumnValeus.col2;
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Question Title' && xlsxColumnValeus.col2!==undefined){
                questionMeta['qtitle'] = xlsxColumnValeus.col2;
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Question' && xlsxColumnValeus.col2!==undefined){
                questionValue += imageAndMmlgenerate(xlsxColumnValeus.col1, xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Qform' && xlsxColumnValeus.col2!==undefined){
                questionValue += imageAndMmlgenerate(0, xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Qimage' && xlsxColumnValeus.col2!==undefined){
                questionValue += imageAndMmlgenerate(1, xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Explanation' && xlsxColumnValeus.col2!==undefined){
                commonFeedValue += imageAndMmlgenerate(xlsxColumnValeus.col1, xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Eimage' && xlsxColumnValeus.col2!==undefined){
                commonFeedValue += imageAndMmlgenerate(1, xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Eform' && xlsxColumnValeus.col2!==undefined){
                commonFeedValue += imageAndMmlgenerate(0, xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Solution' && xlsxColumnValeus.col2!==undefined){
                questionPropertiesValue = questionProperties(xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Hints' && xlsxColumnValeus.col2!==undefined){
                questionHintValue = generateHints(xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.match('Random Variables') && xlsxColumnValeus.col2!==undefined){
                randomVariables += generateRandomVariable(xlsxColumnValeus.col2, xlsxColumnValeus.col3);
             }
             else if(xlsxColumnValeus.col1 && (/<answer.*\d>$/ig).test(xlsxColumnValeus.col1) && xlsxColumnValeus.col2!==undefined && xlsxColumnValeus.col3!==undefined){
                listAnswers += generateAnswerTyps(xlsxColumnValeus.col2, xlsxColumnValeus.col3, xlsxColumnValeus.col4);
             }
            // console.log(arrEle)
         }
         categoriesXML = `<categories>${categoriesXML}</categories>`;
         if(randomVariables!==''){
             randomVariables = `<randomVariables>${randomVariables}</randomVariables>`;
         }
         if(questionHintValue!==''){
             questionHintValue = `<hints>${questionHintValue}</hints>`;
         }
         if(listAnswers!==''){
            listAnswers = `<answers>${listAnswers}</answers>`
         }
         return rootXML(categoriesXML, questionValue, commonFeedValue, questionMeta, questionPropertiesValue, questionHintValue, randomVariables, listAnswers);
}

export default (router)=>{
      router.post('/upload-xlsx', (req, res)=>{
        new formidable.IncomingForm().parse(req)
            .on('file', function(name, file) {
                const tempPptFileName = uuidv4();
                let xml = '';
            let workbook = XLSX.readFile(`${file.path}`);
            let sheet_name_list = workbook.SheetNames;
            for(let x of sheet_name_list){
                  xml += uploadXLSX(workbook, x);
            }
               res.send({xml});
            })
            .on('end', function() {
                res.end();
            });
      })
    router.get('/generate-xml', (req, res)=>{
           res.send({
               key: 'generate-xml'
           })
    })
    return router;
}
