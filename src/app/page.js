import { Button } from "@/components/ui/button";
import Link from "next/link";


const page = () => {
  return (
    <div>
      <h1>this is main page</h1>
      <Link href='/about'><Button variant="outline">click me</Button></Link>
    </div>
  );
};

export default page;