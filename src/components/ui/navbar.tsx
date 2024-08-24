import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";
import useMobileDetect from "../../hooks/useMobileDetect";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Field,
  Fieldset,
  Input,
  Label,
} from "@headlessui/react";

type Props = {};

const navItems = [
  {
    render(isMobile: boolean = false) {
      return <a href="#about">About</a>;
    },
  },
  {
    render(isMobile: boolean = false) {
      return <a href="#pricing">Pricing</a>;
    },
  },
  {
    render(isMobile: boolean = false) {
      return <a href="#contact">Contact</a>;
    },
  },
  {
    render(isMobile: boolean = false) {
      return <Login isMobile={isMobile} />;
    },
  },
];

const Navbar = (props: Props) => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const isMobile = useMobileDetect();

  return (
    <div className="h-24 flex justify-between p-4 md:p-14 w-full items-center fixed top-0 left-0 font-bold text-xl">
      <div className="text-white text-2xl">
        <a href="#home">Home</a>
      </div>
      <div className={twMerge(isMobile ? "block" : "hidden")}>
        {displayMenu ? (
          <HiOutlineXMark
            onClick={() => setDisplayMenu(false)}
            className="w-6 h-6"
          />
        ) : (
          <HiBars3 onClick={() => setDisplayMenu(true)} className="w-6 h-6" />
        )}
      </div>
      <div
        className={twMerge(
          "flex-col md:flex-row gap-4 md:gap-8 md:items-center cursor-pointer md:flex",
          isMobile
            ? "fixed top-28 left-1/2 w-11/12 -translate-x-1/2 text-center bg-white/85 py-8 rounded-lg"
            : "flex",
          displayMenu && isMobile ? "flex" : "hidden"
        )}
      >
        {navItems.map((navItem, idx) => {
          return (
            <div key={idx} className="">
              {navItem.render(isMobile)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

type LoginProps = {
  isMobile: boolean;
};

const Login = ({ isMobile }: LoginProps) => {
  const [isOpen, setIsOpen] = useState(false);
  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
    close();
  };
  return (
    <>
      <button
        className={twMerge(
          "border-2 border-sky-400 text-sky-400 rounded-lg px-8 py-2",
          isMobile ? "bg-white" : ""
        )}
        onClick={(e) => {
          e.preventDefault();
          open();
        }}
      >
        Login
      </button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-11/12 left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-0 md:w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="absolute top-12 right-0 md:right-16 w-full max-w-md rounded-xl bg-black/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-bold w-full text-center"
              >
                Login
              </DialogTitle>
              <form onSubmit={handleLogin}>
                <Fieldset className="space-y-8">
                  <Field>
                    <Label className="block">Email</Label>
                    <Input
                      className="mt-3 block w-full rounded-lg border-none bg-white/85 py-1.5 px-3 text-sm/6"
                      name="email"
                      type="text"
                    />
                  </Field>
                  <Field>
                    <Label className="block">Password</Label>
                    <Input
                      className="mt-3 block w-full rounded-lg border-none bg-white/85 py-1.5 px-3 text-sm/6"
                      name="password"
                      type="password"
                    />
                  </Field>
                  <div className="flex gap-4">
                    <Button
                      className="text-center rounded-md bg-red-600 py-1.5 px-6 text-sm/6 font-semibold text-white"
                      onClick={close}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="text-center rounded-md bg-violet-600 py-1.5 px-6 text-sm/6 font-semibold text-white"
                      type="submit"
                    >
                      <p>Submit</p>
                    </Button>
                  </div>
                </Fieldset>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Navbar;
