// 🤖 Import agent creation function from langchain
import { createAgent } from "langchain";
// 🧠 Import the language model configuration
import {llm} from "../Config/llm.js"
// 🛠️ Import the campaign-related tool
import { AllCampaignTool } from "../Tools/AllCamp.js";
import { AddCampaignFunc, AddCampaignTool } from "../Tools/AddCamp.js";

// 📢 Export the Campaign Agent with initialized model and tools
export const CampAgent = createAgent({
    model:llm,
    tools:[AllCampaignTool,AddCampaignTool]
})