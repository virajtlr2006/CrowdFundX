// 📦 Import necessary libraries
import axios from "axios"
import {tool} from "langchain"

// 🎯 Function to fetch all campaigns from the backend
export const AllCampaignFunc = async ({prompt}) => {
    // 🌐 Make API request to get all pitches
    const result = await axios.get("http://localhost:8080/pitch/all")
    // console.log(result.data.allPitches)
    // ✅ Return data as JSON string
    return JSON.stringify(result.data.allPitches)
}

// 🛠️ Create a LangChain tool for accessing all campaigns
export const AllCampaignTool = tool(
    AllCampaignFunc,
    {
        name:"All Campaigns",
        description:"Get All Campaigns."
    }
)
