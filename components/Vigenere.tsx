"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import { TeamSwitcher } from "./ui/switcher";

const Vigenere = () => {
  const [keyword, setKeyword] = useState("");
  const [inputText, setInputText] = useState("");
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };
  const handleInputTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInputText(value);
  };

  const [activeTeam, setActiveTeam] = React.useState({ name: "Encrypt" });
  return (
    <div className="w-full">
      <Card className="min-w-[32rem] w-max">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Enter plaintext/ciphertext</CardTitle>
        </CardHeader>
        <CardContent>
          <TeamSwitcher
            teams={[{ name: "Encrypt" }, { name: "Decrypt" }]}
            activeTeam={activeTeam}
            setActiveTeam={setActiveTeam}
          />
          <form>
            <div className="grid gap-6">
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border"></div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Keyword</Label>
                  <Input
                    id="keyword"
                    required
                    value={keyword}
                    onChange={handleKeywordChange}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="input_text">
                      Enter{" "}
                      {activeTeam.name == "Encrypt"
                        ? "plaintext"
                        : "Ciphertext"}
                    </Label>
                  </div>
                  <Textarea
                    id="input_text"
                    required
                    value={inputText}
                    onChange={handleInputTextChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Encrypt
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Vigenere;
