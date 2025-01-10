import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "./globals.css";

export default function Home() {
  return (
    <div className="min-h-dvh w-screen overflow-hidden bg-[#050505]">
      <div className="p-7 flex flex-col gap-y-10">
        <h1 className="scroll-m-20 font-headings text-4xl font-extrabold tracking-tight lg:text-5xl">
          Encryptor
        </h1>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
