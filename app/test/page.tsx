import React from "react";

export default async function page() {
  const data = await fetch(
    "https://raw.githubusercontent.com/kumard3/dev.ui/main/components/Hero/HeroSection.tsx"
  );
  const res = await data.text();

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: res}} />

   
    </div>
  );
}
