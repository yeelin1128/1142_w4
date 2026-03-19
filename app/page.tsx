/*匯入*/
import Image from "next/image";
/*匯出*/
export default function Home() {
  return (
    <>
    {/* tailwindcss */}
    <div className="bg-red-200 h-screen w-full flex justify-center items-center flex-col" >
      <div className="bg-white p-6 rounded-lg flex justify-center items-center flex-col inline-block">
        <Image src="/next.svg" alt="avatar" width={100} height={100}/>
        <div>林誼</div>
        <div>Lim Yi</div>
      </div>
    </div>
   </>
  );
}
