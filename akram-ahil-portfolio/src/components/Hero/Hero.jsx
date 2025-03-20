import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Mail } from "lucide-react"

export default function Hero() {
  return (
    <div className="mx-20 py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge className='text-md' variant="outline ">HELLO WORLD 👋</Badge>
              </div>
              <div className="flex gap-4 flex-col">
                <h1
                  className="text-5xl md:text-8xl max-w-lg tracking-tighter text-left font-regular">
                  Akram Ahil
                </h1>
                <p
                  className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                  Je suis développeur Web Full Stack junior, spécialisé dans la stack MERN, ainsi que dans HTML, CSS et Tailwind CSS,
                   Next.js et JWT. J'ai également une expérience significative sur WordPress. Passionné par le développement et la technologie
                </p>
              </div>
              <div className="flex flex-row gap-4">
              <Button size="lg" className="gap-4">
                  About me <MoveRight className="w-4 h-4" />
                </Button>
                <Button size="lg" className="gap-4" variant="outline">
                  Contact me <Mail />
                </Button>
                
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square w-4/5 text-center items-center ">
                
                <Image
              src="/IMG.jpg"
              alt="startup template"
              width={580}
              height={300}
             />
            </div>
          </div>
        </div>
      </div>
  )
}
