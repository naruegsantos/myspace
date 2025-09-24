import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const text = "aaaa"
  console.log(text);
  
  return (
    <>
      <header>esse é o header</header>
      <Link href={"/login"}>login</Link>
        TEXTO SIMPLES
    </>
  );
}


