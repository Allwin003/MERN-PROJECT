import ErrorHandler from "../error/error.js";
import { reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const{firstname,lastname,email,phone,time,date}=req.body;
    if(!firstname||!lastname||!email||!phone||!time||!date){
        return next(new ErrorHandler("Please fill full reservation form!",400));
    }
    try{
       await reservation.create({firstname,lastname,email,phone,time,date});
       res.status(200).json({
        success:true,
        message:"Reservation Sent Successfully!",
       });
    }catch(error){
     if(error.name=== "validationError"){
        const validationErrors = Object.values(error.errors).map(
            (err)=>err.message
        );
        return next(new ErrorHandler(validationErrors.join(","),400));

     }
     return next(error);
    }
};