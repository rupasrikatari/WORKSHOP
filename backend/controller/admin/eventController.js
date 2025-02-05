const Event=require("../../models/admin/event");

exports.getEvents=async(req,res)=>{

    try{

        const events=await Event.find();
        res.status(200).json(events);

    }catch(e){
        console.log(e);
        res.status(500).json({message:"Internal Server Error", error:e.message});
    }

}
