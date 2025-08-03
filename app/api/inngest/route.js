import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion,syncUserUpdation } from "@/config/inngest";
import User from "@/models/user"

export const  { GET, POST, PUT} = serve ({
    client: inngest,
    functions: [
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion
    ]
})