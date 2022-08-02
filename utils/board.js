const welcome = `
   '     '      
---'-----'---
   '     '                      
---'-----'---
   '     '           
   '     '            
`;

function board(data) {
  const a = data["a"] || " ";
  const b = data["b"] || " ";
  const c = data["c"] || " ";
  const d = data["d"] || " ";
  const e = data["e"] || " ";
  const f = data["f"] || " ";
  const g = data["g"] || " ";
  const h = data["h"] || " ";
  const i = data["i"] || " ";

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
