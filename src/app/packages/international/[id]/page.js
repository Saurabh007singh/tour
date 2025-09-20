export async function generateStaticParams() {
  const ids = ['dubai', 'phuket', 'baku']; // Add your actual IDs here
  return ids.map(id => ({ id }));
}
export default function SpecificDomesticPage(){
  return (<div className="flex flex-col w-full"><div className=""><img src="/images/banner1.avif" alt="tour-package" className="w-full"></img></div>
      
  </div>)
}