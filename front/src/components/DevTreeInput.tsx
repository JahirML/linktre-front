import type { DevTreeLink } from "../types";
import { Switch } from "@headlessui/react";
import { classNames } from "../utils/utils";

type Props = {
  link: DevTreeLink;
  handleUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function DevTreeInput({ link, handleUrlChange }: Props) {
  return (
    <div className="bg-white shadow-sm p-5 flex items-center gap-3">
      <div
        className="w-12 h-12 bg-cover"
        style={{
          backgroundImage: `url("/img/social-icons/icon_${link.name}.svg")`,
        }}
      ></div>
      <input
        type="text"
        name={link.name}
        className="flex-1 border border-gray-100 rounded-lg"
        onChange={handleUrlChange}
      />
      <Switch
        checked={link.enabled}
        onChange={() => {}}
        className={classNames(
          link.enabled ? "bg-blue-500" : "bg-gray-200",
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            link.enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
          )}
        />
      </Switch>
    </div>
  );
}

export default DevTreeInput;
