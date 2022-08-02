const welcome = `
   '     '      
---'-----'---
   '     '                      
---'-----'---
   '     '           
   '     '            
`;

function board(data) {
  const a = data["1"] || " ";
  const b = data["2"] || " ";
  const c = data["3"] || " ";
  const d = data["4"] || " ";
  const e = data["5"] || " ";
  const f = data["6"] || " ";
  const g = data["7"] || " ";
  const h = data["8"] || " ";
  const i = data["9"] || " ";

  const boar = `
    ${a} '  ${b}  ' ${c}     
   ---'-----'---
    ${d} '  ${e}  ' ${f}                        
   ---'-----'---
    ${g} '  ${h}  ' ${i}         
      '     '
`;
  return boar;
}

export { board };
