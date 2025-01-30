import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./globals.css";
import Vigenere from "@/components/Vigenere";

export default function Home() {
  return (
    <div className="min-h-dvh w-screen overflow-hidden bg-background">
      <div className="p-7 flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4">
          <h1 className="scroll-m-20 font-headings text-4xl font-extrabold tracking-tight lg:text-5xl">
            Encryptor
          </h1>
          <Tabs defaultValue="vigenere" className="w-screen">
            <TabsList>
              <TabsTrigger value="vigenere">Vigenere Cipher</TabsTrigger>
              <TabsTrigger value="adfgvx">ADFGVX Cipher</TabsTrigger>
              <TabsTrigger value="morse_code">Morse Code</TabsTrigger>
            </TabsList>
            <TabsContent value="vigenere" className="w-full">
              <Vigenere />
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
