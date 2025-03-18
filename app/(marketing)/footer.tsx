import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" >
                    <Image
                    src="/sa.svg"
                    alt="Saudi Arabia"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Arabic Language
                </Button>
                <Button size="lg" variant="ghost" >
                    <Image
                    src="/jp.svg"
                    alt="Japan"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Japanese
                </Button>
                <Button size="lg" variant="ghost" >
                    <Image
                    src="/fr.svg"
                    alt="France"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    French
                </Button>
                <Button size="lg" variant="ghost" >
                    <Image
                    src="/it.svg"
                    alt="Italy"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Italian
                </Button>
                <Button size="lg" variant="ghost" >
                    <Image
                    src="/en.svg"
                    alt="England"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    English
                </Button>
            </div>
        </footer>
    )
}