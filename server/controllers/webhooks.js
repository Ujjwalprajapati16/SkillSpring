import { Webhook } from "svix";
import User from "../models/User.js";

// API controller function to manage Clerk user with MongoDB
const clerkWebHooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify the webhook signature
    whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.create(userData);
        return res.status(200).json({ success: true, message: "User created" });
      }

      case "user.updated": {
        const updatedData = {
          email: data.email_addresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, updatedData);
        return res.status(200).json({ success: true, message: "User updated" });
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        return res.status(200).json({ success: true, message: "User deleted" });
      }

      default:
        return res
          .status(200)
          .json({ success: true, message: "Event ignored" });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export default clerkWebHooks;
