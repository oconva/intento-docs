import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full p-10 flex flex-row justify-center items-center">
      <span>
        QvikChat - A project by{" "}
        <a
          href="https://github.com/oconva"
          title="Oconva - GitHub"
          referrerPolicy="no-referrer"
          target="blank"
        >
          <Button variant="link" size="slim">
            Oconva
          </Button>
        </a>
      </span>
    </footer>
  );
};
