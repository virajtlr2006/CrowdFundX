// 📦 Import necessary libraries
import axios from "axios"
import {tool} from "langchain"
import {z} from "zod"

// 🎯 Function to fetch all campaigns from the backend
export const AddCampaignFunc = async ({raisefund, compname, description, email, image, totalfund, singleprice, team }) => {
    // 🌐 Make API request to get all pitches
    const result = await axios.post("http://localhost:8080/pitch/new",{raisefund, compname, description, email, image, totalfund, singleprice, team})
    // console.log(result.data.allPitches)
    // ✅ Return data as JSON string
    return JSON.stringify(result.data)
}

// 🛠️ Create a LangChain tool for accessing all campaigns
export const AddCampaignTool = tool(
    AddCampaignFunc,
    {
        name:"Add Campaigns",
        description:"Add a Campaign.",
        schema:z.object({
            raisefund:z.number().describe("Target amout to raise the fund"),
            compname:z.string().describe("Name of a campaign"),
            description:z.string().describe("Description about campaign"),
            email:z.string().describe("Email of a campaign creator"),
            image:z.string().describe("Image of a campaign"),
            totalfund:z.number().describe("Taotal fund raised"),
            singleprice:z.number().describe("Price of a single share to fund a campaign"),
            // team:z.array({
            //     name:z.string().describe("Name of a team member.")
            // })
        })
    }
)
