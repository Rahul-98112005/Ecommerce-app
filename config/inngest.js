import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/user";

export const inngest = new Inngest({ id: "quickcart-next" });

// Inngest fuction to save user in DB

export const syncUserCreation = inngest.createFunction(
    {
        id:'sync-user-from-clerk'
    },
    {
        event : 'clerk/user.created'
    },
    async ({event}) => {
       const { id, first_name,last_name, email_addresses, image_url} = event.data
       const userData = {
        _id:id,
        emial: email_addresses[0].email_addresses,
        name: frist_name + ' ' + last_name,
        imageUrl:image_url
       }
       await connectDB()
       await User.create(userData)
    }
)

// Inggest function to update user data in database

export const syncUserUpdation = inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    {event: ' clerk/user.update'},
    async ({event}) => {
         const { id, first_name,last_name, email_addresses, image_url} = event.data
        const userData = {
        _id:id,
        emial: email_addresses[0].email_addresses,
        name: frist_name + ' ' + last_name,
        imageUrl:image_url

    }
    await connectDB()
    await User.findByIdAndUpdate(id,userdata)
}
)


// inngest function to delet from database
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-with-clerk'
    },
    {event: 'clerk/user.deleted'},
    async ({event}) => {
        const {id} = event.data

        await connectDB()
        await User.findByIdAndDelete(id)
    }
)