import { useState } from "react";
import { social } from "../data/social";
import DevTreeInput from "../components/DevTreeInput";

function LinkTree() {
  const [socialLinks, setSocialLinks] = useState(social);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(name, value);
    const updatedLinks = socialLinks.map((link) =>
      link.name === name ? { ...link, url: value } : link,
    );
    setSocialLinks(updatedLinks);
  };
  return (
    <>
      <div className="space-y-5">
        {socialLinks.map((link) => (
          <DevTreeInput
            key={link.name}
            link={link}
            handleUrlChange={handleUrlChange}
          />
        ))}
      </div>
    </>
  );
}

export default LinkTree;
