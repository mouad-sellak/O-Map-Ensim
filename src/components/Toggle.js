import { useState } from "react";
import ARMode from "./ARMode";

export default function Toggle() {
    const [enabled, setEnabled] = useState(false);
    const [toggleName, settoggleName] = useState("Map");


  //cette partie pour changer la mode AR
  const [started, setStarted] = useState(false);
  const basicReset = () => {
    setStarted(true);
  };
  //fonction pour mettre à jour les valeurs
  const changeValue = () => {
    setOldX(-1.5);
    setOldY(0);
    setOldZ(0);
    setX(-1.4);
    setY();
    setZ(0);
    basicReset();
  };

    return (
            <div className="flex  ">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer  "
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                            toggleName==="Map" ? settoggleName("AR") : settoggleName("Map");
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-300"
                    >
                        <ARMode/>
                    </div>
                 <span className="ml-2 text-sm font-bold  text-white">{toggleName}</span> 
                </label>
            </div>
    );
}