"use client";
import { Button, Modal } from "amvasdev-ui";
import { useToggle } from "usehooks-ts";

export default function Home() {
  const [isOpen, toggleIsOpen] = useToggle();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Button
        className=""
        variant="info"
        onClick={toggleIsOpen}
        disabled={isOpen}
      >
        Hola
      </Button>
      {isOpen ? <Modal onClose={toggleIsOpen}>Hello</Modal> : null}
    </main>
  );
}
