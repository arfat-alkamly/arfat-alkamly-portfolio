type Props={file:string;image:string;title:string;priority?:boolean};

export default function CertificatePreview({image,title,priority=false}:Props){
  return <div className="certificate-image-viewer" aria-label={'صورة الشهادة: '+title}>
    <img
      src={image}
      alt={'معاينة شهادة '+title}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  </div>;
}
