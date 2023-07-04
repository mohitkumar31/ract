const mongoose= require("mongoose")
mongoose.connect("mongodb://localhost:27017/vech-req")
.then(()=> {
    console.log("Connected Mongo")
}
)
.catch(()=>{
    console.log("error")
})

const newSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  dateOfVisit: {
    type: String,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  official: {
    type: String,
    required: true,
    enum: ["Official"],
  },
  personal: {
    type: String,
    required: true,
    enum: ["Personal"],
  },
  signatureDept: {
    type: String,
  },
  signaturePresident: {
    type: String,
  },
  Remarks: {
    type: String,
  },
});

const collection = mongoose.model("collection", newSchema);

 module.exports = collection
