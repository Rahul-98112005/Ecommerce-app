import { serve } from "inngest/next";
import { inngest, syncUserCreation, syncUserDeletion } from "@/config/inngest";

export const  { GET, POST, PUT} = serve ({
    client: inngest,
    function: [
        syncUserCreation,
        syncUserUpdation,
        syncUserDeletion
    ]
})