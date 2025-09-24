import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const text = "aaaa"
  console.log(text);
  
  return (
    <>
      <header>esse é o header</header>
      <Link href={"/login"}>login</Link>
      HELLO WORLD
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat qui, dolorem necessitatibus laborum numquam ex rem quos unde incidunt, error tempore similique velit. Cum labore facilis accusamus earum, animi culpa.
    </>
  );
}


