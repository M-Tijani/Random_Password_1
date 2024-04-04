import Button from "@/components/base_components/Button";
import Button_1 from "@/components/base_components/Button_1";
import Checkbox_Prop from "@/components/base_components/Checkbox_Prop";
import Icon_Button from "@/components/base_components/Icon_Button";
import Hero from "@/components/base_components/Hero";
import Input from "@/components/base_components/Input";
import { Slider } from "@/components/ui/slider";
// Icons
import { Copy } from "lucide-react";
import { RotateCcw } from "lucide-react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
// Api
import axios from "axios";
// Hooks
import { useState, useEffect } from "react";
// Audio
import useSound from "use-sound";
import Audio1 from "../audio/POP1.mp3";
import Audio2 from "../audio/POP2.mp3";
import Audio3 from "../audio/POP3.mp3";
import Toest from "@/components/base_components/Toest";

export default function Home() {
  // AUDIO
  const [POP1] = useSound(Audio1);
  const [POP2] = useSound(Audio2);
  const [POP3] = useSound(Audio3);
  // STATE
  const [length, setlength] = useState([9]);
  const [uppercase, setuppercase] = useState<boolean>(true);
  const [lowercase, setlowercase] = useState<boolean>(true);
  const [numbers, setnumbers] = useState<boolean>(false);
  const [symbols, setsymbols] = useState<boolean>(false);
  // Global Password
  const [globalpassowrd, setglobalpassowrd] = useState<string>("");

  // Toest Message
  const [copyToest, setcopyToest] = useState<string>("");
  const [resetToest, setresetToest] = useState<string>("");
  const HandleGenerate = async () => {
    try {
      const res = await axios.post(import.meta.env.VITE_BASE_API, {
        length: 9,
        uppercase: true,
        lowercase: true,
      });

      setglobalpassowrd(res.data.password);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    HandleGenerate();
  }, []);
  // User Generate Function
  const Handleusergenerate = async () => {
    if (!numbers && !symbols && !lowercase && !uppercase) {
      setglobalpassowrd("Please Select Atleast One Checkbox");
    } else {
      try {
        const res = await axios.post(import.meta.env.VITE_BASE_API, {
          length: length,
          uppercase: uppercase,
          lowercase: lowercase,
          numbers: numbers,
          symbols: symbols,
        });

        setglobalpassowrd(res.data.password);
      } catch (error) {
        console.log(error);
      }
    }
  };
  // const handleGeneratewithclick = async () => {
  //   Handleusergenerate();
  // };
  // Handle Copy / Reset
  const Handlercopy = () => {
    navigator.clipboard.writeText(globalpassowrd);
    POP2();
    setcopyToest("New Password Copied");
    setTimeout(() => {
      setcopyToest("");
    }, 2000);
  };
  const Handlereset = () => {
    Handleusergenerate();
    POP1();
    setresetToest("New Password Generated");
    setTimeout(() => {
      setresetToest("");
    }, 2000);
  };
  // Handle Plus & Minus
  const HandlerPlus = () => {
    if (length[0] < 20) {
      setlength((prev) => [Number(Number(prev) + 1)]);
      Handleusergenerate();
      POP3();
    }
  };
  const HandlerMinus = () => {
    if (length[0] > 5) {
      setlength((prev) => [Number(Number(prev) - 1)]);
      Handleusergenerate();
      POP3();
    }
  };
  // Handle Checkbox
  const Handlelowercase = () => {
    setlowercase((prev) => !prev);
  };
  const Handleuppercase = () => {
    setuppercase((prev) => !prev);
  };
  const Handlenumber = () => {
    setnumbers((prev) => !prev);
  };
  const Handlesymbols = () => {
    setsymbols((prev) => !prev);
  };
  return (
    <section className="relative Box_holder">
      <Hero />
      <Input Title={globalpassowrd} />
      <div className="w-full max-w-[270px] md:max-w-[400px] flex gap-2">
        <Button Title="Get Pass" Icon={RotateCcw} Handler={Handlereset} />
        <Button_1 Title="Copy Pass" Icon={Copy} Handler={Handlercopy} />
      </div>
      <div className="grid grid-cols-2 gap-2 items-start mt-2">
        <Checkbox_Prop
          Title="Lowercase"
          Handler={Handlelowercase}
          State={lowercase}
        />
        <Checkbox_Prop
          Title="Uppercase"
          Handler={Handleuppercase}
          State={uppercase}
        />
        <Checkbox_Prop Title="Numbers" Handler={Handlenumber} State={numbers} />
        <Checkbox_Prop
          Title="Symbols"
          Handler={Handlesymbols}
          State={symbols}
        />
      </div>
      <div>
        <h1 className="text-xl  flex gap-2 font-semibold">
          Password Length:<span className="text-primary">{length}</span>
        </h1>
      </div>
      <div className="flex items-center justify-center gap-2 w-full max-w-[250px]">
        <Icon_Button Icon={Minus} Handler={HandlerMinus} />
        <Slider
          defaultValue={length}
          value={length}
          onValueChange={setlength}
          disabled
          min={5}
          max={20}
          step={1}
        />
        <Icon_Button Icon={Plus} Handler={HandlerPlus} />
      </div>
      <div className="absolute -top-[50px] h-full">
        {copyToest && <Toest Title={copyToest} />}
        {resetToest && <Toest Title={resetToest} />}
      </div>
    </section>
  );
}
