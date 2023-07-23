import React from "react";
import ExternalLink from "./external-link";

const FooterText = ({ className, ...props }: React.ComponentProps<"p">) => {
  return (
    <p className={className} {...props}>
      Open source AI chatbot built with
      <ExternalLink href="#">Next.js</ExternalLink>
      <ExternalLink href="#">Vercel KV</ExternalLink>
    </p>
  );
};

export default FooterText;
