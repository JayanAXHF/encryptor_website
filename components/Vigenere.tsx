"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";

const Vigenere = () => {
	const [keyword, setKeyword] = useState("")
	const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setKeyword(value)
	}
	return (<div><label id="keyword" className="text-sm">Keyword</label><Input name="keyword" onChange={handleKeywordChange} value={keyword} /></div>);

};

export default Vigenere;
