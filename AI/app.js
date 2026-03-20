// 📦 Import dependencies
import express from "express"
import { HumanMessage, SystemMessage } from "langchain"
import { CampAgent } from "./Agents/CampignAgent.js"

// 🚀 Initialize Express app
const app = express()

// 📨 Middleware for JSON parsing
app.use(express.json())

// 🎧 Start server on port 3000
app.listen(3000,async () => {
    console.log("App is listening on port 3000.")
})

// 💬 System message configuration
const msg = [
    new SystemMessage(`
        You are a helpful assistance.
        You can use tis tools
        --Get all campaigns without any parameter.
        ----Add new Campaign, if Campaign not exist , ask user and if any paramter not exist generate by your self according to the name of Campaign.
        `)
]

// 🤖 Agent endpoint handler
app.post("/agent" , async (req,res) => {
    // 📝 Extract prompt from request body
    const {prompt} = req.body
    // 💭 Push user message to conversation
    msg.push(new HumanMessage(prompt))
    // ⚙️ Invoke the campaign agent
    const agentCall = await CampAgent.invoke({
        messages:msg
    })
    // console.log(agentCall.messages.at(-1).content)
    // ✅ Send response with agent output
    res.status(200).json(
        {"msg":agentCall.messages.at(-1).content}
    )
})