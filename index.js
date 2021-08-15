const e = require('express')
const express = require('express')
const app = express()
const port = 3000
const freshers=require("./launch.js")


app.get('/', (req, res) => {
  res.end('Hello World!');
});

app.get("/list_freshers", (req, res) => {   
      // console.log(freshers)
      console.log(req.query)
      if(Object.keys(req.query).length)
      {
        const updateddata=freshers.map(e=>e[req.query.key])
      
        res.send(updateddata);

      }
      else
      {
        res.send(freshers)
      }

      

  
});
app.get("/fresher_detailsbyname", (req, res) => {   
  console.log(req.query)
  const data=freshers.filter(e=>e.name===req.query.name)
  res.send(data)
  
});

app.get("/fresher_details2bycity", (req, res) => {   
  console.log(req.query)
  const data2=freshers.filter(e=>e.city===req.query.city)
  res.send(data2)

});
app.get("/fresher_details2byid", (req, res) => {   
  console.log(req.query)
  const data8=freshers.filter(e=>e.id===req.query.id)
  res.send(data8)


});
app.get("/fresher_details2bycollege", (req, res) => {   
  console.log(req.query)
  const data9=freshers.filter(e=>e.College===req.query.College)
  res.send(data9)


});




app.get("/searchby_name", (req, res) => {   
  console.log(req.query)
  const data3=freshers.filter(e=>e.name.toLowerCase().includes(req.query.name.toLowerCase()))
  res.send(data3)
});
app.get("/searchby_city", (req, res) => {   
  console.log(req.query)
  const data4=freshers.filter(e=>e.city.toLowerCase().includes(req.query.city.toLowerCase()))
  res.send(data4)
});
app.get("/searchby_college", (req, res) => {   
  console.log(req.query)
  const data5=freshers.filter(e=>e.College.toLowerCase().includes(req.query.College.toLowerCase()))
  res.send(data5)
});
app.get("/searchby_id", (req, res) => {   
  console.log(req.query)
  const data6=freshers.filter(e=>e.id===req.query.id)
  res.send(data6)
});
app.get("/searchby_mentorname", (req, res) => {   
  console.log(req.query)
  const data7=freshers.filter(e=>e.Mentorname.toLowerCase().includes(req.query.Mentorname.toLowerCase()))
  res.send(data7)
});
app.get("/searchby_desciption", (req, res) => {   
  console.log(req.query)
  const data7=freshers.filter(e=>e.mentordescription.toLowerCase().includes(req.query.mentordescription.toLowerCase()))
  res.send(data7)
});




app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
    

  });