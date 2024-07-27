import BoxReveal from "./magicui/box-reveal"
import { Button } from "./ui/button"

export default function CurrentWorking(){
    return <>
    <div className="flex">

    <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8 pl-12">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-[2.5rem] font-semibold">
          Currently Working on<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-[1.5rem]">
          <p>
            -&gt; A open source Project for learning 
         
            . <br />
            -&gt; a Automation tool for engineering company located at Pune<br />
            <span className="font-semibold text-[#5046e6]"> Angular</span>,
            <span className="font-semibold text-[#5046e6]"> Typescript</span>,
            <span className="font-semibold text-[#5046e6]"> Mssql</span>,
            and
            <span className="font-semibold text-[#5046e6]"> Express</span>
          </p>
        </div>
      </BoxReveal>
      </div>

      <div>
        
      </div>
    </div>
    </>
}