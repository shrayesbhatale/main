const { chromium } = require('/opt/node22/lib/node_modules/playwright');
const fs=require('fs'),path=require('path');
(async()=>{
  const files=fs.readdirSync('out').filter(f=>f.endsWith('.png')).sort();
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
  const p=await b.newPage({viewport:{width:1620,height:2024}});
  for(let k=0;k<files.length;k+=4){
    const html=`<body style="margin:0;display:grid;grid-template-columns:810px 810px;background:#fff">${files.slice(k,k+4).map(f=>`<img src="file://${path.resolve('out',f)}" style="width:810px;height:1012px">`).join('')}</body>`;
    fs.writeFileSync('sheets/s.html',html); await p.goto('file://'+path.resolve('sheets/s.html'));
    await p.waitForTimeout(300);
    await p.screenshot({path:`sheets/sheet${String(k/4+1).padStart(2,'0')}.png`});
  }
  await b.close();
})();
