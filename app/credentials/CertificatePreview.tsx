'use client';

import {useEffect,useRef,useState} from 'react';

declare global {
  interface Window { pdfjsLib?: any }
}

type Props={file:string;title:string};

let pdfLoader:Promise<any>|null=null;
function loadPdfJs():Promise<any>{
  if(typeof window==='undefined') return Promise.reject(new Error('Browser only'));
  if(window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
  if(!pdfLoader){
    pdfLoader=new Promise((resolve,reject)=>{
      const existing=document.querySelector<HTMLScriptElement>('script[data-pdfjs-viewer]');
      const script=existing??document.createElement('script');
      const done=()=>window.pdfjsLib?resolve(window.pdfjsLib):reject(new Error('PDF renderer unavailable'));
      script.addEventListener('load',done,{once:true});
      script.addEventListener('error',()=>reject(new Error('Could not load PDF renderer')),{once:true});
      if(!existing){script.src='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';script.async=true;script.dataset.pdfjsViewer='true';document.head.appendChild(script);}
      else if(window.pdfjsLib) resolve(window.pdfjsLib);
    });
  }
  return pdfLoader;
}

export default function CertificatePreview({file,title}:Props){
  const canvasRef=useRef<HTMLCanvasElement>(null);
  const [status,setStatus]=useState<'loading'|'ready'|'error'>('loading');
  useEffect(()=>{
    let cancelled=false;
    (async()=>{
      try{
        const pdfjs=await loadPdfJs();
        pdfjs.GlobalWorkerOptions.workerSrc='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        const response=await fetch(file);
        if(!response.ok) throw new Error('Certificate file unavailable');
        const bytes=await response.arrayBuffer();
        const pdf=await pdfjs.getDocument({data:bytes}).promise;
        const page=await pdf.getPage(1);
        const canvas=canvasRef.current;
        if(!canvas||cancelled)return;
        const context=canvas.getContext('2d');
        if(!context)throw new Error('Canvas unavailable');
        const base=page.getViewport({scale:1});
        const width=Math.max(260,canvas.parentElement?.clientWidth??720);
        const viewport=page.getViewport({scale:Math.min(2.2,width/base.width)});
        canvas.width=Math.floor(viewport.width);
        canvas.height=Math.floor(viewport.height);
        canvas.style.width='100%';
        canvas.style.height='auto';
        await page.render({canvasContext:context,viewport}).promise;
        if(!cancelled)setStatus('ready');
      }catch(e){if(!cancelled)setStatus('error');}
    })();
    return()=>{cancelled=true;};
  },[file]);
  return <div className="certificate-image-viewer" aria-label={'صورة الشهادة: '+title}>
    {status==='loading'&&<div className="certificate-image-loading">جارٍ تجهيز صورة الشهادة…</div>}
    {status==='error'&&<div className="certificate-image-error">تعذّر عرض صورة الشهادة. يمكن استخدام خيار تنزيل PDF أدناه.</div>}
    <canvas ref={canvasRef} className={status==='ready'?'is-visible':'is-hidden'} />
  </div>;
}
