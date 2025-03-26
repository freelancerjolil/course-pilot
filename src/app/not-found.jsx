import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function not_found() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <p className="font-bold text-red-500 text-6xl">404</p>
      <p className="font-bold text-4xl">Page Not Found</p>
      <img
        className="w-full max-w-sm"
        src="https://i.postimg.cc/y8MCkrgV/r.png"
        alt="https://i.postimg.cc/y8MCkrgV/r.png"
      />
      <Link href={"/"}>
        <Button variant="secondary" className='cursor-pointer'>Back To Home</Button>
      </Link>
    </div>
  );
}
