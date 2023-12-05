import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div>
      <Button onClick={()=>{
        alert("Hello")
      }}>Click Me</Button>
    </div>
  );
}
