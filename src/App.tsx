import {
  Button,
  Field,
  Fieldset,
  Input,
  Label,
  Textarea,
} from "@headlessui/react";
import RootLayout from "./components/layouts/root-layout";

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    console.log(data);
  };
  return (
    <>
      <RootLayout>
        <div
          id="home"
          className="min-h-screen w-full flex items-center text-justify leading-7 text-sm md:text-base flex-col justify-around"
        >
          <div className="md:w-5/12 text-center md:translate-x-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            aliquid dignissimos eius. Maxime labore praesentium, nostrum
            repudiandae dolores repellat assumenda.
          </div>
          <div className="italic md:text-xl space-y-16 md:-translate-x-1/2">
            <p>
              &quot; Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              &quot;
            </p>
            <div className="">
              <img
                src="/assets/metricks.png"
                alt=""
                className="md:w-52 h-auto"
              />
            </div>
          </div>
        </div>

        <div
          id="about"
          className="min-h-[80vh] w-10/12 grid place-content-center gap-6 m-auto"
        >
          <div className="text-center space-y-4">
            <p className="text-3xl md:text-5xl font-semibold">About Us</p>
          </div>
          <div className="flex items-center gap-6 flex-col md:flex-row">
            <div className="">
              <img
                src="/assets/about-us.png"
                className="md:w-10/12 h-auto"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 text-justify md:text-left leading-8 md:p-6 text-lg">
              <p className="indent-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate quibusdam, officia facere dolore nulla adipisci
                similique soluta velit labore maxime dolorum et harum tenetur,
                magnam fuga aperiam omnis neque quaerat!
              </p>
            </div>
          </div>
        </div>

        <div
          id="pricing"
          className="min-h-screen w-full md:w-10/12 grid place-content-center gap-4 md:gap-10 m-auto mt-4 md:mt-0"
        >
          <div className="text-center space-y-4">
            <p className="text-5xl font-semibold">Pricing</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              quae?
            </p>
          </div>
          <div className="flex md:h-[50vh] items-center justify-center flex-col md:flex-row gap-4 md:gap-0">
            <div className="w-full md:w-1/4 bg-gray-300 p-6 space-y-4 border-l-4 border-r-4 md:border-r-0 border-y-4 border-solid border-violet-300 rounded-tl-lg rounded-bl-lg  rounded-tr-lg rounded-br-lg md:rounded-tr-none md:rounded-br-none">
              <div className="space-y-2">
                <p className="text-2xl font-semibold">Basic</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt saepe, doloribus itaque ea eum fugiat ipsam? Quia
                  aspernatur reiciendis eos officia amet modi fugiat quidem?
                </p>
              </div>
              <div className="">
                <p className="text-2xl font-light">Rp 7.000.000,-</p>
              </div>
              <div className="leading-relaxed">
                <ul>
                  <li>Mencatat barang masuk</li>
                  <li>Mencatat barang keluar</li>
                  <li>Mencatat hasil keuntungan</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-between h-full p-6 rounded-lg bg-violet-400 gap-3">
              <div className="space-y-3">
                <p className="text-3xl font-semibold">Entrepreneur</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt saepe, doloribus itaque ea eum fugiat ipsam? Quia
                  aspernatur reiciendis eos officia amet modi fugiat quidem?
                </p>
              </div>
              <div className="">
                <p className="text-3xl font-light">Rp 15.000.000,-</p>
              </div>
              <div className="leading-loose">
                <ul>
                  <li>Mencatat barang masuk dan keluar</li>
                  <li>Mencatat Keuntungan</li>
                  <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                  <li>Support 7x24 Jam</li>
                  <li>Export data ke Excel</li>
                  <li>AI Prediksi penghasilan</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/4 bg-gray-300 p-6 space-y-4 border-r-4 border-l-4 md:border-l-0 border-y-4 border-solid border-violet-300 rounded-tr-lg rounded-br-lg rounded-tl-lg rounded-bl-lg md:rounded-tl-none md:rounded-bl-none">
              <div className="space-y-2">
                <p className="text-2xl font-semibold">Business</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt saepe, doloribus itaque ea eum fugiat ipsam? Quia
                  aspernatur reiciendis eos officia amet modi fugiat quidem?
                </p>
              </div>
              <div className="">
                <p className="text-2xl font-light">Rp 10.000.000,-</p>
              </div>
              <div className="leading-relaxed">
                <ul>
                  <li>Mencatat barang masuk dan keluar</li>
                  <li>Mencatat Keuntungan</li>
                  <li>Dapat menganalisa hasil penjualan dengan CHART</li>
                  <li>Support 7x24 Jam</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          id="contact"
          className="min-h-[80vh] w-10/12 grid place-content-center gap-6 m-auto mt-6 md:mt-0"
        >
          <div className="text-center space-y-4">
            <p className="text-5xl font-semibold">Contact Us</p>
          </div>
          <div className="flex md:flex-row-reverse items-center gap-0 md:gap-6 flex-col">
            <div className="">
              <img
                src="/assets/contact-us.png"
                className="w-10/12 h-auto m-auto"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 leading-8 p-6 text-lg">
              <form onSubmit={handleSubmit}>
                <Fieldset className="space-y-8">
                  <Field>
                    <Label className="block">Email</Label>
                    <Input
                      className="mt-3 block w-full rounded-lg border-none bg-white/85 py-1.5 px-3 text-sm/6"
                      name="email"
                    />
                  </Field>
                  <Field>
                    <Label className="block">Message</Label>
                    <Textarea
                      className="mt-3 block w-full rounded-lg border-none bg-white/85 py-1.5 px-3 text-sm/6"
                      name="message"
                    />
                  </Field>
                  <Button
                    className="w-full text-center rounded-md bg-violet-600 py-1.5 text-sm/6 font-semibold text-white"
                    type="submit"
                  >
                    <p>Submit</p>
                  </Button>
                </Fieldset>
              </form>
            </div>
          </div>
        </div>
      </RootLayout>
    </>
  );
}

export default App;
