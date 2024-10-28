import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM_N",
    })

    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.log(`Database connection failed: ${err}`);
    });
};
