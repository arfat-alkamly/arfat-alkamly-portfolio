import {ImageResponse} from 'next/og';

export const alt='Arfat Alkamali — Cybersecurity Researcher and Developer';
export const size={width:1200,height:630};
export const contentType='image/png';

export default function OpenGraphImage(){
  return new ImageResponse(
    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',padding:'80px',background:'#07111f',color:'#edf5fb',fontFamily:'Arial, sans-serif',border:'2px solid #52c7df'}}>
      <div style={{fontSize:24,color:'#52c7df',letterSpacing:8}}>ARFAT ALKAMALI · CYBERSECURITY</div>
      <div style={{fontSize:76,fontWeight:700,marginTop:50}}>Arfat Alkamali</div>
      <div style={{fontSize:38,color:'#52c7df',marginTop:20}}>Cybersecurity Researcher & Developer</div>
      <div style={{fontSize:22,color:'#9eb0c2',marginTop:55}}>Security Research · Defensive Security · Software</div>
    </div>,
    size
  );
}
